import axios from 'axios'
const instance=axios.create({
    baseURL:'https://api.it120.cc/xiaochengxu/',
    // timeout:5000,
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
instance.interceptors.request.use((res)=>{
    return res
})
instance.interceptors.response.use((res)=>{
    return res.data
})
export default instance