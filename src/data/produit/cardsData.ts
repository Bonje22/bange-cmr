import { CreditCard,  Globe, Zap, type LucideIcon } from 'lucide-react';

export interface BankCard {
  id: string;
  name: string;
  type: "VISA" | "GIMAC";
  tier: string;
  description: string;
  image: string;
  color: string; // Pour l'accentuation UI
  icon: LucideIcon;
  limits: { label: string; value: string }[];
  benefits: string[];
}

export const CARDS_DATA: BankCard[] = [
  {
    id: "visa-platinum",
    name: "Visa Platinum",
    type: "VISA",
    tier: "Premium High-End",
    description: "Le summum de l'exclusivité bancaire. La carte Visa Platinum vous offre des plafonds élevés et une assistance mondiale personnalisée.",
    image: "/uploads/thumbnail/carte-platinium-png.png",
    color: "slate-900",
    icon: CreditCard,
    limits: [
      { label: "Retrait / Jour", value: "2 000 000 FCFA" },
      { label: "Paiement / Semaine", value: "5 000 000 FCFA" }
    ],
    benefits: [
      "Assurance voyage multirisque incluse",
      "Accès aux salons VIP d'aéroports",
      "Service de conciergerie 24h/7",
      "Protection des achats en ligne"
    ]
  },
  {
    id: "visa-gold",
    name: "Visa Gold",
    type: "VISA",
    tier: "Privilège & Confort",
    description: "Alliez confort et sécurité pour vos déplacements internationaux et vos achats en ligne avec des garanties d'assurance étendues.",
    image: "/uploads/thumbnail/carte-gold-png.png",
    color: "amber-600",
    icon: Globe,
    limits: [
      { label: "Retrait / Jour", value: "1 000 000 FCFA" },
      { label: "Paiement / Semaine", value: "3 000 000 FCFA" }
    ],
    benefits: [
      "Capacité de paiement internationale",
      "Assistance médicale et juridique",
      "Réductions chez nos partenaires",
      "Débit immédiat ou différé"
    ]
  },
  {
    id: "gimac-classic",
    name: "GIMAC Classique",
    type: "GIMAC",
    tier: "Accessibilité Locale",
    description: "La carte idéale pour vos opérations au Cameroun et dans toute la zone CEMAC. Simple, efficace et économique.",
    image: "/uploads/thumbnail/carte-gimac-classic-png.png",
    color: "green-700",
    icon: Zap,
    limits: [
      { label: "Retrait / Jour", value: "500 000 FCFA" },
      { label: "Paiement GIMAC", value: "Disponible" }
    ],
    benefits: [
      "Retraits sur tous les GAB du réseau GIMAC",
      "Frais de gestion réduits",
      "Suivi des transactions via Bange Mobile",
      "Validité 3 ans"
    ]
  }
];