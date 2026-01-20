import {redirect, useLoaderData, useParams} from "react-router-dom";

function Order() {
    const param = useParams()
    const loadData = useLoaderData()
    //加载loader传递数据
    console.log("loader传递data:", loadData)
    return (
        <>
            订单页面
            <span>订单id:{ param.orderId }</span>
        </>
    )
}

export function loaderOrder({params}: any) {
    console.log("loader 执行,{}", params.orderId)
    //token 存在时传递给组件，不存在时重定向
    if (!sessionStorage.token) {
        return redirect("/vite")
    }
    return fetch(`/${params.orderId}.json`)
    /*return {
        orderId: params.orderId,
        token: sessionStorage.token
    }*/
}

export default Order