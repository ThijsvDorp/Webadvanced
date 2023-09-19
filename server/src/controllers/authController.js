import authModel from "../models/authModel.js";
import escapeHtml from "escape-html";
import {users} from "../models/db.js";
import bcrypt from "bcrypt";
const authController = {
async login(req,res){
    users.push()
    const {username, password} = req.body;
    try{
        const user = users.find((user) => user.username === username)
        if (!user || user.comparePassword(password)){
            return res.status(401).json({message: "Incorrect username or password, try again!"})
        }
    } catch (err){
        res.status(500).json({message: "Internal server error"});
    }
}
}
export default authController;
