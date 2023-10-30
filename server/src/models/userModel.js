import {users} from './db.js';
import bcrypt from 'bcrypt';

const userModel = {

    async comparePassword(password, hash) {
        return bcrypt.compare(password, hash);
    },
    async hashPassword(password) {
        return bcrypt.hash(password, 10);
    },
    async findUser(username){
       return users.find(username);
    },

    async findPassword(password){
        return users.find(password);
    },
    async getUsers(){
        return users;
    }
}
export default userModel;