import PageHero from '../components/partials/PageHero';
import { GovernanceCard } from '../components/about/GovernanceGrid';
import { GOVERNANCE_DATA, COMMITTEES } from '../../data/governanceData';
import { ShieldCheck} from 'lucide-react';

export default function GovernancePage() {
  const board = GOVERNANCE_DATA.filter(m => m.category === 'board');
  const management = GOVERNANCE_DATA.filter(m => m.category === 'management');

  return (
    <div className="w-full bg-white">
      <PageHero 
        title="Gouvernance BANGE"
        subtitle="UNE DIRECTION EXPÉRIMENTÉE"
        description="Notre structure de gouvernance garantit la transparence, la sécurité et la pérennité des intérêts de nos clients."
        currentPage="Gouvernance"
        backgroundImage="/images/hero-gov.jpg"
      />

      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* --- SECTION 1 : BOARD --- */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter shrink-0">
              Le Conseil <span className="text-[#2A8A42]">d'Administration</span>
            </h2>
            <div className="h-px w-full bg-gray-100"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {board.map(member => <GovernanceCard key={member.id} member={member} />)}
          </div>
        </div>

        {/* --- SECTION 2 : MANAGEMENT --- */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter shrink-0">
              La Direction <span className="text-[#2A8A42]">Générale</span>
            </h2>
            <div className="h-px w-full bg-gray-100"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {management.map(member => <GovernanceCard key={member.id} member={member} />)}
          </div>
        </div>

        {/* --- SECTION 3 : LES COMITÉS (L'effet Soft UI Jaune/Bordeaux) --- */}
        <section className="bg-slate-50 rounded-[4rem] p-10 md:p-20 border border-slate-100">
           <div className="grid lg:grid-cols-3 gap-16 items-start">
             <div className="space-y-6">
                <div className="w-16 h-16 bg-[#2A8A42]/10 rounded-2xl flex items-center justify-center text-[#2A8A42] shadow-inner">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Comités Spécialisés</h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  Des organes consultatifs chargés d’assister le Conseil d’Administration dans ses missions de surveillance.
                </p>
             </div>
             
             <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                {COMMITTEES.map((c, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-1.5 h-6 bg-[#862333] rounded-full group-hover:scale-y-125 transition-transform" />
                       <h4 className="font-bold text-gray-900">{c.title}</h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">{c.desc}</p>
                  </div>
                ))}
             </div>
           </div>
        </section>

      </main>
    </div>
  );
}