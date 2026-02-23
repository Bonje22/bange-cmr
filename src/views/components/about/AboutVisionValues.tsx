import { motion, type Variants } from 'framer-motion';
import { PRINCIPLES, BANGE_VALUES } from '../../../data/home/aboutData';
import { Quote } from 'lucide-react';

export default function AboutVisionValues() {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-white font-sans">
      
      {/* --- SECTION 1 : MISSION ET VISION --- */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2A8A42]">Notre Vision Stratégique</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter leading-tight">
                Devenir la banque de <br/> <span className="text-[#2A8A42]">référence en zone CEMAC.</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#862333] rounded-full shadow-sm" />
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              À la BANGE, nous parlons du futur. Notre engagement est d'aider la société à construire un avenir meilleur : 
              une retraite paisible, de bonnes études pour vos fils et la réussite de vos projets.
            </p>

            <div className="relative p-8 bg-[#F8FAFC] rounded-[2.5rem] border border-gray-100 shadow-inner overflow-hidden group">
              <Quote className="absolute -top-2 -left-2 text-green-100 w-20 h-20 opacity-50 group-hover:scale-110 transition-transform" />
              <p className="relative z-10 italic text-gray-500 font-medium leading-relaxed">
                "Nous travaillons pour tisser des relations durables et apporter la valeur maximale possible à nos clients et à la société en général."
              </p>
            </div>
          </motion.div>

          {/* Grille des 4 Principes Corporatifs */}
          <div className="grid sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <motion.div 
                key={i}
                // CORRECTION ICI : 'shadow' devient 'boxShadow'
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" 
                }}
                className="p-8 bg-white rounded-[2.5rem] border border-gray-50 shadow-sm hover:border-green-100 transition-all flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#2A8A42] mb-6 shadow-inner">
                  <p.icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-tight">{p.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2 : LES 10 VALEURS --- */}
      <section className="py-10 bg-[#F8FAFC] rounded-t-[4rem] md:rounded-t-[6rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tighter">Nos Valeurs Fondamentales</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">
              Ces piliers guident nos actions et définissent l'Expérience BANGE pour chaque client.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {BANGE_VALUES.map((v, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-white p-6 rounded-4xl border border-white shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all group flex flex-col items-center text-center h-full"
              >
                <div className="w-12 h-12 bg-slate-50 text-gray-400 group-hover:bg-[#2A8A42] group-hover:text-white rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-inner">
                  <v.icon size={22} />
                </div>
                <h4 className="text-xs font-bold text-gray-800 mb-2 uppercase tracking-widest group-hover:text-[#2A8A42] transition-colors">
                  {v.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-medium leading-relaxed group-hover:text-gray-600 transition-colors">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Banner de Simplicité */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Notre différence ? <span className="text-[#2A8A42]">La Simplicité.</span></h3>
              <p className="text-gray-500 font-medium text-sm">Nous rendons votre vie plus facile grâce à l'agilité et un langage clair.</p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {["Agilité", "Multi-canalité", "Proximité", "Transparence"].map((item, i) => (
                <span key={i} className="px-4 py-2 bg-green-50 text-[#2A8A42] rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}