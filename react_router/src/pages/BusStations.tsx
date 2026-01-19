import {useParams} from "react-router-dom";

function BusStations() {
    //可以获取路径动态传递参数，但需保证参数名同路由路径传递的一致
    const param = useParams()
    return (
        <>
            <h1>线路站点总览</h1>
            <span>公交线路:{param.lineId}</span>
            <h2>公交站点</h2>
            <span>站点1</span>
            <span>站点2</span>
            <span>站点3</span>
        </>
    )
}
export default BusStations