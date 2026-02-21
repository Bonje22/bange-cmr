import PageHero from '../components/partials/PageHero';
import AboutVisionValues from '../components/about/AboutVisionValues';

export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHero 
        title="Missions & Valeurs" 
        subtitle="ENGAGÉS POUR L'EXCELLENCE FINANCIÈRE"
        currentPage="Missions & Valeurs"
        description="Notre ambition est de devenir la banque de référence en zone CEMAC, en proposant des solutions innovantes, sécurisées et accessibles qui simplifient la vie de nos clients."
        backgroundImage="/images/about-hero.jpg"
        />
      <AboutVisionValues />
     
    </div>
  );
}