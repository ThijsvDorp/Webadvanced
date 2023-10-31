import APIHelper from "./APIHelper.js";
const BASE_URL = "http://localhost:3000";
const userApi = {
    async verifyToken(token){
        if (token){
            try {
                const response = await fetch(`${BASE_URL}/user/verifyToken`,{
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                if (data.valid){
                    loggedIn.set(true);
                    user.set(data.user);
                    isAdmin.set(data.user.role === 'admin');
                } else {
                    localStorage.removeItem('token');
                    loggedin.set(false);
                    user.set(null);
                    isAdmin.set(false);
                    console.error('token is ongeldig.')
                }
            } catch (err){
                console.error('Fout tijdens verifieren token', err);
            }
        }
    }
}
export default userApi;