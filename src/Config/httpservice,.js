import axios from "axios";
// import { toast } from "react-toastify";
// import TokenHelper from "../helpers/Token.helper";

const API_BASE_URL = 'http://localhost:4000';
// axios.defaults.baseURL = "https://backapp.pathakassociates.in"
// axios.defaults.baseURL = "http://localhost:53321"
// axios.defaults.baseURL = "http://localhost:3001"

axios.interceptors.request.use(async (request) => {
    console.log(request)

    request.headers = {
        ...request.headers,
        Authorization: `Bearer ${window.localStorage.getItem('WedsinToken')}`,
    };




    return request;
});

axios.interceptors.response.use(null, (err) => {
    const expectedError =
        err.response && err.response.status >= 400 && err.response.status < 500;
    if (!expectedError) {
        console.log("Unexpected error occured, please Try again");
    }
    return Promise.reject(err);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
};
