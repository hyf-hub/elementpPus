import axios from 'axios'
import { BaseUrl as baseURL } from '@/config'
// import { Message, MessageBox } from 'element-plus';
const token = localStorage.getItem('token') || '';
console.log('获取的token',token)
const service = axios.create({
  baseURL,
  headers: {
    token
  }
})
export default service