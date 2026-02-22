import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ArrowRight, UserPlus, GraduationCap, TrendingUp } from 'lucide-react';
import PageHero from '../components/partials/PageHero';
import { JOB_OFFERS } from '../../data/careersData';    


export default function CareersPage() {
  const [filter, setFilter] = useState("Tous");
  const types = ["Tous", "CDI", "CDD", "Stage"];

  const filteredJobs = JOB_OFFERS.filter(job => filter === "Tous" || job.type === filter);

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <PageHero 
        title="Construisez votre avenir avec BANGE."
        subtitle="REJOIGNEZ NOS TALENTS"
        description="Donnez un élan international à votre carrière au sein d'une banque innovante et en pleine expansion au Cameroun."
        currentPage="Carrières"
        backgroundImage="/images/hero-careers.jpg"
      />

      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* --- SECTION 2 : POURQUOI NOUS REJOINDRE ? --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24 ">
          {[
            { t: "Expertise Panafricaine", d: "Évoluez dans un environnement international stimulant.", i: GraduationCap },
            { t: "Innovation Constante", d: "Participez à la transformation digitale de la banque.", i: TrendingUp },
            { t: "Valeurs Humaines", d: "Une culture basée sur l'intégrité et le mérite.", i: UserPlus }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm cursor-pointer"
            >
              <div className="w-12 h-12 bg-green-50 text-[#2A8A42] rounded-2xl flex items-center justify-center mb-6">
                <item.i size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.t}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 3 : OFFRES D'EMPLOI --- */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
              Nos <span className="text-[#2A8A42]">Opportunités</span>
            </h2>
            
            {/* Filtres de type de contrat */}
            <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 ">
              {types.map(t => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                    filter === t ? "bg-[#2A8A42] text-white shadow-lg" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 ">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 md:p-8 rounded-4xl border border-gray-100 shadow-soft hover:shadow-lg shadow-black/30 transition-all
                   group flex flex-col md:flex-row md:items-center justify-between gap-6  cursor-pointer shadow-sm" 
                >
                  <div className="space-y-3 ">
                    <div className="flex items-center gap-3">
                      <span className="bg-green-50 text-[#2A8A42] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        {job.type}
                      </span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                        <Calendar size={12} /> {job.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2A8A42] transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-6 text-sm text-gray-500 font-medium  ">
                      <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-gray-300" /> {job.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={16} className="text-gray-300" /> {job.location}</span>
                    </div>
                  </div>
                  
                  <button className="bg-gray-50 text-gray-700 font-bold px-8 py-4 rounded-2xl hover:bg-[#862333] hover:text-white transition-all flex items-center justify-center gap-2 group/btn cursor-pointer">
                    Postuler <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
                <p className="text-gray-400 italic">Aucune offre disponible pour ce type actuellement.</p>
              </div>
            )}
          </div>
        </div>

       
        
      </main>
    </div>
  );
}