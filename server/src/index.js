import express from 'express';
const app = express()
const port = 3000

import auth from './routes/auth.js';
import auctions from './routes/auctions.js';

app.use("/auth", auth);
app.use("/auctions",auctions);

app.get('/', (req, res) => {
  console.log(req);
   //res.send('Hello World!')
  res.json({ msg: "hello world"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})