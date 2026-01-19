//使用 useRoutes 定义路由
import {useRoutes} from "react-router-dom";
import App from "../App.tsx";
import ReactPage from "../pages/ReactPage.tsx";
import HookUseNavigate from "../pages/HookUseNavigate.tsx";
import PageNotFound from "../pages/PageNotFound.tsx";

function UseRouters() {
    const route = useRoutes(
        [
            {
                path:"/",
                element:<App/>
            },
            {
                path:"/react",
                element:<ReactPage/>
            },{
                path:"/useNavigate",
                element:<HookUseNavigate/>
            },{
                path:"/notFount",
                element:<PageNotFound/>
            }
        ]
    )
    return route
}
export default UseRouters