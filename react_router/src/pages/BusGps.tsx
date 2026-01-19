import {useParams} from "react-router-dom";

function BusGps(){
    const params = useParams()
    return (
        <>
            <h1>公交动态数据</h1>
            <span>线路:{params.lineId}</span>
            <th>
                locations
            </th>
            <tr>位置1</tr>
            <tr>位置2</tr>
            <tr>位置3</tr>
        </>
    )
}
export default BusGps