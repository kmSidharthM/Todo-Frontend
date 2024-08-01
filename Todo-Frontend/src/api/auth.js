import axios from "axios";

const authenticate = (loginData) => axios.post('login/authenticate', loginData);

const register = (loginData) => axios.post('login/register', loginData);

const authApi = { authenticate, register };
export default authApi;