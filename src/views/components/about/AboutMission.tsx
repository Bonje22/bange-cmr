import { motion } from 'framer-motion';
import { Lightbulb, Users2, ShieldCheck, Zap, HeartHandshake, CheckCircle2 } from 'lucide-react';

// --- DATA : Les 4 principes corporatifs extraits de ton texte ---
const PRINCIPLES = [
  { 
    title: "Le Client au centre", 
    desc: "Placer l'humain au cœur de chaque décision bancaire.",
    icon: Users2, 
    color: "text-green-700", 
    bg: "bg-green-50" 
  },
  { 
    title: "Gestion du Risque", 
    desc: "Responsabilité et autonomie dans le strict respect des règles.",
    icon: ShieldCheck, 
    color: "text-red-800", 
    bg: "bg-red-50" 
  },
  { 
    title: "Capital Humain", 
    desc: "Valoriser le talent et l'intégrité de nos collaborateurs.",
    icon: Lightbulb, 
    color: "text-amber-600", 
    bg: "bg-amber-50" 
  },
  { 
    title: "Exemplarité", 
    desc: "Donner l'exemple par notre comportement et notre éthique.",
    icon: HeartHandshake, 
    color: "text-blue-600", 
    bg: "bg-blue-50" 
  },
];

export default function AboutMission() {
  return (
    <div className="space-y-32 py-5 overflow-hidden">
      
      {/* --- SECTION 1 : LA VISION GLOBALE --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-700">Vision Stratégique</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter leading-[1.1]">
                Devenir la banque de référence en <span className="text-[#2A8A42]">zone CEMAC.</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#862333] rounded-full" />
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              À la Banque Nationale de Guinée-Équatoriale (BANGE), nous bâtissons des relations durables. 
              Notre force réside dans notre capacité à apporter des solutions financières à forte valeur ajoutée, 
              portées par une innovation constante.
            </p>

            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-inner italic text-gray-500 font-medium">
              "À BANGE, nous parlons du futur. Nous aidons la société à construire un futur meilleur : 
              une retraite paisible, de bonnes études pour les enfants, et la réussite de vos projets."
            </div>
          </motion.div>

          {/* IMAGE AUGMENTÉE (Style précédent conservé) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-12 border-slate-50">
              <img src="/images/bange-mission.jpg" alt="Vision Bange" className="w-full h-125 object-cover" />
            </div>
            {/* Badge flottant Ambition */}
            <div className="absolute -bottom-6 -left-6 bg-[#2A8A42] text-white p-8 rounded-4xl shadow-2xl max-w-60">
              <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">Ambition</p>
              <p className="text-lg font-bold leading-tight">Vocation internationale à long terme.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2 : NOS 4 PRINCIPES (Grille Dynamique) --- */}
      <section className="bg-slate-50/50 py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Nos Principes Corporatifs</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Un guide permanent pour toutes nos actions au quotidien.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3 : LA SIMPLICITÉ (Le Différenciateur) --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[4rem] border border-gray-100 shadow-2xl p-8 md:p-20 relative overflow-hidden">
          {/* Décoration de fond */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                <Zap size={14} /> Notre Différenciateur
              </span>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tighter">
                Pourquoi choisir BANGE ? <br/>
                <span className="text-[#2A8A42]">La Simplicité.</span>
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                Nous sommes une institution fiable et simple. La simplicité est notre plus grand potentiel pour nous différencier et vous rendre la vie facile.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { t: "Agilité", d: "Peu de démarches administratives." },
                { t: "Multi-canalité", d: "Convenance et accessibilité 24/7." },
                { t: "Proximité", d: "Traitement proche et humain." },
                { t: "Transparence", d: "Langage clair et compréhensible." }
              ].map((item, i) => (
                <div key={i} className="space-y-2 p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-green-100 transition-all">
                  <CheckCircle2 className="text-green-700" size={20} />
                  <h4 className="font-bold text-gray-900">{item.t}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}