import express from "express";
import auctionController from '../controllers/auctionController.js';
import isAdmin from "../middleware/isAdmin.js";
import loggedIn from "../middleware/logged-in.js";
const router = express.Router();

router.get('/', auctionController.getAuctions); //Getting all auctions
router.get('/:id',auctionController.getAuctionById); //Getting one auction
router.post('/', loggedIn ,auctionController.addAuction); // Creating a new auction
router.patch('/:id', loggedIn, isAdmin, auctionController.updateAuction); //Update an auction
router.delete('/:id', auctionController.deleteAuction); // Delete an auction
export default router;