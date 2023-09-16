import {auctions} from './db.js';
import {json} from "express";
auctions.push("Test");
auctions.push("Test1");
auctions.push("Test2");
const auctionModel = {
    getAuctions(){
        return auctions.at(0);
    },
    getAuctionById(auctionId){
        return auctions.at(auctionId);
    },
    addAuction(jsonAuction){
        auctions.push(jsonAuction);
        return jsonAuction;
    },
    updateAuction(auctionId, jsonAuction){
        auctions.push(jsonAuction);
    auctions.at(auctionId).replace(jsonAuction);
    return jsonAuction;
    },
    deleteAuction(auctionId){
           return auctions.splice(auctionId,1)
    }
}
export default auctionModel;