import express from 'express';
import authController from "../controllers/authController.js";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/login",authController.login);

export default router;