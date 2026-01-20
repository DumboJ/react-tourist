#### 工程化项目创建
#### 1. 目录结构
 ```text
 |-src
    |- api              接口
    |- components       组件
    |- config           配置
    |- hook             自定义hook
    |- layout           布局
    |- router           路由
    |- types            ts定义
    |- utils            工具
    |- views            页面
 ```
#### 2.组件安装
`yarn add react-router-dom`
#### 2.1 引入配置
- [tsconfig.json](tsconfig.json)
```js
"compilerOptions"
:
{
    "baseUrl"
:
    "./",//空间目录
        "paths"
:
    {
        "@/*"
    :
        ["src/*"]//映射src下的所有
    }
}
```
- [vite.config.ts](vite.config.ts)
```js
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    //服务相关配置
    server: {
        host: 'localhost',
        port: 6001,
        proxy: {
            '/api': 'http://xxxx'
        }
    },
    //@路径配置
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    plugins: [react()],
})

```
#### 2.2 路由创建
~~~js
import {createBrowserRouter, Navigate} from "react-router-dom";
// @ts-ignore
import Welcome from '@/views/Welcome.tsx';
// @ts-ignore
import Tips404 from '@/views/Tips404';
/*todo 查看报错问题原因*/
// @ts-ignore
import Tips403 from '@/views/Tips403';
// @ts-ignore
import Login from '@/views/Login';

const router = [
    {
        path: '/',
        element: <Welcome/>
    },{
        path:"/login",
        element: <Login/>
    },{
        path:"/403",
        element: <Tips403/>
    },
    {
        path:"/404",
        element: <Tips404/>
    },{
        path:"*",
        element: <Navigate to='/404'/>
    }
]
export default createBrowserRouter(router)
~~~
#### 2.3 antd ui组件安装
- [ant designer](https://ant-design.antgroup.com/docs/react/use-with-vite-cn)
- 安装
```shell
yarn add antd
```
- [package.json](package.json) antd 版本
- ![antd 版本](./public/cut/antd_ver.png)
#### 2.4 使用 Ant Designer 配置403/404页面内容
- [ant Result 组件](https://ant-design.antgroup.com/components/result-cn)
- 关联前序 useNavigate hook 页面跳转的使用
```tsx
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
```