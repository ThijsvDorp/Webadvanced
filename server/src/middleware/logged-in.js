import jwt from "jsonwebtoken";
const loggedIn = (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token){
        return res.status(401).json({message: "Unauthorized: Token is missing."})
    }
    jwt.verify(token, process.env.MY_SECRET, (err, decodedUser) => {
        req.user = decodedUser
        console.log(decodedUser)
        next();
    })
}
export default loggedIn;