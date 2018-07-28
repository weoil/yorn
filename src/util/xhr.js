import axios from "axios"
let baseApi
if (process.env.NODE_ENV === "production") {
  baseApi = "http://104.128.237.183:3000/api"
} else {
  baseApi = "http://192.168.50.2:3000/api"
}

const instance = axios.create({
  baseURL: baseApi
})

export default instance
