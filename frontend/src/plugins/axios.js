import axios from 'axios';

// se aggiungo 'Access-Control-Allow-Origin': '*' mi da errore di CORS policy
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default axiosInstance;