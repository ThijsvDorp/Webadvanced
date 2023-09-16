import express from "express";
const router = express.Router();
import auctionController from '../controllers/auctionController.js';

router.get('/', auctionController.getAuctions); //Getting all auctions

router.get('/:id',auctionController.getAuctionById); //Getting one auction
//Creating an auction
router.post('/new',auctionController.addAuction); // Creating a new auction
//Update an auction
router.patch('/update/:id',auctionController.updateAuction); //Update an auction
//Delete an auction
router.delete('/delete/:id', auctionController.deleteAuction); // Delete an auction
export default router;