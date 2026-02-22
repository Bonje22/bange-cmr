export interface Agency {
  id: number;
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  hasGAB: boolean;
  type: 'head' | 'agency' | 'point';
  lat: number;  // Latitude
  lng: number;  // Longitude
}

export const AGENCIES_DATA: Agency[] = [
  {
    id: 1,
    city: "Douala",
    name: "Siège Social - Akwa",
    address: "Boulevard de la Liberté, Douala",
    phone: "(+237) 233 42 12 12",
    hours: "Lun - Ven: 08h00 - 17h30",
    hasGAB: true,
    type: 'head',
    lat: 4.0445,
    lng: 9.7045
  },
  {
    id: 2,
    city: "Yaoundé",
    name: "Agence Hippodrome",
    address: "Rue de l'indépendance, Yaoundé",
    phone: "(+237) 222 23 45 67",
    hours: "Lun - Ven: 08h00 - 16h30 / Sam: 09h00 - 13h00",
    hasGAB: true,
    type: 'agency',
    lat: 3.8667,
    lng: 11.5167
  },
   {
    id: 3,
    city: "Kribi",
    name: "Agence Kribi Centre",
    address: "Avenue du Port, à côté du marché central, Kribi",
    phone: "(+237) 233 46 10 10",
    hours: "Lun - Ven: 08h00 - 17h30 / Sam: 09h00 - 13h00",
    hasGAB: true,
    type: 'agency',
    lat: 2.9392, // Coordonnées Kribi
    lng: 9.9104
  },
];