import express from "express";
const router = express.Router();
import bidController from "../controllers/bidController.js";


router.get('/:id',bidController.getBidsByAuction); //Getting all the bids of an auction.

router.post('/new',); //Adding a bid to an auction
//Update an auction
router.patch('/:id',);
//Delete an auction
router.delete('/delete/:id',);
export default router;