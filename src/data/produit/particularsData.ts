import { Wallet, PiggyBank, Baby, type LucideIcon  } from 'lucide-react';

export interface ProductDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stats: { label: string; value: string }[];
  benefits: string[];
  documents: string[];
}

export const PARTICULAR_PRODUCTS: ProductDetail[] = [
  {
    id: "courant",
    title: "Compte Courant",
    subtitle: "La liberté de gérer vos revenus au quotidien",
    description: "Le compte chèque BANGE est conçu pour les particuliers souhaitant disposer de leurs fonds à tout moment. Il permet d'effectuer toutes les opérations de caisse, virements et paiements par carte.",
    image: "/images/products/compte-courant.jpg",
    icon: Wallet,
    stats: [
      { label: "Versement initial", value: "50 000 FCFA" },
      { label: "Moyens de paiement", value: "Carte & Chéquier" }
    ],
    benefits: ["Domiciliation de salaire", "Accès E-Banking 24h/7", "Découvert autorisé possible", "Alertes SMS temps réel"],
    documents: ["CNI ou Passeport valide", "2 Photos 4x4", "Plan de localisation", "Justificatif de revenu"]
  },
  {
    id: "epargne",
    title: "Compte Épargne",
    subtitle: "Une épargne sûre, disponible et rémunérée",
    description: "Le compte d’épargne BANGE est un placement idéal pour faire fructifier vos fonds en toute sécurité tout en les gardant disponibles pour vos imprévus ou projets.",
    image: "/images/products/compte-epargne.jpg",
    icon: PiggyBank,
    stats: [
      { label: "Taux d'intérêt", value: "3,5% l'an" },
      { label: "Dépôt initial min.", value: "25 000 FCFA" },
      { label: "Solde minimum", value: "25 000 FCFA" }
    ],
    benefits: ["Zéro frais de tenue de compte", "Rémunération attractive", "Retraits libres en agence", "Sécurité totale des fonds"],
    documents: ["CNI ou Passeport", "2 Photos d'identité", "Facture Eneo/Camwater", "Plan de localisation"]
  },
  {
    id: "junior",
    title: "Épargne Junior",
    subtitle: "Préparer demain dès aujourd'hui",
    description: "Un compte spécial pour les mineurs, géré par les parents, afin de constituer un capital pour les études ou l'avenir de vos enfants avec des conditions préférentielles.",
    image: "/images/products/compte-junior.jpg",
    icon: Baby,
    stats: [
      { label: "Versement initial", value: "10 000 FCFA" },
      { label: "Taux d'intérêt", value: "Bonifié" }
    ],
    benefits: ["Éducation financière précoce", "Pas de frais de gestion", "Épargne disponible pour les études", "Cadeaux aux événements"],
    documents: ["Acte de naissance de l'enfant", "ID du parent tuteur", "Photos d'identité", "Plan de localisation"]
  }
];