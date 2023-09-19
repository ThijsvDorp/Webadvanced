const loggedIn = (req,res,next) => {
  /*  if (){
        next();
    } else {
        res.status(401).send({message: "User is not logged in!"})
    }*/
    next();
}
export default loggedIn;