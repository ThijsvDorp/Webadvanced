import auctionModel from '../models/auctionModel.js';
import {users} from "../models/db.js";
const auctionController = {
    async getAuctions(req,res){
        try{
            const auctions = await auctionModel.getAuctions();
            if (auctions){
                res.status(200).json(auctions);
            } else {
                res.status(404).json({error: "Auctions not found"});
            }
        } catch(err){
            console.error("Error getting auctions", err);
            res.status(500).json({error: "Internal server error"});
        }
    },
    async getAuctionById(req,res){
        try{
            const auctionId = req.params.id;
            const auction = await auctionModel.getAuctionById(auctionId);
            if (auction){
                res.status(200).json(auction);
            } else {
                res.status(404).json({error: "Auction not found"})
            }
        } catch (err) {
            console.error("Error getting auction", err);
            res.status(500).json({error: "Internal server error"});
        }
    }
}
    export default auctionController;