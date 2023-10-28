import jwt from "jsonwebtoken";
const isAdmin = (req, res, next) => {
    const user = req.user
    console.log("req:user: ", req.user);

    if (user.role !== 'admin'){
        return res.status(403).json({error: "Requires admin role!"})
    }
    next();
}
export default isAdmin;