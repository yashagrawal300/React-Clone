import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-b8fd4/us-central1/api' //API URL (CLOUD FUNCTION)
});

export default instance;

