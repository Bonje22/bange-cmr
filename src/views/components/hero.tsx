export function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-screen">

      {/* Image */}
      <img
        src="/images/hero.jpg"
        alt="Banque"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenu */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Votre partenaire financier de confiance
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Des solutions adaptées à vos besoins.
          </p>
          <button className="bg-green-700 px-6 py-3 rounded-md hover:bg-green-800 transition">
            Découvrir
          </button>
        </div>
      </div>

    </section>
  );
}