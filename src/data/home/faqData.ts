export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: "Est-ce que vous accordez des prêts aux étudiants ?",
    answer: "Approchez-vous de nos conseillers clientèle en agence pour comprendre votre besoin, étudier votre situation, et adapter des modalités de prêt pour mieux vous satisfaire."
  },
  {
    id: 2,
    question: "Comment savoir si mon salaire est déjà dans mon compte ?",
    answer: "Vous pouvez consulter votre solde en temps réel via l'application BANGE Mobile ou vous abonner à notre service d'alertes SMS BANGE Alert."
  },
  {
    id: 3,
    question: "Accordez-vous des prêts bancaires aux employés du secteur privé ?",
    answer: "Oui, BANGE Bank accompagne tous les salariés du secteur public et privé disposant d'un revenu régulier domicilié dans nos livres."
  },
  {
    id: 4,
    question: "Est-il possible de gérer les finances de mon entreprise en ligne ?",
    answer: "Absolument. Notre plateforme BANGE Web Business est conçue spécifiquement pour permettre aux entreprises de gérer leurs flux en toute autonomie."
  }
];