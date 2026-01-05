import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const cards = [
  {
    title: 'Montaż',
    desc: 'Montaż urządzeń, uruchomienie instalacji i pełna konfiguracja – szybko, czysto i zgodnie ze sztuką.',
    icon: '🛠️',
  },
  {
    title: 'Serwis',
    desc: 'Przeglądy okresowe, diagnostyka i naprawy. Dbamy o bezawaryjną pracę Twojej instalacji.',
    icon: '🔧',
  },
  {
    title: 'Doradztwo',
    desc: 'Dobór technologii, analiza potrzeb, wycena i plan działań – tak, abyś miał pewność dobrej decyzji.',
    icon: '💡',
  },
];

const services = [
  'Pompy ciepła (dobór, montaż, uruchomienie)',
  'Ogrzewanie podłogowe i instalacje CO',
  'Rekuperacja (wentylacja z odzyskiem ciepła)',
  'Klimatyzacja (montaż, serwis, czyszczenie)',
  'Kotły gazowe (montaż i modernizacja)',
  'Kotły na pellet (dobór, montaż, serwis)',
  'Instalacje wodno-kanalizacyjne',
  'Modernizacja i rozbudowa istniejących instalacji',
];

const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-black px-8 py-4 text-base font-semibold text-white border border-black transition-all duration-300 ease-out hover:bg-white hover:text-black hover:shadow-md';

export default function OfferPage() {
  return (
    <>
      <PageHero
        title="Oferta"
        subtitle="Co możemy dla Ciebie zrobić – jasno, konkretnie i profesjonalnie."
        imageUrl="/images/hero/h4.jpeg"
        heightClassName="h-[70vh] md:h-[70vh]"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Intro (bez Reveal) */}
        <section className="text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Kompleksowa obsługa od A do Z
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-gray-600">
            Od pierwszej konsultacji, przez dobór technologii i wycenę, aż po montaż, uruchomienie
            oraz serwis. Stawiamy na wysoką jakość, przejrzyste warunki i terminowość.
          </p>
        </section>

        {/* 3 kafelki (z Reveal) */}
        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((x) => (
            <Reveal key={x.title}>
              <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gray-100 text-2xl">
                    {x.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{x.title}</h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">{x.desc}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Przycisk pod kafelkami (bez Reveal) */}
        <section className="mt-10 text-center">
          <a href="/kontakt" className={btnPrimary}>
            Skontaktuj się i poznaj szczegóły oferty
          </a>
          <p className="mt-3 text-sm text-gray-600">
            Odpowiemy, doradzimy i zaproponujemy najlepsze rozwiązanie.
          </p>
        </section>

        {/* Zakres usług (z Reveal) */}
        <Reveal>
          <section className="mt-12 rounded-2xl border border-black/10 bg-white p-7 shadow-sm md:p-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tight">Zakres usług</h3>
              <p className="mx-auto mt-2 max-w-3xl text-gray-600">
                Poniżej przykładowe obszary, w których możemy pomóc. Jeśli nie widzisz swojej potrzeby — zapytaj, doradzimy.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
                  <div className="mt-0.5 text-lg">✔</div>
                  <p className="text-sm text-gray-700">{s}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* CTA końcowe (z Reveal) */}
        <Reveal>
          <section className="mt-12">
            <div className="rounded-2xl border border-black/10 bg-white p-8 text-center text-gray-900 shadow-sm md:p-10">
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                Zainwestuj w komfort, który zostanie z Tobą na lata
              </h3>

              <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                Jeżeli planujesz budowę lub modernizację instalacji, zapraszamy do kontaktu.
                Oferujemy fachowe doradztwo oraz rozwiązania dopasowane do Twoich oczekiwań.
              </p>

              <div className="mt-8 flex justify-center">
                <a href="/kontakt" className={btnPrimary}>
                  👉 Umów konsultację z EcoHeat Technic
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
