import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck,  Info, Lock } from 'lucide-react';
import PageHero from '../components/partials/PageHero';
import { CARDS_DATA } from '../../data/produit/cardsData';

export default function CardsPage() {
  const [activeTab, setActiveTab] = useState(CARDS_DATA[0].id);

  // LA CORRECTION EST ICI : On s'assure que le nom est constant
  const currentCard = CARDS_DATA.find(c => c.id === activeTab) || CARDS_DATA[0];

  return (
    <div className="w-full bg-[#F8FAFC]">
      <PageHero 
        title="Cartes Bancaires BANGE"
        subtitle="VOTRE ARGENT À PORTÉE DE MAIN"
        description="Une gamme complète de cartes VISA et GIMAC pour vos paiements et retraits en toute sécurité."
        currentPage="Cartes Bancaires"
        backgroundImage="/images/hero-cards.jpg"
      />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- SIDEBAR --- */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white p-3 rounded-[2.5rem] shadow-soft border border-gray-100 sticky top-32">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 py-4">Gamme de cartes</p>
              <div className="space-y-1">
                {CARDS_DATA.map((card) => {
                  const Icon = card.icon;
                  return (
                    <button
                      key={card.id}
                      onClick={() => setActiveTab(card.id)}
                      className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-500 group cursor-pointer ${
                        activeTab === card.id 
                        ? "bg-[#2A8A42] text-white shadow-xl shadow-green-100" 
                        : "text-gray-500 hover:bg-green-50 hover:text-[#2A8A42]"
                      }`}
                    >
                      <Icon size={20} className={activeTab === card.id ? "text-white" : "text-gray-300 group-hover:text-[#2A8A42]"} />
                      <span className="font-bold text-sm tracking-tight">{card.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* --- CONTENU DYNAMIQUE --- */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {/* Section Présentation */}
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-16 rounded-[4rem] border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="space-y-6 relative z-10">
                    <span className="bg-green-50 text-[#2A8A42] px-4 py-1 rounded-md text-[10px] font-black uppercase tracking-widest border border-green-100 inline-block">
                      {currentCard.tier}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">
                      {currentCard.name}
                    </h2>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">
                      {currentCard.description}
                    </p>
                  </div>

                  {/* CARTE VISUELLE (Correction currentProduct -> currentCard) */}
                  <motion.div 
                    initial={{ rotateY: 15 }}
                    animate={{ rotateY: 0 }}
                    className="relative"
                  >
                    <img 
                      src={currentCard.image} 
                      alt={currentCard.name} 
                      className="w-full max-w-95 mx-auto drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>

                {/* Section Plafonds & Avantages */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#253D2C] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                    <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
                       <Info size={20} className="text-red-200" /> Plafonds autorisés
                    </h4>
                    <div className="space-y-6">
                      {currentCard.limits.map((limit, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                           <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{limit.label}</span>
                           <span className="text-xl font-bold">{limit.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-6">
                    <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                       <ShieldCheck size={20} className="text-[#2A8A42]" /> Vos privilèges
                    </h4>
                    <ul className="space-y-4">
                      {currentCard.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                           <div className="w-1.5 h-1.5 bg-[#2A8A42] rounded-full" />
                           {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer de Sécurité */}
                <div className="bg-green-50/50 p-8 rounded-[2.5rem] border border-green-100 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2A8A42] shadow-sm">
                         <Lock size={24} />
                      </div>
                      <p className="text-sm font-bold text-gray-700">Toutes nos cartes VISA et GIMAC sont protégées par le système de sécurité internationale.</p>
                   </div>
                   
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}