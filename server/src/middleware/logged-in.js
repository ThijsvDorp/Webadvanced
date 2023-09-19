const loggedIn = (req,res,next) => {
    if (req.body){
        next();
    } else {
        res.status(401).send({message: "User is not logged in!"})
    }
}
export default loggedIn;