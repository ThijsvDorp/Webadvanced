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
        const initLength = auctions.length;
        auctions.push(jsonAuction);
        if (auctions.length > initLength){
            return jsonAuction;
        }
    },

    updateAuction(auctionId, jsonAuction){
        const oldValue = auctions[auctionId];
        if (auctions[auctionId] !== oldValue || auctionId < auctions.length){
            auctions[auctionId] = jsonAuction;
            return auctions[auctionId];
        }
    },

    deleteAuction(auctionId){
        return auctions.splice(auctionId,1)
    }
}
export default auctionModel;