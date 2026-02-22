import { Zap, Landmark, Receipt,type LucideIcon } from 'lucide-react';

export interface FinancingProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stats: { label: string; value: string }[];
  benefits: string[];
  conditions: string[];
}

export const CASHFLOW_PRODUCTS: FinancingProduct[] = [
  {
    id: "facilite-caisse",
    title: "Facilité de Caisse",
    subtitle: "Gérez vos décalages de trésorerie ponctuel",
    description: "Une solution de crédit à très court terme permettant de faire face à des décalages passagers entre vos encaissements et vos décaissements.",
    image: "/images/products/cash-facilite.jpg",
    icon: Zap,
    stats: [
      { label: "Durée", value: "Ponctuelle" },
      { label: "Disponibilité", value: "Immédiate" }
    ],
    benefits: [
      "Souplesse de gestion du compte",
      "Évite les incidents de paiement",
      "Agilité face aux imprévus",
      "Agios calculés uniquement sur l'utilisation"
    ],
    conditions: [
      "Ouverture de compte courant entreprise",
      "Étude de l'historique de compte",
      "Garanties selon le montant sollicité"
    ]
  },
  {
    id: "escompte",
    title: "Escompte Commercial",
    subtitle: "Transformez vos créances en liquidités",
    description: "Mobilisez vos effets de commerce (lettres de change, billets à ordre) avant leur échéance pour disposer immédiatement de fonds.",
    image: "/images/products/escompte.jpg",
    icon: Receipt,
    stats: [
      { label: "Type d'effet", value: "LCN / BO" },
      { label: "Financement", value: "Jusqu'à 100%" }
    ],
    benefits: [
      "Trésorerie immédiate sans attendre l'échéance",
      "Amélioration du fonds de roulement",
      "Gestion simplifiée des encaissements",
      "Taux compétitifs"
    ],
    conditions: [
      "Effets dûment domiciliés",
      "Existence d'une ligne d'escompte",
      "Acceptation des effets par le tiré"
    ]
  },
  {
    id: "decouvert",
    title: "Découvert Autorisé",
    subtitle: "Une réserve d'argent permanente",
    description: "Une ligne de crédit confirmée pour couvrir vos besoins d'exploitation courants sur une période déterminée (généralement 12 mois renouvelables).",
    image: "/images/products/overdraft.jpg",
    icon: Landmark,
    stats: [
      { label: "Validité", value: "12 mois" },
      { label: "Renouvellement", value: "Annuel" }
    ],
    benefits: [
      "Soutien permanent à l'exploitation",
      "Libre utilisation selon les besoins",
      "Remboursement au fil des rentrées",
      "Adapté au cycle d'activité"
    ],
    conditions: [
      "Analyse des états financiers",
      "Plan de trésorerie prévisionnel",
      "Garanties réelles ou personnelles"
    ]
  }
];