import {auctions} from '../models/db.js';
import {users} from "../models/db.js";
   async function getAuctions(){
        return auctions;
    }
    export default {getAuctions};