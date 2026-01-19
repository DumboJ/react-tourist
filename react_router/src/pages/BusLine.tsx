import {Outlet, useParams} from "react-router-dom";

function BusLine() {
    //可以获取路径动态传递参数，但需保证参数名同路由路径传递的一致
    const param = useParams()
    return (
        <>
            <h1>这是公交车总览页面</h1>
            <span>公交线路:{param.lineId}</span>
            //显示子路由页面组件的容器
            <Outlet/>
        </>
    )
}
export default BusLine