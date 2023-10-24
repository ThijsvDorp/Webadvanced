import express from 'express';
import authController from "../controllers/authController.js";
import jwt from "jsonwebtoken";
import loggedIn from "../middleware/logged-in.js";
const router = express.Router();

router.post("/login",authController.login);
//router.delete("/logout", authController.)

export default router;