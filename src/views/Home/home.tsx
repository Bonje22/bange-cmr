import HeroCarousel from "../components/home/slide";
import QuickServices from "../components/home/QuickServices";
import AboutSection from "../components/home/AboutSection";
import NewsSection from "../components/home/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      
      {/* 2. Zone de contenu principal */}
      <main className="grow pt-16 lg:pt-30">
        
        {/* On appelle le composant Carousel qui gère lui-même la boucle et l'animation */}
        <HeroCarousel />

        {/* 3. Section suivante : Services Rapides (Prochaine étape) */}
         <QuickServices />

        {/* 4. section suivante : About */}
         <AboutSection />

        {/* 5. section suivante : Actualités */}
         <NewsSection />
      </main>

        
    </div>
  );
}