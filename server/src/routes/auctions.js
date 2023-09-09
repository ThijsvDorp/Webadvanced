import express from "express";
const router = express.Router();
import Auction from '../controllers/auctionController.js';
//Getting all auctions
router.get('/',async (req, res) => {
    try{
        const auctions = await Auction.getAuctions();
        res.json(auctions);
    }catch(err){
    res.status(500).json({message: err.message})
    }
});
//Getting one auction
router.get('/:id',(req,res) => {
res.send(req.params.id)
});
//Creating an auction
router.post('/',(req,res) => {

});
//Update an auction
router.patch('/:id',(req,res) => {

});
//Delete an auction
router.delete('/:id',(req,res) => {

});
export default router;