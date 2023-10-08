import authModel from "../models/authModel.js";
import escapeHtml from "escape-html";
import {users} from "../models/db.js";
import bcrypt from "bcrypt";
import auctionController from "./auctionController.js";
import jwt from "jsonwebtoken";
const authController = {
async login(req,res){
    try{

        const {username, password} = req.body
        const hash = await authModel.hashPassword(password);
        const user = users.find((user) => user.username === username)
        if (user || await user.comparePassword(password, hash)){
            const MY_SECRET = "hello";
            const token = jwt.sign(user,MY_SECRET, { expiresIn: "1h"})
            res.cookie("token", token, {
                httpOnly: true
            });
            return res.status(200).json({message:"Logging in...."})
        } else {
            return res.status(401).json({message: "Incorrect username or password, try again!"})
        }
    } catch (err){
        res.status(500).json({message: "Internal server error"});
    }
}

}
export default authController;
