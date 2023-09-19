import express from 'express';
import logTime from './middleware/log-time.js';
const app = express()
const port = 3000

import auth from './routes/auth.js';
import auctions from './routes/auctions.js';
//Tell the app to use JSON
app.use(express.json());
app.use(logTime);

//All the different routes imported.
app.use("/auth", auth);
app.use("/auctions",auctions)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})