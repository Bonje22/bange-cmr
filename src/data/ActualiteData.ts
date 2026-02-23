export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string; // HTML ou Texte riche
  date: string;
  image: string;
  category: string;
  time: string; // Temps de lecture
}

export const ALL_NEWS: NewsArticle[] = [
  {
    id: 1,
    title: "BANGE Bank ouvre l’année 2024 avec une avancée stratégique",
    excerpt: "La banque donne le ton de l'année en posant un acte structurant...",
    content: `
      <p>Bange Bank Cameroon poursuit sa stratégie d'expansion et d'innovation au cœur de la zone CEMAC. Fidèle à sa mission de partenaire de croissance, l'institution déploie de nouveaux services digitaux.</p>
      <h2>Une vision tournée vers l'avenir</h2>
      <p>L'année 2024 marque un tournant avec le renforcement de l'offre Agribanking. L'objectif est clair : soutenir l'autosuffisance alimentaire du Cameroun par un financement agile et adapté.</p>
      <blockquote>"Innover n'est pas une option, c'est notre responsabilité envers nos clients." - Direction Générale</blockquote>
      <p>Nos équipes travaillent quotidiennement pour tisser des relations durables et apporter la valeur maximale possible tant à nos groupes d’intérêt comme à la société en général.</p>
    `,
    date: "15 Février 2024",
    image: "/images/slide1.jpg",
    category: "Institutionnel",
    time: "3 min"
  },
  // ... reste des articles
];