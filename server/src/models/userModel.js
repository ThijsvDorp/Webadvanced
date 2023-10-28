import {users} from './db.js';
import bcrypt from 'bcrypt';

const userModel = {

    async comparePassword(password, hash) {
        return bcrypt.compare(password, hash);
    },
    async hashPassword(password) {
        return bcrypt.hash(password, 10);
    },
    findUser(username){
       return users.find(username);
    },

    findPassword(password){
        return users.find(password);
    }
}
export default userModel;