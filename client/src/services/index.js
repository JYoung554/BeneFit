import axios from 'axios'

const Client = axios.create({
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_URL
      : 'http://localhost:5000'
})

Client.interceptors.request.use(async (config) => {
  const token = localStorage.getItem()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    return config
  }
  ;(err) => Promise.reject(err)
})

export default Client
