import dotenv from 'dotenv';
import userModel from "../models/userModel.js";
import escapeHtml from "escape-html";
import {users, refreshTokens} from "../models/db.js";
import bcrypt from "bcrypt";
import auctionController from "./auctionController.js";
import jwt from "jsonwebtoken";
dotenv.config();
const userController = {

    async login(req,res){
    try{
        const {username, password} = req.body
        const hash = await userModel.hashPassword(password);
        const user = users.find((user) => user.username === username)
        if (user || await user.comparePassword(password, hash)){
            const accessToken = jwt.sign({userId: user.id, username: user.username, role: user.role},process.env.MY_SECRET, { expiresIn: "15m"})
            return res.status(200).json({message:"Logging in....", token: accessToken})
        } else {
            return res.status(401).json({message: "Incorrect username or password, try again!"})
        }
    } catch (err){
       return res.status(500).json({message: "Internal server error" });
    }
},

    async logOut(req,res) {
    try{

    } catch (err){

    }
    }

}

export default userController;
