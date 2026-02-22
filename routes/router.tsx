import { createBrowserRouter }  from "react-router-dom";
import Layout from "../src/layout";
import Home from "../src/views/Home/home";
import About from "../src/views/Home/AboutPage";
import Mission from "../src/views/Home/MissionPage";
import GovernancePage from "../src/views/Home/GovernancePage";
import AgenciesPage from "../src/views/Home/AgenciesPage";
import CareersPage from "../src/views/Home/CareersPage";
import ParticularsPage from "../src/views/Services/ParticularsPage";
import EnterprisesPage from "../src/views/Services/EnterprisesPage";
import CardsPage from "../src/views/Services/CardsPage";
// import TresoreriFinance from "../src/views/finance/tresoririe";
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
      },
      {
         path: "/governance",
         element :<GovernancePage/> 
      },
      {
         path: "/agences",
         element :<AgenciesPage/>
      },
      {
         path: "/carriers",
         element :<CareersPage/> 
      },
      {
         path: "/produits/particuliers",
         element :<ParticularsPage/>   
      },
      {
         path: "/produits/entreprises",
         element :<EnterprisesPage/>   
      },
      {
         path: "/produits/cartes",
         element :<CardsPage/>
      },
      {
         path: "/finance/tresorerie",
         // element :<TresoreriFinance/>
      }
    ]
 }
 
]);

export default router;