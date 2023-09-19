import authModel from "../models/authModel.js";
import escapeHtml from "escape-html";
import {users} from "../models/db.js";
import bcrypt from "bcrypt";
import auctionController from "./auctionController.js";
const authController = {
async login(req,res){
    const hash = await authModel.hashPassword("pass");

    users.push({
        username: "user",
        password: hash
    })
    try{
        console.log(users.at(0));
        const {username, password} = req.body
        const user = users.find((user) => user.username === username)
        console.log(password);
        console.log(hash);
        if (user || user.comparePassword(password,hash)){

            return res.status(401).json({message: "Incorrect username or password, try again!"})
        }
    } catch (err){
        res.status(500).json({message: "Internal server error"});
    }
}
}
export default authController;
