import express from "express";
import auctions from "./auctions.js";
const router = express.Router();

router.get("/",async (req,res) =>{
    try{
        const users = users.find()
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

export default router;