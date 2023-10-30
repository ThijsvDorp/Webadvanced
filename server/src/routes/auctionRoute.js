import express from "express";
import auctionController from '../controllers/auctionController.js';
import isAdmin from "../middleware/isAdmin.js";
import loggedIn from "../middleware/logged-in.js";
const router = express.Router();

router.get('/', loggedIn ,auctionController.getAuctions); //Getting all auctions
router.get('/:id', loggedIn ,auctionController.getAuctionById); //Getting one auction
router.post('/', loggedIn ,auctionController.addAuction); // Creating a new auction
router.patch('/:id', loggedIn, isAdmin, auctionController.updateAuction); // Update an auction
router.delete('/:id',loggedIn, isAdmin, auctionController.deleteAuction); // Delete an auction
router.post('/:id/bid', loggedIn, auctionController.addBid); // Adding a big to a existing auction
export default router;