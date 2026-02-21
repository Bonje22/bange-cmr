import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../../../data/herodata';

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
    /* HAUTEUR RÉDUITE : 400px mobile -> 480px desktop */
    <section className="relative w-full h-100 lg:h-120 bg-gray-200 overflow-hidden shadow-inner">
      
      {/* --- SLIDES --- */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* IMAGE : Optimisée avec object-cover */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* MASQUE DÉGRADÉ : Plus sombre pour une lisibilité maximale */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent" />

          {/* CONTENU TEXTUEL : Ajusté pour la nouvelle hauteur */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="max-w-2xl space-y-4 animate-in fade-in slide-in-from-left-8 duration-700">
                <span className="inline-block px-3 py-1 bg-green-700 text-white text-[10px] font-black uppercase tracking-widest rounded shadow-lg">
                  {slide.subtitle}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg text-gray-200 font-medium leading-relaxed opacity-90 max-w-lg">
                  {slide.description}
                </p>
                <div className="pt-2">
                  <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-7 py-3.5 rounded-full font-bold shadow-2xl transition-all active:scale-95 group text-sm tracking-tight">
                    {slide.ctaText}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* --- CONTRÔLES (Plus petits et élégants) --- */}
      <div className="absolute bottom-6 right-6 md:right-12 flex gap-2 z-30">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-green-700 transition-all cursor-pointer shadow-xl"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-green-700 transition-all cursor-pointer shadow-xl"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* --- INDICATEURS (Dots discrets) --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === i ? "w-6 bg-green-600 shadow-md" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}