import { motion } from 'framer-motion';
import { INSTITUTION_PILLARS } from '../../../data/home/aboutIdentityData';

export default function AboutIdentityContent() {
  return (
    <div className="py-15 space-y-24">
      
      {/* --- SECTION 1 : HISTOIRE ET GROUPE --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-green-50 text-[#2A8A42] text-[10px] font-black uppercase tracking-widest rounded-md border border-green-100">
              Notre Institution
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tighter leading-tight">
              Une filiale du <br/> <span className="text-[#2A8A42]">Groupe BANGE.</span>
            </h2>
            <div className="w-20 h-1 bg-[#862333] rounded-full" />
            
            <div className="space-y-4 text-gray-600 leading-relaxed font-medium">
              <p>
                BANGE Bank Cameroon S.A. est une institution financière de premier plan, née de la volonté du Groupe BANGE (Banco Nacional de Guinea Ecuatorial) d'étendre son expertise au cœur de la zone CEMAC.
              </p>
              <p>
                Depuis notre implantation au Cameroun, nous nous positionnons comme un levier de croissance pour l’économie locale, en apportant des solutions financières innovantes et un accompagnement de proximité.
              </p>
            </div>
          </motion.div>

          {/* VISUEL SOFT UI : Carte du Siège / Groupe */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-12 border-slate-50">
              <img src="/uploads/thumbnail/autres-services-bange-jpg-6.jpg" alt="Siège BANGE" className="w-full h-112.5 object-cover" />
            </div>
            {/* Badge flottant institutionnel */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-50 text-center">
              <p className="text-2xl font-black text-gray-900 italic">CEMAC</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Référence Régionale</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2 : NOS PILIERS STRATÉGIQUES (Grille Soft UI) --- */}
      <section className="bg-slate-50 py-24 rounded-[4rem] md:rounded-[6rem] mx-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Une banque universelle et engagée</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Nous couvrons l'ensemble des besoins financiers pour construire un futur solide à nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INSTITUTION_PILLARS.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center ${pillar.color} mb-6 shadow-inner group-hover:bg-[#2A8A42] group-hover:text-white transition-all`}>
                  <pillar.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}