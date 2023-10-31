import jwt from "jsonwebtoken";
import {invalidTokens} from "../models/db.js";
const loggedIn = (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (invalidTokens.includes(token)){
        return res.status(401).json({message: "Unauthorized: Token is missing."})
    }
    jwt.verify(token, process.env.MY_SECRET, (err, decodedUser) => {
        if (err) return res.status(403).json({message: "Unauthorized: Token is invalid."});
        req.user = decodedUser
        next();
    })
}
    export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ error: 'No token provided' });

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Invalid token' });

        // Bind user information to the request
        req.userId = decoded.userId;
        next();
    });
};
export default loggedIn;