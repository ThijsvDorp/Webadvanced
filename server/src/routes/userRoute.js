import express from 'express';
import userController from "../controllers/UserController.js";
import jwt from "jsonwebtoken";
import loggedIn from "../middleware/logged-in.js";
const router = express.Router();

router.post("/login",userController.login);
//router.delete("/logout", userController.)

export default router;