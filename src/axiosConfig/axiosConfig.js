import axios from "axios"

const httpClient = axios.create({
  baseURL: 'https://minhas-financas-production-d5c5.up.railway.app',
  withCredentials: true
})

export default httpClient