import { motion } from 'framer-motion';
import { HISTORY_STEPS } from '../../../data/home/aboutHistoryData';
import { Calendar, Target } from 'lucide-react';

export default function AboutHistory() {
  /**
   * GENIE LOGICIEL : On crée une copie du tableau avant de l'inverser.
   * On utilise [...array] pour ne pas muter (modifier) l'import original.
   * toReversed() est aussi une option moderne, mais le spread est plus compatible.
   */
  const reversedHistory = [...HISTORY_STEPS].reverse();

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE */}
        <div className="text-center mb-15 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2A8A42]">Notre Parcours</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tighter">
            L'histoire d'une <span className="text-[#2A8A42]">ambition.</span>
          </h2>
          <div className="w-16 h-1 bg-[#862333] mx-auto rounded-full mt-4" />
        </div>

        {/* --- TIMELINE --- */}
        <div className="relative">
          
          {/* Ligne centrale verticale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-50 hidden lg:block -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-15">
            {reversedHistory.map((step, i) => (
              /** 
               * LOGIQUE VISUELLE : 
               * On garde la disposition left/right définie dans tes données originales
               */
              <div key={i} className={`flex flex-col lg:flex-row items-center justify-between w-full ${
                step.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                
                {/* 1. BLOC CONTENU */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-[42%] group"
                >
                  <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 relative">
                    
                    {/* Année Mobile (Très visible) */}
                    <div className="lg:hidden inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-[#2A8A42] rounded-full text-sm font-black mb-6">
                      <Calendar size={14} />
                      {step.year}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-[#2A8A42] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

                {/* 2. INDICATEUR CENTRAL */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-slate-50 rounded-full items-center justify-center shadow-xl z-10">
                  <div className="w-10 h-10 bg-[#2A8A42] text-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Target size={18} />
                  </div>
                </div>

                {/* 3. BLOC ANNÉE DESKTOP */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.5 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className={`hidden lg:flex w-[42%] items-center ${step.side === 'left' ? 'justify-start pl-16' : 'justify-end pr-16'}`}
                >
                  <div className="relative group">
                    <span className="text-7xl font-black text-slate-200/60 tracking-tighter transition-colors group-hover:text-green-100">
                      {step.year.toString().substring(0, 4)}
                    </span>
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 text-4xl font-black text-[#2A8A42] tracking-widest drop-shadow-sm">
                      {step.year}
                    </span>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}