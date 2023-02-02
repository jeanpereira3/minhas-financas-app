import axios from "axios"

const httpClient = axios.create({
  baseURL: 'minhas-financas-production-d5c5.up.railway.app'
})

export default httpClient