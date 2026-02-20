import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Topbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setAboutOpen(false);
  };

  return (
    <div className="bg-green-700 text-white text-sm ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">

          {/* LEFT DROPDOWN */}
          <div className="relative group hidden md:block">
            <button className="flex items-center gap-2 hover:underline">
              Vous êtes un particulier
              <ChevronDown size={16} />
            </button>

            <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-110 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li>
                <Link to="/particulier" className="block px-4 py-2 hover:bg-green-700 hover:text-white transition">
                  Particulier
                </Link>
              </li>
              <li>
                <Link to="/entreprise" className="block px-4 py-2 hover:bg-green-700 hover:text-white transition">
                  Entreprise
                </Link>
              </li>
            </ul>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6">
            <li className="relative group">
              <button className="flex items-center gap-1 hover:underline">
                Qui sommes-nous ?
                <ChevronDown size={16} />
              </button>

              <ul className="absolute right-0 mt-2 w-56 bg-white text-black shadow-lg rounded-lg z-45 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li><Link to="/about" className="block px-4 py-2 hover:bg-green-700 hover:text-white transition">À propos</Link></li>
                <li><Link to="/missions" className="block px-4 py-2 hover:bg-green-700 hover:text-white transition">Mission & Valeurs</Link></li>
                <li><Link to="/governance" className="block px-4 py-2 hover:bg-green-700 hover:text-white transition">Gouvernance</Link></li>
                <li><Link to="/reseau" className="block px-4 py-2 hover:bg-green-700 hover:text-white transition">Réseau au Cameroun</Link></li>
                <li><Link to="/carrieres" className="block px-4 py-2 hover:bg-green-700 hover:text-white transition">Carrières</Link></li>
              </ul>
            </li>

            <li><Link to="/en" className="hover:underline"> EN </Link></li>

            <li>
              <Link to="/become-client" className="bg-white text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                Devenir client
              </Link>
            </li>
          </ul>

          {/* MOBILE BUTTON */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[80vh] pb-4" : "max-h-0"}`} >
          <div className="space-y-3 overflow-y-auto">

            <div>
              <button
                className="w-full flex justify-between items-center py-2"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                <span>Qui sommes-nous ?</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`pl-4 space-y-2 text-gray-200 transition-all duration-300 ${
                  aboutOpen ? "max-h-96 mt-2" : "max-h-0 overflow-hidden"
                }`}
              >
                <Link to="/about" onClick={closeMobile} className="block py-1">À propos</Link>
                <Link to="/missions" onClick={closeMobile} className="block py-1">Mission & Valeurs</Link>
                <Link to="/governance" onClick={closeMobile} className="block py-1">Gouvernance</Link>
                <Link to="/reseau" onClick={closeMobile} className="block py-1">Réseau</Link>
                <Link to="/medias" onClick={closeMobile} className="block py-1">Médias</Link>
                <Link to="/contact" onClick={closeMobile} className="block py-1">Contact</Link>
                <Link to="/carrieres" onClick={closeMobile} className="block py-1">Carrières</Link>
              </div>
            </div>

            <Link to="/contact" onClick={closeMobile} className="block py-2">Nous trouver</Link>
            <Link to="/en" onClick={closeMobile} className="block py-2">EN</Link>

            <Link
              to="/become-client"
              onClick={closeMobile}
              className="block bg-white text-green-700 px-4 py-2 rounded-lg text-center font-medium"
            >
              Devenir client
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;