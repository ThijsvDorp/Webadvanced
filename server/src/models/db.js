import bcrypt from "bcrypt";

const auctions= [];
const users = [];
export {auctions,users};
 const password = await bcrypt.hash("pass",10)
users.push({
    username: "user",
    password: password,
})
users.push({
    username: "admin",
    password: password,
})