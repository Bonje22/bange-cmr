import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Topbar from "./topbar";

// --- 1. INTERFACES  ---
interface SubLink {
  title: string;
  path: string;
}

interface SubMenuSection {
  title: string;
  path?: string;
  links?: SubLink[];
}

interface MenuItem {
  title: string;
  path?: string;
  links?: SubLink[];
  submenu?: SubMenuSection[];
}

// --- 2. STRUCTURE DES DONNÉES ---
const MENU_DATA: MenuItem[] = [
  {
    title: "Services & Produits",
    submenu: [
      {
        title: "Produits",
        links: [
          { title: "Particuliers", path: "/produits/particuliers" },
          { title: "Entreprises", path: "/produits/entreprises" },
          { title: "Cartes Bancaires", path: "/produits/cartes" },
        ]
      },
      {
        title: "Financements",
        links: [
          { title: "Financez votre trésorerie", path: "/finance/tresorerie" },
          { title: "Financez vos projets", path: "/finance/projets" },
          { title: "Effectuez vos placements", path: "/finance/placements" },
        ]
      },
      { title: "Mobile banking", path: "/mobile-banking" },
      { title: "Web banking", path: "/web-banking" },
      { title: "Paiements & Transferts", path: "/transferts" },
      
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
      { title: "Gouvernance", path: "/governance" },
      { title: "Agences & GAB's", path: "/agences" },
      { title: "Carrières", path: "/carriers" }
    ]
  },
  {
    title: "Besoin d'aide ?",
    links: [
      { title: "Contactez-nous", path: "/contact" },
      { title: "Devenir client", path: "/contact" },
    ]
  },
];


//----Navbar Component--->

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // Fonction utilitaire pour fermer la sidebar
  const closeSidebar = () => {
    setMobileOpen(false);
    setActiveAccordion(null);
  };

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  // Style des liens actifs (Desktop)
  const itemStyle = "flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold tracking-tight transition-all duration-300 rounded-2xl hover:bg-green-50 hover:text-[#2A8A42]";
  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${itemStyle} ${isActive ? "bg-green-50 text-[#2A8A42] border-l-4 border-[#2A8A42] shadow-sm" : "text-gray-600"}`;

  return (
    <header className="fixed w-full top-0 z-100 font-sans">
      <Topbar />

      {/* --- BARRE DE NAVIGATION PRINCIPALE --- */}
      <div className="bg-white/70 backdrop-blur-2xl border-b border-white/30 h-16 md:h-20 flex items-center shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center transition-transform hover:scale-105" onClick={closeSidebar}>
            <img src="/images/logo.png" alt="BANGE Logo" className="h-9 md:h-17 w-auto object-contain" />
          </Link>

          {/* DESKTOP NAV (Caché sur mobile) */}
          <nav className="hidden lg:flex items-center gap-1">
            {MENU_DATA.map((menu: MenuItem, idx: number) => (
              <div key={idx} className="relative group px-1">
                <button className="flex items-center gap-1.5 px-4 py-8 text-[17px] font-semibold text-gray-700 hover:text-[#2A8A42] group-hover:text-[#2A8A42] transition-all cursor-pointer tracking-tight">
                  {menu.title}
                  {(menu.submenu || menu.links) && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                </button>

                {/* DROPDOWN NIVEAU 1 */}
                {(menu.submenu || menu.links) && (
                  <div className="absolute left-0 top-[80%] w-72 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-4xl border border-white/50 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-50">
                    {menu.links?.map((link: SubLink, i: number) => (
                      <NavLink key={i} to={link.path} className={activeLinkClass}>{link.title}</NavLink>
                    ))}
                    {menu.submenu?.map((sub: SubMenuSection, i: number) => (
                      <div key={i} className="relative group/sub">
                        {sub.links ? (
                          <>
                            <div className="flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold text-gray-600 hover:bg-green-50 hover:text-[#2A8A42] hover:pl-7 rounded-2xl cursor-pointer transition-all">
                              <span>{sub.title}</span>
                              <ChevronRight size={14} />
                            </div>
                            {/* FLYOUT NIVEAU 2 */}
                            <div className="absolute left-full top-0 ml-2 w-64 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-4xl border border-white/50 p-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible translate-x-4 group-hover/sub:translate-x-0 transition-all">
                              {sub.links.map((last: SubLink, j: number) => (
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
            
            <Link to="/login" className="ml-6 flex items-center gap-2 bg-[#2A8A42] text-white px-7 py-3 rounded-full shadow-lg shadow-green-200 hover:bg-[#237035] hover:-translate-y-0.5 transition-all text-[12px] font-black uppercase tracking-widest">
              <Lock size={14} /> <span>WEB BANKING</span>
            </Link>
          </nav>

          {/* BOUTON HAMBURGER (Mobile) */}
          <button 
            className="lg:hidden p-2.5 text-[#2A8A42] bg-green-50 rounded-2xl shadow-inner active:scale-90 transition-transform"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* --- SIDEBAR MOBILE (ANIMÉE) --- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* 1. OVERLAY FLOU */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-110 lg:hidden"
            />

            {/* 2. LE TIROIR (SIDEBAR) */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-75 bg-white z-120 lg:hidden shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col"
            >
              {/* HEADER SIDEBAR (Logo + Croix) */}
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
                <button onClick={closeSidebar} className="p-2 bg-gray-50 text-gray-400 hover:text-[#862333] rounded-xl transition-colors">
                  <X size={22} />
                </button>
              </div>

              {/* NAVIGATION SCROLLABLE */}
              <div className="flex-1 overflow-y-auto p-6">
                {MENU_DATA.map((menu: MenuItem, idx: number) => {
                  const hasChildren = !!(menu.submenu || menu.links);
                  const isCurrentActive = activeAccordion === menu.title;

                  return (
                    <div key={idx} className="mb-2">
                      {!hasChildren ? (
                        <Link to={menu.path || "/"} className="block py-4 px-2 text-lg font-bold text-gray-800 hover:text-[#2A8A42] border-b border-gray-50" onClick={closeSidebar}>
                          {menu.title}
                        </Link>
                      ) : (
                        <div className="border-b border-gray-50">
                          <button 
                            onClick={() => setActiveAccordion(isCurrentActive ? null : menu.title)}
                            className="w-full flex justify-between items-center py-4 px-2 text-lg font-bold text-gray-800"
                          >
                            <span className={isCurrentActive ? "text-[#2A8A42]" : ""}>{menu.title}</span>
                            <ChevronDown size={18} className={`transition-transform duration-300 ${isCurrentActive ? "rotate-180 text-[#2A8A42]" : "text-gray-400"}`} />
                          </button>
                          
                          {/* ACCORDÉON */}
                          <AnimatePresence>
                            {isCurrentActive && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-4 pb-4 space-y-1 overflow-hidden"
                              >
                                {menu.links?.map((link: SubLink, i: number) => (
                                  <Link key={i} to={link.path} className="block py-3 text-gray-600 font-semibold text-sm hover:text-[#2A8A42]" onClick={closeSidebar}>{link.title}</Link>
                                ))}
                                {menu.submenu?.map((sub: SubMenuSection, i: number) => (
                                  <div key={i} className="py-2">
                                    {sub.links ? (
                                      <>
                                        <p className="text-[10px] font-black text-[#2A8A42] uppercase mb-2 tracking-widest">{sub.title}</p>
                                        <div className="space-y-1">
                                          {sub.links.map((last: SubLink, j: number) => (
                                            <Link key={j} to={last.path} className="block py-3 px-4 bg-gray-50 rounded-2xl text-gray-700 font-semibold text-xs active:bg-green-50" onClick={closeSidebar}>{last.title}</Link>
                                          ))}
                                        </div>
                                      </>
                                    ) : (
                                      <Link to={sub.path || "#"} className="block py-2 text-gray-700 font-bold text-sm" onClick={closeSidebar}>{sub.title}</Link>
                                    )}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* FOOTER SIDEBAR (Bouton fixe) */}
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <Link to="/login" className="flex items-center justify-center gap-3 bg-[#2A8A42] text-white w-full py-4 rounded-2xl font-bold shadow-lg shadow-green-900/20 active:scale-95 transition-all" onClick={closeSidebar}>
                  <Lock size={18} /> WEB BANKING
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}