import { motion } from 'framer-motion';
import { X, ChevronRight, ArrowRight } from 'lucide-react';
import {type  SubService } from '../../../../data/financement/tresorerieData';

export const FinancingModal = ({ data, onClose }: { data: SubService; onClose: () => void }) => (
  <div className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-8">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
    <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[3.5rem] shadow-2xl overflow-y-auto z-10 p-8 md:p-12">
      <button onClick={onClose} className="absolute top-8 right-8 p-2 bg-gray-100 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-600 transition-all"><X size={20}/></button>
      
      <div className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <h3 className="text-3xl font-black text-gray-900 uppercase italic">{data.title}</h3>
          <p className="text-gray-500 text-lg leading-relaxed font-medium"><span className="text-[#2A8A42] font-bold">Bange Bank</span> {data.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.sections.map((section, i) => (
            <div key={i} className={`${section.color} p-8 rounded-4xl text-white shadow-lg`}>
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-70 border-b border-white/20 pb-2">{section.label}</h4>
              {section.items ? (
                <ul className="space-y-3">{section.items.map((it, idx) => <li key={idx} className="text-xs font-bold flex items-start gap-2"><ChevronRight size={14} className="shrink-0 opacity-50"/>{it}</li>)}</ul>
              ) : <p className="text-xs font-bold leading-relaxed">{section.text}</p>}
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-gray-100 flex justify-between items-center">
           <p className="text-sm text-[#2A8A42] font-bold">Besoin d'aide ? Nos conseillers sont à votre écoute.</p>
           <button className="bg-[#2A8A42] text-white px-8 py-3 rounded-xl font-bold text-xs flex items-center gap-2">Contacter l'agence <ArrowRight size={14}/></button>
        </div>
      </div>
    </motion.div>
  </div>
);