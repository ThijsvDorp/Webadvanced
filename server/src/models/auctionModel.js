import {auctions} from './db.js';
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
    },
    updateAuction(auctionId, jsonAuction){
    auctions.at(auctionId).push(jsonAuction);
    },
    deleteAuction(auctionId){
           return auctions.splice(auctionId,1)
    }
}
export default auctionModel;