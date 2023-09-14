import auctionModel from '../models/auctionModel.js';
import {auctions, users} from "../models/db.js";
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
    },
    async addAuction(req,res){
        try{
            const auction = req.body;
            const newAuction = await auctionModel.addAuction(auction);
            res.status(200).json({message: "Auction added successfully"});
        } catch (err) {
            console.error("Error adding auction", err);
            res.status(500).json({error: "Internal server error"});
        }
    },
    async updateAuction(req,res){
        try{
            const auctionId = req.params.id;
        } catch (err) {
            console.error("Error updating Auction", err);
            res.status(500).json({error: "Internal server error"})
        }
    },
    async deleteAuction(req,res){
        try{
            const auctionId = req.params.id;
            const result = auctionModel.deleteAuction(auctionId);
            if (result){
                res.status(200).json({message: "Auction deleted successfully"});

            } else {
                res.status(404).json({error: "Auction not found"})
            }
        } catch (err) {
            console.error("Error deleting Auction", err);
            res.status(500).json({error: "Internal server error"})
        }
    }
}
    export default auctionController;