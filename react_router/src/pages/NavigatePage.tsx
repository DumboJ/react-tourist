import {Navigate} from "react-router-dom";

export default function NavigatePage(){
    return (
        <>
            //默认不会停留在当前页面，直接重定向到首页
            <h1>This is Navigate Page Content.</h1>
            <Navigate to="/"></Navigate>
        </>
    )
}