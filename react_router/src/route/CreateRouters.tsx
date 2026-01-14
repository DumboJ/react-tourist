//使用createBrowserRouter/createHashRouter API定义路由,返回声明的 type 而不是函数组件
import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ReactPage from "../pages/ReactPage.tsx";
import HookUseNavigate from "../pages/HookUseNavigate.tsx";
import PageNotFound from "../pages/PageNotFound.tsx";

// !! 注意必须是非函数组件，否则RouterProvider
// 报错提示:TS2322: Type '() => Router' is not assignable to type 'Router'. 要返回type而不是函数组件
const CreateRouters =  createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/react",
        element: <ReactPage/>
    }, {
        path: "/useNavigate",
        element: <HookUseNavigate/>
    }, {
        path: "/notFount",
        element: <PageNotFound/>
    }
])
export default CreateRouters