// import React, { useState } from 'react';

/**
 * Navbar component avec effet de flou (Glassmorphism)
 */
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink:0 flex items-center">
            <span className="text-2xl font-bold text-bange-green tracking-tighter">BANGE <span className="text-gray-400">CMR</span></span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-bange-green transition-colors">Qui sommes-nous</a>
            <a href="#" className="hover:text-bange-green transition-colors">Nos produits</a>
            <a href="#" className="hover:text-bange-green transition-colors">Agences</a>
          </div>
          <button className="bg-bange-green text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-green-200 hover:scale-105 transition-transform">
            E-Banking
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar