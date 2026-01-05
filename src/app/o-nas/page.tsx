import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const premiumPoints = [
  { title: 'Świadomy dobór technologii', desc: 'Rozwiązania dobieramy pod budynek i potrzeby, nie pod schemat.' },
  { title: 'Perfekcję wykonania', desc: 'Dbamy o detale, estetykę i poprawność techniczną montażu.' },
  { title: 'Przejrzystą komunikację', desc: 'Jasne zasady, konkretna wycena, stały kontakt na każdym etapie.' },
  { title: 'Partnerską relację', desc: 'Doradzamy, tłumaczymy i wspólnie wybieramy najlepsze warianty.' },
];

const philosophyPoints = [
  'pracują stabilnie przez lata',
  'są energooszczędne i przyszłościowe',
  'zapewniają maksymalny komfort użytkowania',
  'realnie obniżają koszty eksploatacji',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="O nas"
        subtitle="Doświadczenie, które widać w jakości"
        imageUrl="/images/hero/h1.jpeg"
        heightClassName="h-[70vh] md:h-[70vh]"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Kim jesteśmy */}
        <Reveal>
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-10">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                EcoHeat Technic
              </h2>
              <p className="mx-auto mt-3 max-w-4xl text-gray-600">
                EcoHeat Technic to firma działająca od 2023 roku, stworzona na solidnych fundamentach
                wieloletniego doświadczenia w branży instalacyjnej. Naszą specjalnością są nowoczesne
                systemy grzewcze i sanitarne realizowane z myślą o długoterminowym komforcie oraz niezawodności.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="text-lg font-semibold">Indywidualne podejście</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Każdy projekt traktujemy indywidualnie. Nie stosujemy gotowych schematów ani przypadkowych rozwiązań.
                  Analizujemy potrzeby inwestora, charakterystykę budynku oraz oczekiwania użytkowe, aby zaproponować
                  system dopasowany technicznie i ekonomicznie.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="text-lg font-semibold">Premium w praktyce</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Dla nas „premium” nie jest hasłem marketingowym — to standard pracy, który widać w detalach
                  i czuć w komforcie użytkowania.
                </p>
              </div>
            </div>

            {/* Premium oznacza */}
            <div className="mt-10">
              <h3 className="text-center text-xl font-bold tracking-tight">
                Dla nas premium oznacza
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {premiumPoints.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="mt-0.5 text-lg">✔</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{p.title}</h4>
                        <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
{/* JAK PRACUJEMY */}
<Reveal>
  <section className="mt-12 rounded-2xl border border-black/10 bg-white p-7 shadow-sm md:p-10">
    <div className="text-center">
      <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
        Jak pracujemy
      </h3>
      <p className="mx-auto mt-2 max-w-3xl text-gray-600">
        Proces dopasowany do Twojej inwestycji
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {[
        'Konsultacja i analiza potrzeb',
        'Projektowanie i dobór sprzętu',
        'Dobór optymalnych rozwiązań technicznych',
        'Profesjonalny i estetyczny montaż',
        'Uruchomienie systemów i instruktaż',
        'Wsparcie po zakończeniu realizacji',
      ].map((step, i) => (
        <div
          key={step}
          className="flex items-center gap-4 rounded-2xl bg-gray-50 p-6"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white font-semibold">
            {i + 1}
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            {step}
          </p>
        </div>
      ))}
    </div>

    <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-600">
      Każdy etap realizujemy z pełną odpowiedzialnością i dbałością o detale.
    </p>
  </section>
</Reveal>

        {/* Nasza filozofia */}
        <Reveal>
          <section className="mt-12 rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-10">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Nasza filozofia
              </h2>
              <p className="mx-auto mt-3 max-w-4xl text-gray-600">
                Spokój, który daje dobrze zaprojektowana instalacja. Wierzymy, że dobra instalacja jest niewidoczna
                w codziennym użytkowaniu – po prostu działa. Dlatego przykładamy szczególną wagę do jakości projektu,
                precyzji montażu oraz estetyki wykonania.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="text-lg font-semibold">Dobrze zaprojektowana instalacja</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  To mniej stresu, mniej awarii i realne oszczędności. Projekt traktujemy jak fundament — bez niego
                  nawet najlepszy sprzęt nie pokaże pełnego potencjału.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="text-lg font-semibold">Systemy, które</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {philosophyPoints.map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-0.5">✔</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA na końcu strony o nas */}
            <div className="mt-10 text-center">
              <a
                href="/kontakt"
                className="
                  inline-flex items-center justify-center gap-2 rounded-xl
                  bg-black px-8 py-4 text-base font-semibold text-white
                  border border-black transition-all duration-300 ease-out
                  hover:bg-white hover:text-black hover:shadow-md
                "
              >
                Skontaktuj się z nami
              </a>
              <p className="mt-3 text-sm text-gray-600">
                Chętnie doradzimy i zaproponujemy rozwiązanie dopasowane do Twojej inwestycji.
              </p>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
