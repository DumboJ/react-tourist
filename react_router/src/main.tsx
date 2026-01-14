import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import {BrowserRouter,/*RouterProvider, Navigate, Route, Routes*/} from "react-router-dom";
/*import VitePage from "./pages/VitePage.tsx";
import ReactPage from "./pages/ReactPage.tsx";
import NavigatePage from "./pages/NavigatePage.tsx";
import HookUseNavigate from "./pages/HookUseNavigate.tsx";*/
import UseRouters from "./route/UseRouters.tsx";
// import CreateRouters from "./route/CreateRouters.tsx";


createRoot(document.getElementById('root')!).render(
    //1. 标签定义
  /*<BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/a1" element={<h1>This is A1 Page.</h1>}/>
          <Route path="/a2" element={<h1>This is A2 Page.</h1>}/>
          <Route path="/vite" element={<VitePage/>}/>
          <Route path="/react" element={<ReactPage/>}/>
          <Route path="/navigate" element={<NavigatePage/>}/>
          <Route path="/onNavigate" element={<Navigate to="/"/>} />
          <Route path="/useNavigate" element={<HookUseNavigate/>} />
      </Routes>
  </BrowserRouter>,*/
    //2. useRoutes API 定义路由组件，!!返回函数组件
    <BrowserRouter>
        <UseRouters/>
    </BrowserRouter>
    //useRoutes API 定义路由组件，返回的是声明 类型别名 Type Alias,非函数组件，配合 RouterProvider 使用
    /*<RouterProvider router={ CreateRouters }/>*/
)
