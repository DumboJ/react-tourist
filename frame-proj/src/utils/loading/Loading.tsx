import {Spin} from "antd";
//引入样式
import './load.less'
//需要子元素包裹才会显示 tip 值
const content = <div style={{padding:50,background: 'rgba(0, 0, 0, 0.05)', borderRadius: 2,}}/>
//包装组件 提示信息可传入，默认值 'loading'
function Loading({tips='loading'}:{tips:string}){
    return <Spin tip={tips} size='large' className='request-loading'>
        {content}
    </Spin>
}
export default Loading