import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  currentPage: string;
  backgroundImage: string;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  description,
  currentPage, 
  backgroundImage 
}) => {
  return (
    <section className="relative w-full h-120 lg:h-130 bg-gray-200 overflow-hidden">
      
      {/* 1. IMAGE DE FOND AVEC OPACITÉ ADAPTÉE */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* 2. OVERLAY DÉGRADÉ (On assombrit un peu plus pour le contraste) */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

      {/* 3. LE CONTENU */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 lg:pt-32"> {/* <-- Augmentation du padding top pour ne pas être sous la Nav */}
          
          <div className="max-w-3xl space-y-6">
            
            {/* FIL D'ARIANE - Visibilité renforcée */}
            <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white z-20">
              <Link to="/" className="hover:text-[#2A8A42] transition-colors opacity-80">Accueil</Link>
              <ChevronRight size={12} className="text-[#2A8A42] stroke-[3px]" />
              <span className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-white shadow-sm"> 
                {currentPage} 
              </span>
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* BADGE VERT (#2A8A42) */}
              <div className="inline-block px-4 py-2 bg-[#2A8A42] rounded-sm shadow-xl border-l-4 border-green-300">
                <span className="text-white text-[10px] font-black uppercase tracking-widest">
                  {subtitle}
                </span>
              </div>

              {/* TITRE */}
              <h1 className="text-5xl md:text-5xl font-bold text-white leading-tight tracking-tighter drop-shadow-lg">
                {title}
              </h1>

              {/* DESCRIPTION - Amélioration du contraste (text-white au lieu de slate-200) */}
              <p className="text-lg md:text-lg italic text-white font-medium leading-relaxed max-w-2xl drop-shadow-md opacity-90">
                {description}
              </p>

              {/* BARRE D'ACCENT BORDEAUX */}
              <div className="pt-2">
                <div className="w-24 h-1.5 bg-[#862333] rounded-full shadow-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;