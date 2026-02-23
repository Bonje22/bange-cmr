import { useParams, useNavigate , Link} from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Linkedin, Twitter } from "lucide-react";
import { ALL_NEWS } from "../../data/ActualiteData";

export default function DetailActualite() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Récupération de l'article par son ID
  const article = ALL_NEWS.find((a) => a.id === Number(id));

  // Barre de progression de lecture (Haut de page)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  if (!article) return <div className="py-40 text-center font-bold">Article non trouvé</div>;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. BARRE DE PROGRESSION */}
      <motion.div className="fixed top-16 md:top-20 left-0 right-0 h-1.5 bg-[#2A8A42] z-120 origin-left" style={{ scaleX }} />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* 2. BOUTON RETOUR */}
          <Link to="/actualite">
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 pt-10 text-gray-400 hover:text-[#2A8A42] transition-colors mb-10 group cursor-pointer"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-black uppercase tracking-widest">Retour aux actualités</span>
            </button>
            </Link>
          {/* 3. EN-TÊTE DE L'ARTICLE */}
          <header className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <span className="bg-green-50 text-[#2A8A42] px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-green-100">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-gray-400 text-[11px] font-bold uppercase">
                <span className="flex items-center gap-1.5"><Calendar size={14}/> {article.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14}/> {article.time} de lecture</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
              {article.title}
            </h1>
          </header>

          {/* 4. IMAGE À LA UNE (Soft UI Shadow) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative aspect-video rounded-[3.5rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-50"
          >
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </motion.div>

          {/* 5. CORPS DE L'ARTICLE (Logique Automatique) */}
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Partage Social (Sticky) */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-40 flex flex-col gap-4 items-center">
                <p className="text-[9px] font-black uppercase text-gray-300 vertical-text mb-4">Partager</p>
                <button className="p-3 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#2A8A42] hover:bg-green-50 transition-all cursor-pointer"><Facebook size={20}/></button>
                <button className="p-3 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#2A8A42] hover:bg-green-50 transition-all cursor-pointer"><Linkedin size={20}/></button>
                <button className="p-3 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#2A8A42] hover:bg-green-50 transition-all cursor-pointer"><Twitter size={20}/></button>
              </div>
            </aside>

            {/* Contenu avec Typography (prose) */}
            <article 
              className="lg:col-span-11 prose prose-lg max-w-none 
              prose-headings:text-gray-900 prose-headings:font-black prose-headings:tracking-tighter
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-medium
              prose-img:rounded-[2.5rem] prose-img:shadow-xl
              prose-blockquote:border-l-4 prose-blockquote:border-[#2A8A42] prose-blockquote:bg-slate-50 prose-blockquote:p-6 prose-blockquote:rounded-r-3xl prose-blockquote:italic
              prose-strong:text-gray-900 prose-strong:font-black"
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
          </div>

          {/* 6. NEWSLETTER / FOOTER ARTICLE */}
          <footer className="mt-20 pt-10 border-t border-gray-100">
             <div className="bg-[#F8FAFC] p-10 rounded-[3rem] border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 shadow-inner">
                <div className="space-y-2">
                   <h4 className="text-xl font-bold text-gray-900 tracking-tight italic">Restez informé</h4>
                   <p className="text-sm text-gray-500 font-medium">Inscrivez-vous pour recevoir les prochaines actus BANGE.</p>
                </div>
                <div className="flex w-full md:w-auto gap-2">
                   <input type="email" placeholder="votre@email.com" className="bg-white border-none rounded-xl px-5 py-3 grow md:w-64 text-sm focus:ring-2 focus:ring-[#2A8A42]/20 shadow-sm" />
                   <button className="bg-[#2A8A42] text-white p-3 rounded-xl shadow-lg hover:bg-[#237035] transition-all"><Share2 size={20}/></button>
                </div>
             </div>
          </footer>

        </div>
      </main>
    </div>
  );
}