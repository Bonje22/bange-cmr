import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Plus, MessageCircle, } from 'lucide-react';
import { NEWS_DATA } from '../../../data/newsData';
import { Link } from 'react-router-dom';

export default function NewsSection() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // --- LOGIQUE DE DÉFILEMENT AUTOMATIQUE ---
  useEffect(() => {
    // Si l'utilisateur survole avec la souris, on ne défile pas
    if (isPaused) return;

    const timer = setInterval(() => {
      setCenterIndex((prevIndex) => (prevIndex + 1) % NEWS_DATA.length);
    }, 5000); // 5000ms = 5 secondes

    // NETTOYAGE : Très important pour la performance
    return () => clearInterval(timer);
  }, [isPaused]); // Dépendance uniquement sur la pause

  const nextSlide = () => setCenterIndex((prev) => (prev + 1) % NEWS_DATA.length);
  const prevSlide = () => setCenterIndex((prev) => (prev - 1 + NEWS_DATA.length) % NEWS_DATA.length);

  return (
    <section 
      className="py-20 bg-white overflow-hidden font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-5 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-1 bg-[#2A8A42] rounded-full" />
              <span className="text-[15px] font-black uppercase tracking-[0.3em] text-gray-400">Actualités</span>
            </div>
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 tracking-tighter">
              Suivez l'actualité de <span className="text-[#2A8A42]">Bange Bank Cameroun </span>
            </h2>
          </div>
          <Link to="/actualite" className="text-[#2A8A42] font-bold text-sm hover:underline">
          <button className="flex items-center gap-2 bg-[#2A8A42] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-lg hover:shadow-green-900/20 transition-all uppercase tracking-widest cursor-pointer  hover:ease-in-out hover:-translate-y-1 active:scale-95">
            Tout voir <ArrowRight size={16} />
          </button></Link>
          
        </div>

        {/* SLIDER FOCUS CARRÉ COMPACT */}
        <div className="relative flex justify-center items-center h-100">
          <div className="relative w-full flex justify-center items-center">
            {NEWS_DATA.map((news, i) => {
              // Calcul mathématique de la position relative pour l'effet circulaire
              let position = i - centerIndex;
              if (position < -Math.floor(NEWS_DATA.length / 2)) position += NEWS_DATA.length;
              if (position > Math.floor(NEWS_DATA.length / 2)) position -= NEWS_DATA.length;

              const isActive = position === 0;

              return (
                <motion.div
                  key={news.id}
                  initial={false}
                  animate={{
                    x: position * 280, // Distance entre les slides
                    scale: isActive ? 1 : 0.8,
                    zIndex: isActive ? 30 : 10,
                    opacity: isActive ? 1 : 0.5,
                    filter: isActive ? "blur(0px)" : "blur(6px)",
                  }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute w-70 aspect-square cursor-pointer"
                  onClick={() => setCenterIndex(i)}
                >
                  <div className="relative h-full w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 group">
                    <img src={news.image} alt="" className="w-full h-full object-cover" />
                    
                    {/* Masque de couleur dynamique : Vert si actif, Noir si fond */}
                    <div className={`absolute inset-0 transition-all duration-700 ${
                      isActive ? "bg-green-950/40" : "bg-black/50"
                    }`} />

                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">{news.category}</p>
                      <h4 className="text-base md:text-lg font-bold leading-tight mb-4 line-clamp-2">
                        {news.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                         <button className=''><Link to="">En savoir plus <Plus size={14} /></Link></button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contrôles Manuels */}
          <div className="absolute inset-x-0 flex justify-between px-4 md:px-10 z-40 pointer-events-none">
            <button onClick={prevSlide} className="p-3 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white pointer-events-auto hover:bg-[#2A8A42] transition-all shadow-xl">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white pointer-events-auto hover:bg-[#2A8A42] transition-all shadow-xl">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* BARRE D'AIDE JAUNE/AMBRE (Bange Support) */}
        <motion.div 
          className="mt-12 bg-linear-to-r from-green-700 to-black rounded-3xl p-1 md:p-2 flex flex-col md:flex-row items-center justify-between shadow-xl border border-white/20"
        >
          <div className="flex items-center gap-4 px-6 py-3">
            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-lg">
              <MessageCircle size={20} />
            </div>
            <p className="text-sm font-bold text-white tracking-tight">
              Des questions ? <span className="text-white font-medium">Nos experts BANGE Cameroon vous accompagnent 24h/7.</span>
            </p>
          </div>
          <div className="flex items-center gap-2 pr-4 pb-4 md:pb-0">
            <button className="bg-[#2A8A42] text-white px-7 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-green-800 transition-all shadow-lg active:scale-95">
            <Link to="/contact">Contactez-Nous <ArrowRight size={14} /></Link>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}