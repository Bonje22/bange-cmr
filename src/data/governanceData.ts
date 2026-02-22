export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  category: 'board' | 'management';
  linkedin?: string; // Lien optionnel
}

export const GOVERNANCE_DATA: Member[] = [
  // --- CONSEIL D'ADMINISTRATION ---
  {
    id: 1,
    name: "M. Jose Miguel OBIANG NCHAMA",
    role: "Directeur Général",
    image: "/images/gouvernance/DG.jpg",
    category: 'board',
    linkedin: "https://linkedin.com/in/pca-bange"
  },
  {
    id: 2,
    name: "M. Manuel OSA NSUE NSUA",
    role: "Administrateur",
    image: "/images/gov/admin1.jpg",
    category: 'board',
    linkedin: "#"
  },
  {
    id: 3,
    name: "M. Juan Pablo NDONG ONDO",
    role: "Administrateur",
    image: "/images/gov/admin2.jpg",
    category: 'board',
    linkedin: "#"
  },

  // --- DIRECTION GÉNÉRALE ---
  {
    id: 10,
    name: "M. Pascual NVO MANGUE",
    role: "Directeur Général",
    image: "/images/gov/dg.jpg",
    category: 'management',
    linkedin: "https://linkedin.com/in/dg-bange"
  },
  {
    id: 11,
    name: "M. Emmanuel NGOA NNOKO",
    role: "Directeur Général Adjoint",
    image: "/images/gov/dga.jpg",
    category: 'management',
    linkedin: "#"
  },
  {
    id: 12,
    name: "M. Jose Maria NCHASO IYANGA",
    role: "Directeur des Opérations",
    image: "/images/gov/do.jpg",
    category: 'management',
    linkedin: "#"
  }
];

export const COMMITTEES = [
  { title: "Comité d'Audit", desc: "Supervise la fiabilité des informations financières." },
  { title: "Comité des Risques", desc: "Analyse l'exposition aux risques et le contrôle interne." },
  { title: "Comité de Nomination", desc: "Gère la sélection des cadres et la rémunération." }
];