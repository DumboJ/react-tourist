import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

function Tips403() {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate("/")
    }
    return (
        <>
            <Result
                status="403"
                title="403"
                subTitle="抱歉、您无权访问当前页面"
                extra={ <Button type="primary" onClick={ handleOnClick }>返回首页</Button> }
            />
        </>
    );
}

export default Tips403