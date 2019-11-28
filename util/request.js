import axios from 'axios'

const request = axios.create({
  baseURL: 'http://47.106.189.145/api',
  timeout: 30000
})
export default request
