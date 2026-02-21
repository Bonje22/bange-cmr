/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bange: {
          green: "#2A8A42",    // Vert BANGE
          burgundy: "#862333", // Rouge/Bordeaux BANGE
          accent: "#D4AF37",   // Or (pour le côté Premium)
          bg: "#F0F4F8",       // Fond Soft UI (bleu-gris très clair)
        }
      },
      boxShadow: {
        'soft': '20px 20px 60px #bebebe, -20px -20px 60px #ffffff', // Effet Neumorphisme
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      borderRadius: {
        'xl': '2rem',
      }
    },
  },
  plugins: [],
}