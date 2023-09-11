import express from "express";
const router = express.Router();
import auctionController from '../controllers/auctionController.js';

router.get('/', auctionController.getAuctions); //Getting all auctions

router.get('/:id',auctionController.getAuctionById); //Getting one auction
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