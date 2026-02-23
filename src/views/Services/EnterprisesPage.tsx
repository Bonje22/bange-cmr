import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageHero from '../components/partials/PageHero';
import SideSelector from '../components/partials/SideSelector';
import ProductDetailsCard from'../components/produit/ProductDetailsCard';
import { BUSINESS_PRODUCTS } from '../../data/produit/enterprisesData';

export default function EnterprisesPage() {
  const [activeTab, setActiveTab] = useState(BUSINESS_PRODUCTS[0].id);
  const currentProduct = BUSINESS_PRODUCTS.find(p => p.id === activeTab) || BUSINESS_PRODUCTS[0];

  return (
    <div className="w-full bg-[#F8FAFC]">
      <PageHero 
        title="Solutions Corporate"
        subtitle="VOTRE CROISSANCE, NOTRE MÉTIER"
        description="Accompagner les entreprises camerounaises dans leur structuration et leur expansion grâce à une expertise bancaire dédiée."
        currentPage="Entreprises"
        backgroundImage="/images/hero-business.jpg"
      />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          
          <aside className="w-full lg:w-1/4">
            <SideSelector 
              items={BUSINESS_PRODUCTS} 
              activeId={activeTab} 
              onSelect={setActiveTab} 
              label="PME & Grandes Entreprises"
            />
          </aside>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <ProductDetailsCard 
                product={currentProduct} 
                isBusiness={true}
                ctaText="Découvrez nos packages bancaires"
                ctaLink="/packages"
              />
            </AnimatePresence>
          </div>

        </div>
      </main>
    </div>
  );
}