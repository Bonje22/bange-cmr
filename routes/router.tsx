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
import ContactPage from "../src/views/Contact/contact";
import Actualite from "../src/views/Actualite/Actualite";
import DetailActualite from "../src/views/Actualite/DetailActualite";
import WebBanking from "../src/views/Auth/WebBanking";

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
         path: "/contact",
         element :<ContactPage/>
      },
      {
         path: "/actualite",
         element :<Actualite/>
      },
      {path: "/actualites/:id", element :<DetailActualite/> },
      { path: "/login-particulier", element: <WebBanking /> },
      { path: "/login-entreprise", element: <WebBanking /> },
    ]
 }
 
]);

export default router;