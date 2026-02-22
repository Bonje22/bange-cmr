import { Building2, Coins,type  LucideIcon,  } from 'lucide-react';

export interface BusinessProduct {
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

export const BUSINESS_PRODUCTS: BusinessProduct[] = [
  {
    id: "courant-entreprise",
    title: "Compte Courant Entreprise",
    subtitle: "Optimisez la gestion de votre trésorerie",
    description: "Le compte courant BANGE est l’outil pivot de votre activité commerciale. Il vous permet de centraliser vos recettes, d'effectuer vos paiements fournisseurs et de gérer la paie de vos collaborateurs en toute simplicité.",
    image: "/images/products/corp-current.jpg",
    icon: Building2,
    stats: [
      { label: "Virements de masse", value: "Disponible" },
      { label: "Bange Web", value: "Inclus 24/7" }
    ],
    benefits: [
      "Gestion optimisée des flux financiers",
      "Paiement sécurisé des salaires",
      "Accès aux facilités de caisse",
      "Chéquiers personnalisés au nom de l'entreprise"
    ],
    documents: [
      "Statuts de l'entreprise",
      "Registre du Commerce (RCCM)",
      "Carte de contribuable valide",
      "Attestation d'immatriculation",
      "Pièces d'identité des mandataires",
      "Plan de localisation certifié"
    ]
  },
  {
    id: "epargne-entreprise",
    title: "Compte Épargne Entreprise",
    subtitle: "Faites fructifier vos excédents de trésorerie",
    description: "Conçu pour les personnes morales, ce compte rémunéré permet de placer vos fonds non utilisés à court terme pour générer des intérêts tout en garantissant une disponibilité immédiate en cas de besoin.",
    image: "/images/products/corp-savings.jpg",
    icon: Coins,
    stats: [
      { label: "Taux d'intérêt", value: "Rémunéré" },
      { label: "Frais de gestion", value: "0 FCFA" }
    ],
    benefits: [
      "Valorisation des fonds dormants",
      "Disponibilité permanente des fonds",
      "Garantie pour l'obtention de crédits",
      "Zéro frais de tenue de compte"
    ],
    documents: [
      "RCCM & Statuts",
      "NIU (Numéro d'Identifiant Unique)",
      "PV de l'assemblée désignant les signataires",
      "2 Photos 4x4 des signataires"
    ]
  }
];