import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

let routes=[
    {
        path:"",
        element:<Home/>
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"register",
        element:<Register/>
    }
];
export default routes;