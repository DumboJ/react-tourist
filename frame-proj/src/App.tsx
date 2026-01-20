import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./router";

function App() {
    //router API
    return <RouterProvider router={ router }/>
}

export default App
