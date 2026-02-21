import { Landmark, Globe2, ShieldCheck, PieChart } from 'lucide-react';

export const INSTITUTION_PILLARS = [
  {
    title: "Banque Universelle",
    desc: "Agréée par la COBAC, nous couvrons tous les segments : Particuliers, PME/PMI, et Grandes Entreprises.",
    icon: Landmark,
    color: "text-green-700"
  },
  {
    title: "Dimension Régionale",
    desc: "Filiale du Groupe BANGE, nous sommes un acteur majeur de l'intégration financière en zone CEMAC.",
    icon: Globe2,
    color: "text-red-800"
  },
  {
    title: "Solidité Financière",
    desc: "Appuyée par un capital solide et une gouvernance rigoureuse conforme aux standards internationaux.",
    icon: ShieldCheck,
    color: "text-amber-600"
  },
  {
    title: "Expertise Panafricaine",
    desc: "Une connaissance approfondie des marchés locaux alliée à une vision de développement globale.",
    icon: PieChart,
    color: "text-blue-600"
  }
];