import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

function Tips404() {
    /*使用 useNavigate 跳转首页*/
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate("/")
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="抱歉、当前访问页面不存在."
            extra={ <Button type="primary" onClick={ handleOnClick }>返回首页</Button> }
        />
    )
}

export default Tips404