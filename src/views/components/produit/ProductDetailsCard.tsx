import { motion } from 'framer-motion';
import { CheckCircle2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductProps {
  product: {
    id: string;
    description: string;
    stats: { label: string; value: string }[];
    benefits: string[];
    documents: string[];
  };
  ctaText?: string; // Ajout du "?" pour rendre optionnel
  ctaLink?: string; // Ajout du "?" pour rendre optionnel
  isBusiness?: boolean;
}

export default function ProductDetailsCard({ 
  product, 
  ctaText = "Ouvrir un compte", 
  ctaLink = "#", 
  isBusiness = false 
}: ProductProps){  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-[3.5rem] border border-gray-100 shadow-sm overflow-hidden"
    >
      <div className="p-8 md:p-12 space-y-12">
        {/* 1. Description & Stats */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              {product.description}
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-4xl border border-gray-100 space-y-4 shadow-inner">
            {product.stats.map((s, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0 ">
                <span className="text-[10px] font-black uppercase text-gray-400">{s.label}</span>
                <span className="text-sm font-black  text-[#2A8A42]">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Avantages & Documents */}
        <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-gray-50">
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="text-[#2A8A42]" size={22} /> {isBusiness ? "Pourquoi ce compte ?" : "Vos Avantages"}
            </h4>
            <div className="space-y-3">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-green-50/30 rounded-2xl text-sm font-semibold text-gray-700">
                  <div className="w-1.5 h-1.5 bg-[#2A8A42] rounded-full" /> {b}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 flex items-center gap-2">
              <FileText className="text-[#862333]" size={22} /> Documents requis
            </h4>
            <ul className="space-y-3">
              {product.documents.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-500 font-medium border-l-2 border-gray-100 pl-4 py-1">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. CTA */}
        <div className="pt-5 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-400 font-medium italic">
            {isBusiness ? "Service réservé aux personnes morales." : "Service réservé aux personnes physiques."} Voir conditions en agence.
          </p>
          <Link 
            to={ctaLink}
            className="bg-[#253D2C] text-white px-10 py-5 rounded-4xl font-black text-xs uppercase tracking-widest shadow-xl shadow-black/20 hover:bg-green-800 transition-all hover:-translate-y-1 active:scale-95 text-center"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}