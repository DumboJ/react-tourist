import {useEffect} from "react";
import request from "../utils/request";
// @ts-ignore
import {showLoading} from "@/utils/loading";

function Test() {
    useEffect(()=>{
        request.get(
            "/roles",
            {"id": 11212}
        ).catch((error:any)=>{
            console.log(error)
        })
    },[])
    useEffect(()=>{
        request.post(
            "/admin",
            {"tt": 213}
        ).catch((error:any)=>{
            console.log(error)
        })
    },[])
    return (
        <>
            <div className="hdr"> 测试通过 Axios 发送请求 </div>
        </>
    )
}

export default Test