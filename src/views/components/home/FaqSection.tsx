import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../../../data/home/faqData'

export default function FaqSection() {
  // État pour savoir quelle question est ouverte (null = tout fermé)
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* TITRE DE SECTION (Exactement comme sur ton image) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2A8A42] tracking-tight">
            Questions fréquentes
          </h2>
          <div className="w-full h-px bg-gray-200 mt-6" />
        </div>

        {/* LISTE DES ACCORDÉONS */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-xl border border-transparent">
              
              {/* BOUTON QUESTION (Vert Bange) */}
              <button
                onClick={() => toggleFaq(item.id)}
                className={`w-full flex justify-between items-center px-6 py-4 text-left transition-all duration-300 ${
                  openId === item.id ? "bg-[#2A8A42] rounded-t-xl" : "bg-[#2A8A42] rounded-xl hover:bg-[#237035]"
                }`}
              >
                <span className="text-white font-bold text-sm md:text-base tracking-tight">
                  {item.question}
                </span>
                <div className="text-white shrink-0 ml-4">
                  {openId === item.id ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              {/* RÉPONSE ANIMÉE (Gris/Vert très clair) */}
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-[#E9F0EB] border-x border-b border-gray-100 rounded-b-xl"
                  >
                    <div className="px-6 py-6 text-gray-600 leading-relaxed text-sm md:text-base font-medium">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}