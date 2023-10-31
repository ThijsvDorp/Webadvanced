import {auctions} from './db.js';


const auctionModel = {

    async getAuctions(){
        return auctions;
    },

    async getAuctionById(auctionId){
        return auctions.at(auctionId);
    },

    async addAuction(jsonAuction){
        const initLength = auctions.length;
        auctions.push(jsonAuction);
        if (auctions.length > initLength){
            return jsonAuction;
        }
    },

    async updateAuction(auctionId, jsonAuction){
        const oldValue = auctions[auctionId];
        if (auctions[auctionId] !== oldValue || auctionId < auctions.length){
            auctions[auctionId] = jsonAuction;
            return auctions[auctionId];
        }
    },

    async deleteAuction(auctionId){
        const index = auctions.findIndex(auction => auction.id === Number(auctionId))
        console.log("Index delete auction: ",index)
        if (index !== -1){
           const deleted = auctions.splice(index,1);
            console.log(deleted)
            return true;
        }
            return false;
    },
    async addBid(auctionId, bid){
        const auction = auctions.at(auctionId);
        console.log(bid)
        auction.bids.push(bid);
        return auction.bids.includes(bid);
    },
    async getHighestBid(auction){
        if (!auction.bids || auction.bids.length === 0){
            return 0;
        } else {
            return Math.max(...auction.bids.map(bid => bid.bidAmount))
        }
    }
}
export default auctionModel;