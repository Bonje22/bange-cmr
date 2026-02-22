import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, CreditCard, Search, Navigation, ExternalLink, Copy } from 'lucide-react';
import PageHero from '../components/partials/PageHero';
import { AGENCIES_DATA, type Agency } from '../../data/agenciesData';

export default function AgenciesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCity, setActiveCity] = useState("Toutes");

  const cities = ["Toutes", ...new Set(AGENCIES_DATA.map(a => a.city))];

  // Fonction pour l'itinéraire
  const handleGetDirections = (agency: Agency) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${agency.lat},${agency.lng}`;
    window.open(url, '_blank');
  };

  const filteredAgencies = AGENCIES_DATA.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(searchTerm.toLowerCase()) || a.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = activeCity === "Toutes" || a.city === activeCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="w-full bg-[#F8FAFC]">
      <PageHero 
        title="Agences & GAB's"
        subtitle="VOTRE BANQUE À PROXIMITÉ"
        description="Trouvez l'agence BANGE la plus proche et laissez-vous guider."
        currentPage="Agences"
        backgroundImage="/images/agencies-hero.jpg"
      />

      <main className="max-w-7xl mx-auto px-6 py-16">
        
        {/* --- BARRE DE RECHERCHE SOFT UI --- */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center justify-between bg-white p-4 md:p-6 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white">
          <div className="relative w-full lg:w-1/2">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-green-700" size={20} />
            <input 
              type="text" 
              placeholder="Quelle agence cherchez-vous ?" 
              className="w-full pl-16 pr-6 py-5 bg-gray-50 border-none rounded-3xl focus:ring-4 focus:ring-green-700/5 transition-all font-bold text-gray-700 placeholder:text-gray-400 placeholder:font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
            {cities.map(city => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`cursor-pointer px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                  activeCity === city 
                  ? "bg-[#2A8A42] text-white shadow-lg shadow-green-200 scale-105" 
                  : "bg-white text-gray-400 hover:text-green-700 hover:bg-green-50 border border-gray-100"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRILLE DES AGENCES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredAgencies.map((agency) => (
              <motion.div
                key={agency.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -10 }} // Effet de levée au survol
                className="bg-white p-10 rounded-[3.5rem] border border-gray-50 shadow-soft hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 group relative"
              >
                {/* Icône et Badge */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-6 ${agency.type === 'head' ? 'bg-[#862333] text-white' : 'bg-green-50 text-[#2A8A42]'}`}>
                    <MapPin size={28} />
                  </div>
                  {agency.hasGAB && (
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-amber-50 text-amber-700 rounded-full border border-amber-100">
                       <CreditCard size={14} className="animate-pulse" />
                       <span className="text-[9px] font-black uppercase tracking-widest">GAB Disponible</span>
                    </div>
                  )}
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tighter leading-tight group-hover:text-[#2A8A42] transition-colors">
                  {agency.name}
                </h3>

                {/* Informations de contact */}
                <div className="space-y-5 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-green-700 transition-colors">
                        <Navigation size={16} />
                    </div>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{agency.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-green-700 transition-colors">
                        <Phone size={16} />
                    </div>
                    <p className="text-sm text-gray-900 font-black">{agency.phone}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                        <Clock size={16} />
                    </div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{agency.hours}</p>
                  </div>
                </div>

                {/* --- BOUTON ITINÉRAIRE (L'action principale) --- */}
                <button 
                  onClick={() => handleGetDirections(agency)}
                  className="cursor-pointer w-full py-5 bg-[#2A8A42] text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-[#237035] transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-100 group/btn active:scale-95"
                >
                  Obtenir l'itinéraire 
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
                
                {/* Petit bouton secondaire pour copier l'adresse */}
                <button 
                   onClick={() => navigator.clipboard.writeText(agency.address)}
                   className="cursor-pointer w-full mt-3 py-3 text-gray-400 font-bold text-[10px] uppercase tracking-widest hover:text-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Copy size={12} /> Copier l'adresse
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}