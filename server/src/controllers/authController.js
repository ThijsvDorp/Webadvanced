import dotenv from 'dotenv';
import authModel from "../models/authModel.js";
import escapeHtml from "escape-html";
import {users} from "../models/db.js";
import bcrypt from "bcrypt";
import auctionController from "./auctionController.js";
import jwt from "jsonwebtoken";
const authController = {
async login(req,res){
    try{
        dotenv.config();
        const {username, password} = req.body
        console.log(username, password)
        const hash = await authModel.hashPassword(password);
        console.log(hash)
        const user = users.find((user) => user.username === username)
        console.log(user)
        if (user || await user.comparePassword(password, hash)){
            const token = jwt.sign(user,process.env.MY_SECRET, { expiresIn: "1h"})
            res.cookie("token", token, {
                httpOnly: true
            })
            return res.status(200).json({message:"Logging in....", token: token})

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

export default authController;
