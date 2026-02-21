// cest juste pour les stats de la home page, pas besoin de faire un composant pour ca
import { Building2, Users2, Trophy, ShieldCheck } from 'lucide-react';

export const STATS_DATA = [
  {
    id: 1,
    label: "Agences au Cameroun",
    value: "10+",
    icon: Building2,
    suffix: "Proximité"
  },
  {
    id: 2,
    label: "Clients satisfaits",
    value: "50K+",
    icon: Users2,
    suffix: "Confiance"
  },
  {
    id: 3,
    label: "Expertise Bancaire",
    value: "15",
    icon: Trophy,
    suffix: "Années"
  },
  {
    id: 4,
    label: "Sécurité Garantie",
    value: "100%",
    icon: ShieldCheck,
    suffix: "Fiabilité"
  }
];