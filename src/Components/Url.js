import axios from "axios"

const User = JSON.parse(localStorage.getItem("persist:root"))?.currentuser
const currentuser = User && JSON.parse(User)
const token = currentuser?.token
console.log(token)
const BASE_URL = "http://localhost:5500/api"
export const Req = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${token}`}
})