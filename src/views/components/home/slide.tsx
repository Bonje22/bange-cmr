import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDES } from '../../../data/home/herodata';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-100 lg:h-120 bg-slate-900 overflow-hidden">
      
      <AnimatePresence mode="wait">
        {HERO_SLIDES.map((slide, index) => index === current && (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* 1. L'IMAGE : "Rule of Thirds" 
                On utilise object-right pour s'assurer que le sujet (personne, GAB, etc.) 
                est positionné à droite, laissant l'espace négatif à gauche pour le texte. */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-auto object-cover object-right lg:object-center transition-transform duration-10000  scale-110 animate-slow-zoom"
            />

            {/* 2. OVERLAY DÉGRADÉ DE LISIBILITÉ :
                - De Noir (90% opacité) à gauche pour protéger le texte.
                - Vers Transparent à droite pour laisser voir le sujet de l'image. */}
            <div className="absolute inset-0 bg-linear-to-r from-green-700/50 via-black/40 to-transparent z-10" />

            {/* 3. CONTENU TEXTUEL (Placé dans le tiers gauche) */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="max-w-xl space-y-5"
                >
                  {/* Badge avec le Vert Bange exact #2A8A42 */}
                  <div className="inline-block px-4 py-1.5 bg-[#2A8A42] border-l-4 border-green-300 rounded-sm shadow-xl">
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                      {slide.subtitle}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-6xl font-bold text-white leading-[1.1] tracking-tighter drop-shadow-2xl">
                    {slide.title}
                  </h2>

                  <p className="text-sm text-slate-200 font-medium leading-relaxed max-w-lg opacity-90">
                    {slide.description}
                  </p>

                  <div className="pt-4">
                    <button className="flex items-center gap-3 bg-[#2A8A42] hover:bg-[#237035] text-white px-8 py-4 rounded-full font-bold shadow-2xl transition-all active:scale-95 group text-sm uppercase tracking-widest">
                      {slide.ctaText}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Barre de couleur Bordeaux Bange #862333 en accent */}
                  <div className="w-20 h-1.5 bg-[#862333] rounded-full shadow-lg" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* --- CONTRÔLES (Soft UI Translucides) --- */}
      <div className="absolute bottom-8 right-8 md:right-12 flex gap-3 z-30">
        <button onClick={prevSlide} className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-[#2A8A42] transition-all cursor-pointer shadow-2xl">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-[#2A8A42] transition-all cursor-pointer shadow-2xl">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* --- INDICATEURS (Style Bange) --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              current === i ? "w-10 bg-[#2A8A42]" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}