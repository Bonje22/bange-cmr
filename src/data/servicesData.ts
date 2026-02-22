import { 
  Wallet, 
  Package, 
  CreditCard, 
  HandCoins, 
  ArrowLeftRight, 
  Building2 
} from 'lucide-react';

export const QUICK_SERVICES = [
  {
    id: 1,
    title: "Comptes bancaires",
    desc: "Ouvrez et gérez vos comptes courants ou d'épargne en toute simplicité.",
    icon: Wallet,
    color: "bg-green-50",
    iconColor: "text-green-700",
    path: "/produits/particuliers"
  },
  {
    id: 2,
    title: "Packages",
    desc: "Bénéficiez d'un ensemble de services bancaires adaptés à votre profil.",
    icon: Package,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    path: "/packages"
  },
  {
    id: 3,
    title: "Cartes bancaires",
    desc: "Une large gamme de cartes Visa et GIMAC pour vos retraits et paiements.",
    icon: CreditCard,
    color: "bg-red-50",
    iconColor: "text-red-800",
    path: "/produits/cartes"
  },
  {
    id: 4,
    title: "Prêts-Crédits",
    desc: "Des solutions de financement pour réaliser vos projets personnels et pros.",
    icon: HandCoins,
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    path: "/credits"
  },
  {
    id: 5,
    title: "Paiements et transferts",
    desc: "Effectuez vos transferts nationaux et internationaux en toute sécurité.",
    icon: ArrowLeftRight,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    path: "/transferts"
  },
  {
    id: 6,
    title: "Services bancaires",
    desc: "Découvrez nos services de banque à distance et coffres-forts.",
    icon: Building2,
    color: "bg-gray-100",
    iconColor: "text-gray-700",
    path: "/services"
  }
];