import {createBrowserRouter, Navigate} from "react-router-dom";
// @ts-ignore
import Welcome from '@/views/Welcome.tsx';
// @ts-ignore
import Tips404 from '@/views/Tips404';
/*todo 查看报错问题原因*/
// @ts-ignore
import Tips403 from '@/views/Tips403';
// @ts-ignore
import Login from '@/views/Login';
//@ts-ignore
import Test from "@/views/TestReq";

const router = [
    {
        path: '/',
        element: <Welcome/>
    }, {
        path: "/login",
        element: <Login/>
    }, {
        path: "/403",
        element: <Tips403/>
    },
    {
        path: "/404",
        element: <Tips404/>
    }, {
        path: '/test',
        element: <Test/>
    }, {
        path: "*",
        element: <Navigate to='/404'/>
    }
]
export default createBrowserRouter(router)