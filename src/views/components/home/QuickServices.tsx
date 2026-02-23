import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { QUICK_SERVICES } from '../../../data/home/servicesData';

export default function QuickServices() {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Un peu plus rapide pour 6 éléments
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.22, 1, 0.36, 1] as any // Correction type-safe
      }, 
    },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tighter">
            Comment pouvons-nous <span className="text-green-700">vous aider ?</span>
          </h2>
          <div className="w-24 h-1.5 bg-red-800 mx-auto rounded-full"></div>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            Choisissez le service BANGE Bank qui correspond à vos besoins actuels.
          </p>
        </motion.div>

        {/* GRILLE ANIMÉE - Ajustée pour 6 éléments (1 col mobile, 2 col tablette, 3 col desktop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {QUICK_SERVICES.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="h-auto">
              <Link 
                to={service.path}
                className="group relative h-full bg-[#F8FAFC] p-10 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 flex flex-col items-center text-center"
              >
                {/* Icône Soft UI */}
                <div className={`w-20 h-20 ${service.color} rounded-4xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <service.icon className={`${service.iconColor}`} size={36} />
                </div>

                {/* Titre & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-green-700 transition-colors italic md:not-italic">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8">
                  {service.desc}
                </p>

                {/* Lien interactif */}
                <div className="mt-auto flex items-center gap-2 text-green-700 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Découvrir <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}