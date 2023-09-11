import {auctions} from './db.js';

const auctionModel = {
    getAuctions(){
        auctions.push("Test");
        return auctions.at(0);
    },
    getAuctionById(auctionId){
        auctions.push("1");
        auctions.push("2");
        return auctions.at(auctionId)
    }
}
export default auctionModel;