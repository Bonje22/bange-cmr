import { createBrowserRouter }  from "react-router-dom";
import Layout from "../src/layout";
import Home from "../src/views/Home/home";

const router = createBrowserRouter([
 {
    path :"/",
    element :<Layout/>,
    children:[
      {
         index: true ,
         element: <Home/>
      },
      {
         
      }
    ]
 }
]);

export default router;