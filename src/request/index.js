import axios from 'axios'
import { BaseUrl as baseURL } from '@/config'
// import { Message, MessageBox } from 'element-plus';
const service = axios.create({
  baseURL
})
export default service