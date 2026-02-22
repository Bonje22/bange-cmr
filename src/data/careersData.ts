// src/data/careersData.ts

export interface JobOffer {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string; // Ou "CDI" | "CDD" | "Stage"
  date: string;
}

export const JOB_OFFERS: JobOffer[] = [
  {
    id: 1,
    title: "Gestionnaire de Portefeuille",
    department: "Exploitation",
    location: "Douala",
    type: "CDI",
    date: "10 Fév 2024"
  },
  {
    id: 2,
    title: "Analyste Risques",
    department: "Risques",
    location: "Yaoundé",
    type: "CDI",
    date: "08 Fév 2024"
  }
];