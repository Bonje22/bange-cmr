import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function HelpBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 bg-[#862333] rounded-[2.5rem] p-3 md:p-4 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/10 relative overflow-hidden group"
    >
      {/* Effet de brillance subtil en arrière-plan */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-1000 group-hover:scale-110" />

      <div className="flex items-center gap-5 px-6 py-3 relative z-10">
        {/* Icône Soft UI Blanche */}
        <div className="w-14 h-14 bg-white rounded-[1.5rem] flex items-center justify-center text-[#862333] shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
          <MessageCircle size={28} />
        </div>
        
        <div className="text-white">
          <p className="text-lg md:text-xl font-bold tracking-tight">
            Des questions ? <span className="font-normal opacity-80">Nos experts BANGE Cameroon vous accompagnent 24h/7.</span>
          </p>
        </div>
      </div>
      
      {/* Bouton VERT BANGE (Action principale) */}
      <div className="pr-6 pb-4 md:pb-0 relative z-10">
        <button className="bg-[#2A8A42] text-white px-8 py-4 rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#237035] transition-all shadow-xl flex items-center gap-3 group/btn hover:-translate-y-1 active:scale-95">
          Contactez-nous
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}