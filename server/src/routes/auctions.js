import express from "express";
import auctionController from '../controllers/auctionController.js';
import roleCheck from "../middleware/role-check.js";
import loggedIn from "../middleware/logged-in.js";
const router = express.Router();

router.get('/', auctionController.getAuctions); //Getting all auctions
router.get('/:id',auctionController.getAuctionById); //Getting one auction
router.post('/new', loggedIn ,auctionController.addAuction); // Creating a new auction
router.patch('/update/:id', loggedIn, auctionController.updateAuction); //Update an auction
router.delete('/delete/:id', loggedIn , roleCheck , auctionController.deleteAuction); // Delete an auction
export default router;