import Navbar from "../components/partials/navbar";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* ESPACEMENT : On compense la hauteur (Topbar + Navbar) */}
      <main className="pt-16 lg:pt-36">
         {/* Ton contenu ici */}
      </main>
    </div>
    
  );
}