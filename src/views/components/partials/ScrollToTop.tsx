import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // On remonte tout en haut de la fenêtre
    window.scrollTo(0, 0);
  }, [pathname]); // Se déclenche à chaque fois que le chemin (URL) change

  return null; 
}