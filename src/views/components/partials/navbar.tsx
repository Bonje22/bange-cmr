import { useState, useEffect } from "react";
import { Link, NavLink} from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Lock } from "lucide-react";
import Topbar from "./topbar";

// --- STRUCTURE DE DONNÉES ---
const MENU_DATA = [
  {
    title: "Services & Produits",
    submenu: [
      {
        title: "Produits",
        links: [
          { title: "Personnes Physiques", path: "/comptes" },
          { title: "Personnes Morales", path: "/cartes" },
        ]
      },
      {
        title: "Financements",
        links: [
          { title: "Financez votre trésorerie", path: "/credits" },
          { title: "Financez vos projets", path: "/tresorerie" },
          { title: "Effectuez vos placements", path: "/paiements" },
        ]
      },
      { title: "Mobile banking", path: "/agribanking" },
      { title: "Web banking", path: "/agribanking" },
      { title: "Paiements & Transferts", path: "/contact" },
    ]
  },
  {
    title: "Média",
    links: [
      { title: "Actualités", path: "/actualites" },
      { title: "Photothèque", path: "/photos" },
      { title: "Vidéothèque", path: "/videos" },
    ]
  },
  {
    title: "Qui sommes-nous ?",
    submenu: [
      { title: "A propos de Bange Bank Cameroun", path: "/about" },
      { title: "Missions et Valeurs", path: "/mission" },
      { title: "Gouvernance", path: "/gouvernance" },
      { title: "Reseau au Cameroun", path: "/agribanking" },
      { title: "Carrières", path: "/carriers" }
    ]
  },
   {
    title: "Besoin d'aide ?",
    links: [
      { title: "Agences & GAB's", path: "/agences" },
      { title: "Contactez-nous", path: "/contact" },
      { title: "Devenir client", path: "/contact" },
    ]
  },
   
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);  

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  // --- POLICE ADAPTÉE : 14px + SEMIBOLD + TRACKING TIGHT ---
  const itemStyle = `
    flex items-center justify-between px-5 py-3.5 
    text-[14px] font-semibold tracking-tight transition-all duration-300 rounded-2xl
    hover:bg-green-50 hover:text-green-700 hover:pl-7
  `;

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${itemStyle} ${isActive ? "bg-green-50 text-green-700 border-l-4 border-green-600 shadow-sm" : "text-gray-600"}`;

  return (
    <header className="fixed w-full top-0 z-100 font-sans">
      
      <Topbar/>

      {/* --- NAVBAR (Style Glassmorphism Transparent) --- */}
      <div className="bg-white/60 backdrop-blur-2xl border-b border-white/30 h-16 md:h-22 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex justify-between items-center">
          
          <Link to="/" className="flex items-center transition-transform hover:scale-105" onClick={() => setMobileOpen(false)}>
            <img src="/images/logo.png" alt="BANGE Logo" className="h-9 md:h-20 w-auto object-contain" />
          </Link>

          {/* DESKTOP NAV - Police ajustée en 14px Semibold */}
          <nav className="hidden lg:flex items-center gap-1">
            {MENU_DATA.map((menu, idx) => (
              <div key={idx} className="relative group px-1">
                <button className="flex items-center gap-1.5 px-4 py-8 text-[14px] font-semibold text-gray-700 hover:text-green-700 group-hover:text-green-700 transition-all cursor-pointer tracking-tight">
                  {menu.title}
                  {(menu.submenu || menu.links) && (
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </button>

                {/* --- DROPDOWN NIVEAU 1 --- */}
                {(menu.submenu || menu.links) && (
                  <div className="absolute left-0 top-[80%] w-72 bg-white/90 backdrop-blur-2xl shadow-2xl rounded-4xl border border-white/50 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-50">
                    
                    {menu.links?.map((link, i) => (
                      <NavLink key={i} to={link.path} className={activeLinkClass}>{link.title}</NavLink>
                    ))}

                    {menu.submenu?.map((sub, i) => (
                      <div key={i} className="relative group/sub">
                        {sub.links ? (
                          <>
                            <div className="flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold text-gray-600 hover:bg-green-50 hover:text-green-700 hover:pl-7 rounded-2xl cursor-pointer transition-all duration-300 group-hover/sub:bg-green-50 group-hover/sub:text-green-700 group-hover/sub:pl-7 tracking-tight">
                              <span>{sub.title}</span>
                              <ChevronRight size={14} />
                            </div>
                            <div className="absolute left-full top-0 ml-2 w-64 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-4xl border border-white/50 p-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible translate-x-4 group-hover/sub:translate-x-0 transition-all duration-300">
                              {sub.links.map((last, j) => (
                                <NavLink key={j} to={last.path} className={activeLinkClass}>{last.title}</NavLink>
                              ))}
                            </div>
                          </>
                        ) : (
                          <NavLink to={sub.path || "#"} className={activeLinkClass}>{sub.title}</NavLink>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/login"
              className="ml-6 flex items-center gap-2 bg-green-700 text-white px-7 py-3 rounded-full shadow-lg shadow-green-200 hover:bg-green-800 hover:-translate-y-0.5 transition-all text-[13px] font-bold uppercase tracking-wider"
            >
              <Lock size={14} /> <span>WEB BANKING</span>
            </Link>
          </nav>

          <button className="lg:hidden p-2.5 text-green-700 bg-green-50 rounded-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE --- */}
      <div className={`fixed inset-0 top-0 bg-white/95 backdrop-blur-2xl z-90 lg:hidden transition-all duration-500 ease-in-out ${mobileOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <div className="p-8 h-full flex flex-col pt-24 overflow-y-auto pb-32">
          {MENU_DATA.map((menu, idx) => (
            <div key={idx} className="border-b border-gray-100">
              <button 
                onClick={() => setActiveAccordion(activeAccordion === menu.title ? null : menu.title)}
                className="w-full flex justify-between items-center py-5 text-xl font-bold text-gray-800 tracking-tighter"
              >
                {menu.title}
                {(menu.submenu || menu.links) && <ChevronDown size={20} className={`transition-transform duration-300 ${activeAccordion === menu.title ? "rotate-180 text-green-700" : ""}`} />}
              </button>
              
              {activeAccordion === menu.title && (
                <div className="pl-4 space-y-1 pb-6 animate-in slide-in-from-top-4 duration-500">
                  {menu.links?.map((link, i) => (
                    <Link key={i} to={link.path} className="block py-3 text-gray-600 font-semibold tracking-tight" onClick={() => setMobileOpen(false)}>{link.title}</Link>
                  ))}
                  {menu.submenu?.map((sub, i) => (
                    <div key={i} className="py-3">
                      <p className="text-[11px] font-bold text-green-700 uppercase mb-3 px-2 tracking-widest">{sub.title}</p>
                      <div className="space-y-2">
                        {sub.links?.map((last, j) => (
                          <Link key={j} to={last.path} className="block py-3.5 px-5 bg-gray-50/50 rounded-3xl text-gray-700 font-semibold text-[14px] tracking-tight" onClick={() => setMobileOpen(false)}>{last.title}</Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/login" className="mt-12 bg-green-700 text-white text-center py-5 rounded-4xl font-bold shadow-2xl flex items-center justify-center gap-3">
            <Lock size={20} /> ACCÈS WEB BANKING
          </Link>
        </div>
      </div>
    </header>
  );
}