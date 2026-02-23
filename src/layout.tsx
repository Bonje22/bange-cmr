import { useState, useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./views/components/partials/navbar";
// import Footer from "./views/components/partials/Footer";
import ScrollToTop from "./views/components/partials/ScrollToTop";
import Loader from "./views/components/partials/Loader"; // Import du Loader
import { AnimatePresence } from "framer-motion";

export default function Layout() {
  const [initialLoading, setInitialLoading] = useState(true);
  const navigation = useNavigation();

  // 1. Logique du chargement initial (Simulé ou basé sur les assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 900); // 2 secondes pour laisser le temps de voir l'identité visuelle
    return () => clearTimeout(timer);
  }, []);

  // 2. Détection du chargement entre les pages
  // navigation.state peut être "idle", "loading" ou "submitting"
  const isNavigating = navigation.state === "loading";

  return (
    <>
      <AnimatePresence>
        {(initialLoading || isNavigating) && <Loader />}
      </AnimatePresence>

      <ScrollToTop />
      
      {/* On ne rend le contenu que si ce n'est pas le premier chargement pour éviter les sauts visuels */}
      <div className={`transition-opacity duration-500 ${initialLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        <main className="min-h-screen">
          <Outlet /> 
        </main>
        
        {/* <Footer /> */}
      </div>
    </>
  );
}