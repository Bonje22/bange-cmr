import { createBrowserRouter }  from "react-router-dom";
import Layout from "../src/layout";
import Home from "../src/views/Home/home";
import About from "../src/views/Home/AboutPage";
import Mission from "../src/views/Home/MissionPage";
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
         path: "/about",
         element :<About/>
      },
      {
         path: "/mission",
         element :<Mission/>
      }
    ]
 }
]);

export default router;