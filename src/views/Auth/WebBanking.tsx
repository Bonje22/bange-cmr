import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Building2, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

/**
 * @page WebBanking
 * @description Page de connexion sécurisée. 
 * Le titre de la carte s'adapte dynamiquement à l'URL (Particulier ou Entreprise).
 */
export default function WebBanking() {
  const location = useLocation();
  const navigate = useNavigate();

  // Détection du mode via l'URL
  const isBusiness = location.pathname.includes("entreprise");

  // Fonction de bascule entre les deux portails (URLs différentes)
  const handleToggle = () => {
    navigate(isBusiness ? "/login-particulier" : "/login-entreprise");
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] flex flex-col pt-24 lg:pt-44 font-sans relative overflow-hidden">
      
      {/* --- DÉCORATION DE FOND SOFT UI (Lumières diffuses) --- */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-green-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-red-50/20 rounded-full blur-[100px] -z-10" />

      {/* BOUTON RETOUR DISCRET */}
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-[#2A8A42] transition-all font-bold text-[10px] uppercase tracking-widest z-50">
        <ArrowLeft size={16} /> Retour au site
      </Link>

      <main className="max-w-xl mx-auto w-full px-6 flex flex-col items-center mb-20">
        
        {/* --- 1. LE TOGGLE SWITCH (Extérieur) --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex items-center gap-6"
        >
          <span className={`text-xs font-black uppercase tracking-widest transition-colors duration-300 ${!isBusiness ? 'text-gray-900' : 'text-gray-400'}`}>
            Particulier
          </span>
          
          <button 
            onClick={handleToggle}
            className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 cursor-pointer shadow-inner ${isBusiness ? 'bg-[#2A8A42]' : 'bg-gray-300'}`}
          >
            <motion.div 
              animate={{ x: isBusiness ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2A8A42]"
            >
              {isBusiness ? <Building2 size={12} /> : <User size={12} />}
            </motion.div>
          </button>
          
          <span className={`text-xs font-black uppercase tracking-widest transition-colors duration-300 ${isBusiness ? 'text-gray-900' : 'text-gray-400'}`}>
            Entreprise
          </span>
        </motion.div>

        {/* --- 2. CARTE DU FORMULAIRE --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full bg-white rounded-[3rem] shadow-sm border border-white p-10 md:p-14 relative"
        >
          {/* Badge de sécurité flottant */}
          <div className="absolute -top-5 right-10 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-50 flex items-center gap-2">
             <ShieldCheck size={16} className="text-[#2A8A42]" />
             <span className="text-[9px] font-black uppercase tracking-tight text-gray-400">Accès Sécurisé</span>
          </div>

          <div className="space-y-10">
            {/* --- TITRE DYNAMIQUE SELON LE MODE --- */}
            <div className="text-center space-y-2">
              <h1 className="text-xl font-black text-gray-900 tracking-tight leading-tight italic">
                {isBusiness ? (
                  <>Bienvenue sur BANGE CMR <br /><span className="text-[#2A8A42]">Business</span> Web Banking</>
                ) : (
                  <>Bienvenue sur BANGE CMR <br /><span className="text-[#2A8A42]">Particular </span>Web Banking</>
                )}
              </h1>
              <p className="text-gray-400 text-sm font-medium">Veuillez renseigner votre identifiant</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* CHAMP UNIQUE : IDENTIFIANT */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                        Identifiant Utilisateur
                    </label>
                    <div className="relative group">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#2A8A42] transition-colors" size={20} />
                      <input 
                        type="text" 
                        placeholder="Ex: 0123456" 
                        className="w-full pl-14 pr-6 py-5 bg-gray-50 border-none rounded-2xl focus:bg-white focus:ring-4 focus:ring-[#2A8A42]/5 transition-all text-sm font-bold text-gray-700 outline-none shadow-inner"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* BOUTON D'ACTION PRINCIPAL */}
              <button 
                type="submit"
                className="w-full bg-[#2A8A42] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-green-900/20 hover:bg-[#237035] hover:-translate-y-1 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3"
              >
                S'identifier 
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
}