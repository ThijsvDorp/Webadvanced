import dotenv from 'dotenv';
import userModel from "../models/userModel.js";
import escapeHtml from "escape-html";
import {users, invalidTokens} from "../models/db.js";
import bcrypt from "bcrypt";
import auctionController from "./auctionController.js";
import jwt from "jsonwebtoken";

const userController = {

    async login(req,res){
    try{
        dotenv.config();
        const {username, password} = req.body
        const hash = await userModel.hashPassword(password);
        const user = users.find((user) => user.username === username)
        if (user || await user.comparePassword(password, hash)){
            const token = jwt.sign({userId: user.id, username: user.username, role: user.role},process.env.MY_SECRET, { expiresIn: "15m"})
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
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        console.log(token)
        invalidTokens.push(token);
        res.status(204).json({message: "Logged out.."})
    } catch (err){
        res.status(500).json({error: "Internal server error"})
    }
    },
    async getUsers(req,res){
        try{
            const users = await userModel.getUsers()
            if (users){
                res.status(200).json(users);
            } else {
                res.status(404).json({error: "Users not found"});
            }
        } catch (err){
            res.status(500).json({error: "Internal server error"});
        }
    }
}

export default userController;
