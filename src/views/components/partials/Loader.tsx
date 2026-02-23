import { motion } from 'framer-motion';

/**
 * @component Loader
 * @description Loader premium avec double rotation inversée et logo central.
 * Design : Soft UI / Glassmorphism.
 */
export default function Loader() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-9999 bg-white flex flex-col items-center justify-center"
    >
      <div className="relative flex items-center justify-center">
        
        {/* --- CERCLE EXTÉRIEUR (Sens horaire) --- */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-2 border-transparent border-t-[#2A8A42] border-l-[#2A8A42] rounded-full absolute"
        />

        {/* --- CERCLE INTÉRIEUR (Sens anti-horaire) --- */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-2 border-transparent border-b-green-700 border-green-700862333] rounded-full absolute"
        />
        
        {/* --- LOGO CENTRAL (Fixe avec effet de respiration) --- */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-20 h-20 flex items-center justify-center bg-white rounded-full p-2"
        >
          <img 
            src="/images/logo.png" 
            alt="BANGE Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* --- SECTION TEXTE ET POINTS --- */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-12 space-y-3 text-center"
      >
        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">
          Bange Bank Cmr
        </p>
        
        {/* POINTS DE CHARGEMENT (Conservés comme demandé) */}
        <div className="flex justify-center gap-1.5">
           {[0, 1, 2].map((i) => (
             <motion.div
               key={i}
               animate={{ 
                 scale: [1, 1.5, 1], 
                 opacity: [0.3, 1, 0.3],
                 backgroundColor: ["#2A8A42", "#862333", "#2A8A42"] 
               }}
               transition={{ 
                 duration: 1.2, 
                 repeat: Infinity, 
                 delay: i * 0.2,
                 ease: "easeInOut"
               }}
               className="w-1.5 h-1.5 rounded-full"
             />
           ))}
        </div>
      </motion.div>

      
    </motion.div>
  );
}