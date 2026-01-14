import {useNavigate} from "react-router-dom";
import "../App.css"
function HookUseNavigate(){

    //必须在函数组件内定义
    const navigate = useNavigate()
    const handleNaviClick=()=>{
        navigate("/")
    }
    return (
        <div className="card">
            <button onClick={handleNaviClick}>
                UseNavigate to home.
            </button>
        </div>
    )
}
export  default  HookUseNavigate;