#### React Router 相关
[官网链接](https://reactrouter.com/7.9.3/home) <br/>
[中文链接](https://gongph.github.io/react-router7-doc/home/)

#### 1. 安装路由依赖
~~~shell
    npm install react-router-dom
~~~

#### 2. 路由-创建
##### 2.1 标签定义
- 使用 BrowserRouter/HashRouter 包裹 Routes 和具体路由配置 Route .
  - element 描述的是组件(可以直接定义也可以单独定义成页面组件)
~~~javascript
//BrowserRouter  实际路由地址 http:ip:port/...
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/a1" element={<h1>This is A1 Page.</h1>}/>
      <Route path="/a2" element={<h1>This is A2 Page.</h1>}/>
    </Routes>
  </BrowserRouter>

//HashRouter 实际路由地址 http:ip:port/#/...
<HashRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/a1" element={<h1>This is A1 Page.</h1>}/>
    <Route path="/a2" element={<h1>This is A2 Page.</h1>}/>
  </Routes>
</HashRouter>
~~~
##### 2.2 useRoutes - hook api 返回函数
~~~javascript
//函数组件中使用 useRoutes 创建出路由!!函数!! UseRouters，还是需要与 BrowserRouter 等包裹使用
//使用 useRoutes 定义路由
import {useRoutes} from "react-router-dom";
import App from "../App.tsx";
import ReactPage from "../pages/ReactPage.tsx";
import HookUseNavigate from "../pages/HookUseNavigate.tsx";
import PageNotFound from "../pages/PageNotFound.tsx";

function UseRouters() {
  const route = useRoutes([
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/react",
      element:<ReactPage/>
    },{
      path:"/useNavigate",
      element:<HookUseNavigate/>
    },{
      path:"/notFount",
      element:<PageNotFound/>
    }
  ])
  return route
}
export default UseRouters
        
//在主入口中引入使用
 <BrowserRouter>
  <UseRouters/>
 </BrowserRouter>
~~~
##### 2.3 createBrowserRouter/createHashRouter 创建.与 RouteProvider 组合使用
~~~javascript
//使用createBrowserRouter/createHashRouter API定义路由,返回声明的类型别名 Type Alias 而不是函数
import {createHashRouter} from "react-router-dom";
import App from "../App.tsx";
import ReactPage from "../pages/ReactPage.tsx";
import HookUseNavigate from "../pages/HookUseNavigate.tsx";
import PageNotFound from "../pages/PageNotFound.tsx";

// !! 注意必须是非函数组件，否则RouterProvider
// 报错提示:TS2322: Type '() => Router' is not assignable to type 'Router'. 要返回type而不是函数组件
const CreateRouters =  createHashRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/react",
    element: <ReactPage/>
  }, {
    path: "/useNavigate",
    element: <HookUseNavigate/>
  }, {
    path: "/notFount",
    element: <PageNotFound/>
  }
])
export default CreateRouters
        
        
// 在主入口中不再使用 BrowserRouter/HashRouter 组合，使用 RouterProvider 搭配使用,route 指定路由
<RouterProvider router={ CreateRouters }/>
~~~
#### 3.路由-其它应用


#### 4.页面导航
##### 4.1 NavLink
~~~javascript
//NavLink 路由跳转
  <div>
    <NavLink to='/vite'>
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </NavLink>
    <NavLink to='/react'>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </NavLink>
  </div>

//对应的路径 path 在 <Route> 中定义,element 链接页面组件
  <Route path="/vite" element={<VitePage/>}/>
  <Route path="/react" element={<ReactPage/>}/>

//页面组件定义 e.g:Vite page
export default function VitePage(){
  return (
          <>
            <h1>This is Vite Page Content.</h1>
          </>
  )
}
~~~
##### 4.2 Navigate 直接重定向
~~~javascript
//函数组件中使用
export default function NavigatePage(){
  return (
          <>
            //默认不会停留在当前页面，直接重定向到首页
            <h1>This is Navigate Page Content.</h1>
            <Navigate to="/"></Navigate>
          </>
  )
}

//路由中直接使用
<BrowserRouter>
  <Routes>
    <Route path="/onNavigate" element={<Navigate to="/"/>} />
  </Routes>
</BrowserRouter>
~~~
##### 4.3 Link 页面内跳转
~~~javascript
return (
        <>
          <h1>This is React Page Content.</h1>
          //页面内跳转 标签可点击
          <Link to="/">Back To Home</Link>
        </>
)
~~~
#### 4.4 Hook useNavigate !!只能在函数组件中使用
~~~javascript
function HookUseNavigate(){

  //必须在函数组件内定义
  const navigate = useNavigate()
  const handleNaviClick=()=>{
    navigate("/")
  }
  return (
          <div className="card">
            //点击时路由跳转回首页
            <button onClick={handleNaviClick}>
              UseNavigate to home.
            </button>
          </div>
  )
}
//调用
<BrowserRouter>
  <Routes>
    //路由访问  http:ip:port/useNavigate
    <Route path="/useNavigate" element={<HookUseNavigate/>} />
  </Routes>
</BrowserRouter>
~~~

