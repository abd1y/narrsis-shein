import axios from "axios";

const API=axios.create({
    // baseURL:'http://127.0.0.1:8000/'
    baseURL:'https://narsis-sheinapi.onrender.com'
})
export default API 