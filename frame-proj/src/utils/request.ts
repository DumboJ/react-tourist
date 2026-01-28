import axios from "axios";
import { showLoading} from "../utils/loading";
console.log(import.meta.env)
/*封装 axios 的get/post请求 */
const instance:any = axios.create({
    baseURL: 'http://localhost:7001/',
    timeout: 1000,
    timeoutErrorMessage:"请求超时，请稍后重试",//请求超时文案
    withCredentials:true,//默认跨域
    headers: {'X-Custom-Header': 'foobar'}
});
//请求拦截器
/*instance.intercepts.request.use(
    () =>{
        showLoading()
    },(error:AxiosError)=>{
        return Promise.reject(error);
    }
)*/
/*instance.interceptors.request.use(
    (config: any) => {
        showLoading()
        return {
            ...config
        }
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

//响应拦截器
instance.intercepts.response.use(
    (response:any)=>{
        const data = response.data
        hideLoading();
        if (data.code == 500) {
            message.error(data.msg);
            localStorage.removeItem("token");
            location.href = '/login';
        } else if (data.code != 0) {
            message.error(data.msg);
            return Promise.reject(data);
        }
        return data;
    },(error:AxiosError)=>{
        hideLoading()
        return Promise.reject(error.message)
    }
)*/

export default {
    get(url:string,params:any){
        showLoading()
        return instance.get(url, {params});
    },
    post(url:string,params:any){
        return instance.post(url, params);
    }
}
