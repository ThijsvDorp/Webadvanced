import APIHelper from "./APIHelper.js";

const auctionApi = {
   async getAllAuctions(){
        return await APIHelper.fetchData('auction');
    },
    async getAuctionById(id){
       return await APIHelper.fetchData(`auction/${id}`)
    }
}
export default auctionApi;