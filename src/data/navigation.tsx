
// src/data/navigation.ts

export const MENU_STRUCTURE = [
  { title: "Accueil", path: "/" },
  { 
    title: "Services & Produits",
    submenu: [
      {
        title: "Particuliers",
        items: [
          { title: "Comptes", path: "/comptes" },
          { title: "Cartes", path: "/cartes" },
          { title: "Épargne", path: "/epargne" }
        ]
      },
      {
        title: "Entreprises",
        items: [
          { title: "Crédits", path: "/credits" },
          { title: "Trésorerie", path: "/tresorerie" }
        ]
      },
      { title: "Agribanking", path: "/agribanking" }
    ]
  },
  {
    title: "Média",
    items: [
      { title: "Actualités", path: "/actualites" },
      { title: "Photothèque", path: "/photos" }
    ]
  },
  { title: "Agences", path: "/agences" }
];