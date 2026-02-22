import PageHero from '../components/partials/PageHero';
import AboutIdentityContent from '../components/about/AboutIdentityContent';
import AboutHistory from '../components/about/AboutHistory'; // Nouvel import

export default function AboutIdentityPage() {
  return (
    <div className="w-full bg-white">
      <PageHero 
        title="Qui sommes-nous ?"
        subtitle="DÉCOUVREZ L'INSTITUTION BANGE"
        description="Une banque universelle, solide et innovante, dédiée au développement économique de la zone CEMAC et du Cameroun."
        currentPage="À Propos"
        backgroundImage="/images/" 
      />
      {/* SECTION HISTORIQUE AJOUTÉE ICI */}
      <AboutHistory />
      {/* SECTION IDENTITE */}
      <AboutIdentityContent />
      
      
      
    </div>
  );
}