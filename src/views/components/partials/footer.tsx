
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Phone, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';
import { FOOTER_LINKS } from '../../../data/footerData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HAUTE : LOGO & CONTACT CARD --- */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16 items-start">
          <div className="space-y-6">
            <Link to="/" className="flex items-center transition-transform hover:scale-105" aria-label="BANGE Bank Cameroon - Accueil">
            <img src="/images/logo.png" alt="BANGE Logo" className="h-9 md:h-20 w-auto object-contain" />
          </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              BANGE Bank Cameroon S.A. est une institution financière engagée pour l'excellence et l'inclusion financière sur tout le territoire national.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-[#2A8A42] hover:-translate-y-1 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-amber-500">Produits</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.products.map((l, i) => (
                  <li key={i}><Link to={l.path} className="text-sm text-slate-400 hover:text-white transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-amber-500">Institution</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.institution.map((l, i) => (
                  <li key={i}><Link to={l.path} className="text-sm text-slate-400 hover:text-white transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-amber-500">Support</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.support.map((l, i) => (
                  <li key={i}><Link to={l.path} className="text-sm text-slate-400 hover:text-white transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- SECTION CENTRALE : CONTACT SOFT UI CARD --- */}
        <div className="bg-linear-to-r from-[#2A8A42] to-[#1e6330] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
          {/* Effet brillant de fond */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="space-y-2 relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Besoin d'un accompagnement ?</h3>
            <p className="text-green-100 opacity-80">Nos conseillers sont disponibles pour vous guider.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#2A8A42]">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase opacity-60">Appelez-nous</p>
                <p className="font-bold">(+237) 233 42 12 12</p>
              </div>
            </div>
            <div className="bg-white px-6 py-4 rounded-2xl flex items-center gap-3 text-slate-900 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <span className="font-bold">Ouvrir un compte</span>
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>

        {/* --- SECTION BASSE : LEGAL --- */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
            <ShieldCheck size={16} className="text-[#2A8A42]" />
            <span>Banque agréée COBAC - © {currentYear} BANGE Bank Cameroon.</span>
          </div>
          
          <div className="flex gap-8 text-[12px] font-bold text-slate-500 uppercase tracking-widest">
            <Link to="/mentions" className="hover:text-white">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-white">Confidentialité</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}