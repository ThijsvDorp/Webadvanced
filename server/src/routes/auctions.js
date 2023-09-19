import express from "express";
import auctionController from '../controllers/auctionController.js';
import roleCheck from "../middleware/role-check.js";
const router = express.Router();

router.get('/', auctionController.getAuctions); //Getting all auctions

router.get('/:id',auctionController.getAuctionById); //Getting one auction
//Creating an auction
router.post('/new',auctionController.addAuction); // Creating a new auction
//Update an auction
router.patch('/update/:id',auctionController.updateAuction); //Update an auction
//Delete an auction
router.delete('/delete/:id', roleCheck , auctionController.deleteAuction); // Delete an auction
export default router;