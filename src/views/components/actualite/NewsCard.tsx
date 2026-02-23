import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


interface NewsCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
  };
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-4xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 overflow-hidden group flex flex-col h-full"
    >
      {/* Visual Header */}
      <div className="relative aspect-16/10 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#2A8A42] text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg">
            {article.category}
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight group-hover:text-[#2A8A42] transition-colors mb-3 line-clamp-2 tracking-tighter">
          {article.title}
        </h3>
        
        <p className="text-xs text-gray-500 leading-relaxed font-medium line-clamp-3 mb-6">
          {article.excerpt}
        </p>

        {/* Footer info */}
        <div className="mt-auto pt-5 border-t border-gray-50 flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar size={13} />
            <span className="text-[10px] font-bold uppercase tracking-tight">{article.date}</span>
          </div>
          <div className="w-auto h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[#2A8A42]
           group-hover:bg-[#2A8A42] group-hover:text-white transition-all duration-300 py-1 px-3">
            <Link to={`/actualites/${article.id}`}>
              Lire l'article
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}