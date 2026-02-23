import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageHero from '../components/partials/PageHero';
import SideSelector from '../components/partials/SideSelector';
import ProductDetailsCard from '../components/produit/ProductDetailsCard';
import { PARTICULAR_PRODUCTS } from '../../data/produit/particularsData';

export default function ParticularsPage() {
  const [activeTab, setActiveTab] = useState(PARTICULAR_PRODUCTS[0].id);
  const currentProduct = PARTICULAR_PRODUCTS.find(p => p.id === activeTab) || PARTICULAR_PRODUCTS[0];

  return (
    <div className="w-full bg-[#F8FAFC]">
      <PageHero 
        title="Solutions pour Particuliers"
        subtitle="VOTRE PARTENAIRE AU QUOTIDIEN"
        description="Simplifiez la gestion de vos finances avec nos offres conçues pour propulser vos projets personnels."
        currentPage="Particuliers"
        backgroundImage="/images/particulars-hero.jpg"
      />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          
          <aside className="w-full lg:w-1/4">
            <SideSelector 
              items={PARTICULAR_PRODUCTS} 
              activeId={activeTab} 
              onSelect={setActiveTab} 
              label="Nos Comptes"
            />
          </aside>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <ProductDetailsCard product={currentProduct} />
            </AnimatePresence>
          </div>

        </div>
      </main>
    </div>
  );
}