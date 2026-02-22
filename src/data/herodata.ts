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
    image: "/images/slide1.jpg",
    ctaText: "Accéder au Web Banking"
  },
  {
    id: 2,
    subtitle: "Secteur Agricole",
    title: "Le crédit Agribanking est là",
    description: "BANGE Bank accompagne les agriculteurs camerounais avec des solutions de financement adaptées.",
    image: "/images/sli.jpg",
    ctaText: "Découvrir l'offre"
  },
   
  {
    id: 3,
    subtitle: "PME & Entreprises",
    title: "Finançons la croissance de votre entreprise",
    description: "Des solutions sur mesure pour accompagner les PME et grandes entreprises dans leurs projets d’investissement et de développement.",
    image: "/images/slide-entreprise.jpg",
    ctaText: "Voir nos solutions entreprises"
  },

  
  {
    id: 4,
    subtitle: "Épargne & Investissement",
    title: "Construisez votre avenir en toute sérénité",
    description: "Des produits d’épargne flexibles et sécurisés pour préparer vos projets personnels et professionnels.",
    image: "/images/slide-epargne.jpg",
    ctaText: "Découvrir nos produits d'épargne"
  }
];