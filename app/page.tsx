import ProgettiPage from './progetti/page';

export default function HomePage() {
  return (
    <section className="relative">
      {/* Contenuto sopra l'immagine */}
      <div className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          PROGETTIAMO PER AZIENDE E PRIVATI
        </h2>
        <p className="text-lg md:text-2xl mb-6">
          Acquista i nostri progetti ingegnerizzati e pronti alla produzione.
        </p>
      </div>

      {/* Immagine sotto */}
      <div className="relative h-screen bg-black flex items-center justify-center">
        <img
          src="/hero.jpg"
          alt="Hero Image"
          className="w-full h-full object-contain mt-[-7rem]"
        />
      </div>
    </section>
  );
}
