import {users} from './db.js';
import bcrypt from 'bcrypt';
const authModel = {
    comparePassword(password){
        return bcrypt.compare(password,this.password)
    },
    hashPassword(){

    },
    findUser(username){
       return users.find(username);
    },

    findPassword(password){
        return users.find(password);
    }
}
export default authModel;