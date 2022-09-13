import axios from 'axios'
const instance = axios.create({
    baseURL:'/api',
    timeout:10000
})

//请求拦截
instance.interceptors.request.use(config=>{
    


    return config;
},err=>{
    return Promise.reject(err);
})

//响应拦截
instance.interceptors.response.use(res=>{
    return res;
},err=>{
    return Promise.resolve(err);
})

export default instance;