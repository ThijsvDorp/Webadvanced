import auctionModel from '../models/auctionModel.js';
import {auctions, users} from "../models/db.js";
import escapeHtml from 'escape-html';
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
            const auctionId = escapeHtml(req.params.id);
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
            if (newAuction){
                console.log("New auction has been added:", newAuction);
                res.status(200).json({message: "Auction added successfully"});
            } else {
                res.status(404).json({error: "Can't create auction"})
            }
        } catch (err) {
            console.error("Error adding auction", err);
            res.status(500).json({error: "Internal server error"});
        }
    },
    async updateAuction(req,res){
        try{
            const auctionId = req.params.id;
            const auction = req.body;
            const auctionUpdate = await auctionModel.updateAuction(auctionId, auction);
            console.log(auctionUpdate);
            if (auctionUpdate === auction){
                res.status(200).json({message: "Auction updated successfully"});
            } else {
                res.status(404).json({error: "Auction not found"})
            }
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
            } else{
                res.status(404).json({error: "Auction not found"})

            }
        } catch (err) {
            console.error("Error deleting Auction", err);
            res.status(500).json({error: "Internal server error"})
        }
    },
    async addBid(req,res){
        try{
            const auctionId = req.params.id;
            const userId = req.user.userId;
            const bid = req.body;
            const bidJson =  {bid, userId};
            console.log(auctionId,bid,userId)
            const result = auctionModel.addBid(auctionId, bid);
            if (result){
                res.status(200).json({message: "Bid added successfully"})
            } else{
                res.status(404).json({error: "Auction not found"})
            }
        } catch (err){
            res.status(500).json({error: "Internal server error"})
        }
    }
}
    export default auctionController;