import bcrypt from "bcrypt";
import userModel from "./userModel.js";

const auctions= [
    {
      id: 1,
      name: "Auction 1",
      description: "Dit is een veiling",
      startPrice: 0,
      endTime: "",
      categories: {

      },
      bids: [
          {bidAmount: 1, userId: '1'},
          {bidAmount: 2, userId: '2'},
          {bidAmount: 3, userId: '3'}
      ]
    },
    {
        id: 2,
        name: "Auction 2",
        description: "Dit is een veiling",
        startPrice: 0,
        endTime: "",
        categories: {

        },
        bids: [
        ]
    },
    {
        id: 3,
        name: "Auction 3",
        description: "Dit is een veiling",
        startPrice: 0,
        endTime: "",
        categories: {

        },
        bids: [
            {bidAmount: 1, userId: '1'},
            {bidAmount: 2, userId: '2'},
            {bidAmount: 3, userId: '3'}
        ]
    },
    {
        id: 4,
        name: "Auction 1",
        description: "Dit is een veiling",
        startPrice: 0,
        endTime: "",
        categories: {

        },
        bids: [
            {bidAmount: 1, userId: '1'},
            {bidAmount: 2, userId: '2'},
            {bidAmount: 3, userId: '3'}
        ]
    },

];
const password = await bcrypt.hash("password",10);
const users = [];

users.push({
    id: 1,
    username: "user",
    password: password,
    role: "default"
})

users.push({
    id: 2,
    username: "admin",
    password: password,
    role: "admin"
})
const invalidTokens = [];

export {auctions,users, invalidTokens};

