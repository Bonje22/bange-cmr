import { Outlet } from "react-router-dom";
import Navbar from "./views/components/partials/navbar";
import Footer from "./views/components/partials/footer";

export default function Layout(){
    return(
        <>
            {/* 1. Navigation fixe en haut */}
            <Navbar />
            <Outlet/>
            {/* 6. Footer */}
            <Footer />  
        </>
    )
}