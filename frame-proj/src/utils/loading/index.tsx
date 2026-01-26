//展示加载组件
import ReactDom from "react-dom/client";
import Loading from "../../utils/loading/Loading";
let count = 0
export const showLoading = () => {
    if (count === 0) {
        //创建html节点
        const loading = document.createElement("div");
        loading.setAttribute('id','loading')
        //元素追加到body中
        document.body.appendChild(loading)
        //渲染组件
        ReactDom.createRoot(loading).render(<Loading tips='加载中...'/>)
    }
    count++;
};
//隐藏加载组件
export const hideLoading = () => {
    if (count > 0) {
        count--;
    }
    if (count === 0) {
        document.body.removeChild(document.getElementById('loading') as HTMLDivElement);
    }
};