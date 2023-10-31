const BASE_URL = "http://localhost:3000";
class APIHelper {
    async fetchData(endpoint, authRequired = false){
        const headers = {};

        if (authRequired){
            const token = localStorage.getItem('token');
            if (token){
                headers['Authorization'] = `Bearer ${token}`;
            }
        }

        const response = await fetch(`${BASE_URL}/${endpoint}`,{
            method: 'GET',
            headers: headers
        });
        if (response.ok){
            throw { status: response.status, error: await response.json()};
        }
        return await response.json();
    }
}
export default new APIHelper();