import express from 'express';
import logTime from './middleware/log-time.js';
import userRoute from './routes/userRoute.js';
import auctionRoute from './routes/auctionRoute.js';
import cors from 'cors';
const app = express()
const port = 3000
app.use(express.json()); //Tell the app to use JSON.
app.use(logTime); //Sends a Date to the console whenever there is a HTTP request.
app.use(cors);

//All the different routes imported.
app.use("/user", userRoute);
app.use("/auction",auctionRoute);
//Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})