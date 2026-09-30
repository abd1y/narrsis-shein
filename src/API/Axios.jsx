import axios from "axios";

const API=axios.create({
    baseURL:'http://127.0.0.1:8000/'
    // baseURL:'https://1narsisshein.pythonanywhere.com/'
})
export default API 