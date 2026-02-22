import { motion } from 'framer-motion';
import { Linkedin, } from 'lucide-react';
import type { Member } from '../../../data/governanceData';

export function GovernanceCard({ member }: { member: Member }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* CADRE PHOTO PREMIUM */}
      <div className="relative aspect-5/4 rounded-[2.5rem] overflow-hidden bg-gray-100 border-4 border-white shadow-sm
       transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-green-900/10 cursor-pointer">
        
        {/* L'image passe du grayscale à la couleur */}
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
        />

        {/* Overlay au survol */}
        <div className="absolute inset-0 bg-linear-to-t from-[#2A8A42]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge LinkedIn flottant */}
        {member.linkedin && (
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-[#0077B5] shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#0077B5] hover:text-white"
          >
            <Linkedin size={20} />
          </a>
        )}

      
      </div>

      {/* TEXTE SOUS LA CARTE */}
      <div className="mt-6 space-y-1 text-center">
        <h3 className="text-gray-900 font-bold text-lg tracking-tight uppercase group-hover:text-[#2A8A42] transition-colors">
          {member.name}
        </h3>
        <p className="text-[#862333] font-bold text-[11px] uppercase tracking-[0.2em]">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}