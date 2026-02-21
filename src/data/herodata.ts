export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string; // Exemple: "/images/hero1.jpg"
  ctaText: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    subtitle: "Banque Digitale",
    title: "Votre banque vous suit partout",
    description: "Gérez vos comptes, effectuez des virements et suivez vos dépenses en temps réel depuis votre mobile.",
    image: "/images/hero-digital.jpg",
    ctaText: "Accéder au Web Banking"
  },
  {
    id: 2,
    subtitle: "Secteur Agricole",
    title: "Le crédit Agribanking est là",
    description: "BANGE Bank accompagne les agriculteurs camerounais avec des solutions de financement adaptées.",
    image: "/images/hero-agri.jpg",
    ctaText: "Découvrir l'offre"
  }
];