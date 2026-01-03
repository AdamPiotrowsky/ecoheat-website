import PageHero from '@/components/PageHero';

export default function OfferPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Oferta"
        subtitle="Co możemy dla Ciebie zrobić – jasno i konkretnie."
        imageUrl="/images/hero-offer.jpg"
      />

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: 'Montaż', desc: 'Montaż urządzeń i konfiguracja instalacji.' },
          { title: 'Serwis', desc: 'Przeglądy, naprawy, konserwacja.' },
          { title: 'Doradztwo', desc: 'Dobór sprzętu, audyt i wycena.' },
        ].map((x) => (
          <div key={x.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">{x.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{x.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
