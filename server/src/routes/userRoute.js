import express from 'express';
import userController from "../controllers/userController.js";
import jwt from "jsonwebtoken";
import loggedIn from "../middleware/logged-in.js";
import isAdmin from "../middleware/isAdmin.js";
const router = express.Router();

router.post("/login",userController.login); //Logging in using JWT
router.delete("/logout", userController.logOut);//Logging out using JWT
router.get("/users",loggedIn, isAdmin, userController.getUsers); //Getting al users in admin dashboard

export default router;