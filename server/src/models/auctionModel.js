import {auctions} from './db.js';


const auctionModel = {
    getAuctions(){
        return auctions;
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
        const index = auctions.findIndex(auction => auction.id === Number(auctionId))
        console.log("Index delete auction: ",index)
        if (index !== -1){
           const deleted = auctions.splice(index,1);
            console.log(deleted)
            return true;
        }
            return false;
    }
}
export default auctionModel;