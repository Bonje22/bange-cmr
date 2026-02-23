import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/partials/PageHero';
import NewsCard from '../components/actualite/NewsCard';
import { ALL_NEWS } from '../../data/ActualiteData';

export default function Actualite() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // --- CORRECTION : Gestionnaire de recherche ---
  // On met à jour le terme ET on reset la page en une seule fois
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset immédiat, évite le useEffect
  };

  // Logique de filtrage
  const filteredNews = ALL_NEWS.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredNews.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 450, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F8FAFC]">
      <PageHero 
        title="Actualités & Média"
        subtitle="AU CŒUR DE L'INNOVATION"
        description="Suivez les moments forts, les distinctions et les engagements de BANGE Bank Cameroon au service de l'économie."
        currentPage="Actualités"
        backgroundImage="/images/hero-news.jpg"
      />

      <main className="max-w-7xl mx-auto px-6 py-9">
        
        {/* --- BARRE DE RECHERCHE --- */}
        <div className="max-w-4xl mx-auto mb-15">
          <div className="flex flex-col md:flex-row items-center gap-3 bg-white p-3 rounded-3xl shadow-xl shadow-slate-200/50 border border-gray-100">
            <div className="relative grow w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
              <input 
                type="text" 
                placeholder="Rechercher un article..." 
                className="w-full pl-14 pr-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#2A8A42]/20 transition-all font-medium text-gray-700"
                value={searchTerm} // Liaison de la valeur
                onChange={handleSearchChange} // Utilisation du nouveau handler
              />
            </div>
            <button className="w-full md:w-auto px-10 py-4 bg-green-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg cursor-pointer">
              Rechercher
            </button>
          </div>
        </div>

        {/* --- TITRE ET COMPTEUR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4 border-b border-gray-100 pb-8">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tighter italic">Tous les articles</h2>
            <div className="w-12 h-1 bg-[#2A8A42] rounded-full" />
          </div>
          <div className="flex items-center gap-4">
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                Page {currentPage} sur {totalPages || 1}
             </span>
          </div>
        </div>

        {/* --- GRILLE D'ARTICLES --- */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-100">
          <AnimatePresence mode='popLayout'>
            {currentArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- UI PAGINATION --- */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-2">
            <button 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 rounded-xl border transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-green-50 hover:text-green-700 cursor-pointer'}`}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    currentPage === i + 1 
                    ? "bg-[#2A8A42] text-white shadow-lg scale-110" 
                    : "bg-white text-gray-400 border border-gray-100 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-xl border transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-green-50 hover:text-green-700 cursor-pointer'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* --- ÉTAT VIDE --- */}
        {filteredNews.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <Search className="mx-auto text-gray-200 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-400 italic">Désolé, aucun article ne correspond à "{searchTerm}"</h3>
            <button onClick={() => { setSearchTerm(""); setCurrentPage(1); }} className="mt-6 text-[#2A8A42] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer">
              Afficher tous les articles
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}