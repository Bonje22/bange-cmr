
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { STATS_DATA } from '../../../data/statsData';

export default function AboutSection() {
  return (
    <section className="py-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- CÔTÉ GAUCHE : VISUEL & STATS --- */}
          <div className="relative">
            {/* Image principale avec masque Soft UI */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="/images/gal5.jpg" 
                alt="Bange Building" 
                className="w-full h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green-900/40 to-transparent" />
            </motion.div>

            {/* Badge flottant des Stats */}
            <div className="absolute -bottom-10 -right-6 md:right-10 z-20 grid grid-cols-2 gap-4">
              {STATS_DATA.slice(0, 2).map((stat) => (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center text-center w-40"
                >
                  <stat.icon className="text-green-700 mb-2" size={24} />
                  <span className="text-2xl font-black text-gray-900">{stat.value}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- CÔTÉ DROIT : TEXTE --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-green-700 font-black text-xs uppercase tracking-[0.3em]">Qui sommes-nous ?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter leading-tight">
                Plus qu'une banque, un <span className="text-red-800 font-serif italic">partenaire</span> pour votre avenir.
              </h2>
              <div className="w-20 h-1.5 bg-green-700 rounded-full"></div>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              BANGE Bank Cameroon s'engage à offrir des services financiers d'excellence. Notre mission est de favoriser l'inclusion financière et de soutenir l'économie réelle à travers des solutions innovantes et accessibles.
            </p>

            <ul className="space-y-4">
              {[
                "Proximité et écoute de nos clients",
                "Innovation technologique constante",
                "Engagement fort dans le secteur agricole",
                "Transparence et sécurité de vos fonds"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <CheckCircle2 className="text-green-700" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <button className="flex items-center gap-3 bg-white border border-gray-100 px-8 py-4 rounded-full font-bold text-gray-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                En savoir plus sur notre histoire
                <ArrowRight size={20} className="text-green-700 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}