import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import GalleryCarousel from '@/components/GalleryCarousel';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';
import MeetingForm from '@/components/MeetingForm';


const galleryImages = [
  '/images/gallery/g8.jpeg',
  '/images/gallery/g9.jpeg',
  '/images/gallery/g10.jpeg',
  '/images/gallery/g11.jpeg',
  '/images/gallery/g12.jpeg',
  '/images/gallery/g13.jpeg',
  '/images/gallery/g14.jpeg',
  '/images/gallery/g15.jpeg',
  '/images/gallery/g1.jpeg',
  '/images/gallery/g2.jpeg',
  '/images/gallery/g3.jpeg',
  '/images/gallery/g4.jpeg',
  '/images/gallery/g5.jpeg',
  '/images/gallery/g6.jpeg',
  '/images/gallery/g7.jpeg',
  '/images/gallery/g16.jpeg',
  '/images/gallery/g17.jpeg',
  '/images/gallery/g18.jpeg',
  '/images/gallery/g19.jpeg',
  '/images/gallery/g20.jpeg',
  '/images/gallery/g21.jpeg',
  '/images/gallery/g22.jpeg',
  '/images/gallery/g23.jpeg',
  '/images/gallery/g24.jpeg',
  '/images/gallery/g25.jpeg',
  '/images/gallery/g26.jpeg',
  '/images/gallery/g27.jpeg',
  '/images/gallery/g28.jpeg',
  '/images/gallery/g29.jpeg',
  '/images/gallery/g30.jpeg',
  '/images/gallery/g31.jpeg',
  '/images/gallery/g32.jpeg',
];


const partnerLogos = [
  { name: 'Buderus', src: '/images/partners/pa1.jpeg' },
  { name: 'Daikin', src: '/images/partners/pa2.jpeg' },
  { name: 'Ferroli', src: '/images/partners/pa3.jpeg' },
  { name: 'Immergas', src: '/images/partners/pa4.jpeg' },
  { name: 'LG', src: '/images/partners/pa5.jpeg' },
  { name: 'sinclair', src: '/images/partners/pa6.jpeg' },
  { name: 'rotenso', src: '/images/partners/pa7.jpeg' },
  { name: 'vents', src: '/images/partners/pa8.jpeg' },
];

// Wklejasz ręcznie swoje prawdziwe opinie:
const googleReviews = [
  {
    author: 'Marek S',
    date: '2025-03',
    rating: 5,
    text:
      'Z pełnym przekonaniem polecam firmę, która wykonywała u mnie montaż pompy ciepła, ' +
      'instalację hydrauliczną oraz rekuperację w domu w Lusówku. Całość prac została ' +
      'wykonana bardzo profesjonalnie, rzetelnie i terminowo. Ekipa świetnie doradziła ' +
      'w kwestii wyboru odpowiedniej pompy ciepła (9 kW), zaplanowała całą instalację i ' +
      'wykonała ją z ogromną starannością. Ogrzewanie podłogowe działa perfekcyjnie, a ' +
      'rekuperacja znacząco poprawiła komfort w domu. Bardzo doceniam dokładność i ' +
      'dbałość o szczegóły, czyste i estetyczne wykonanie, szybki kontakt, uczciwą ' +
      'wycenę i brak ukrytych kosztów. To ekipa, której naprawdę można zaufać.',
  },
  {
    author: 'Wojciech D',
    date: '2025-04',
    rating: 5,
    text:
      'Pomoc w doborze i montaż zmiękczacza wody wraz z dodatkowym osprzętem, wymiana rur ' +
      'od wody użytkowej oraz czyszczenie instalacji centralnego ogrzewania z montażem ' +
      'filtra. Jestem bardzo zadowolony z poziomu, czasu oraz kosztów usługi. Współpraca ' +
      'z p. Dominikiem to przyjemność – dziękuję.',
  },
  {
    author: 'Mateusz B',
    date: '2025-03',
    rating: 5,
    text:
      'Firma rzetelna, słowna i bardzo pomocna. Mieliśmy okazję wielokrotnie ze sobą ' +
      'współpracować i na pewno nie będzie to ostatni raz. Zawsze mogę liczyć na fachową ' +
      'pomoc, poradę oraz terminowość. Polecam w 100%.',
  },
  {
    author: 'Damian S',
    date: '2025-03',
    rating: 5,
    text:
      'Zdecydowanie polecam firmę EcoHeat Technic za profesjonalny montaż pompy ciepła ' +
      'LG Therma V. Cały proces – od doboru urządzenia, przez wycenę, aż po samą ' +
      'instalację – przebiegł bez zastrzeżeń. Ekipa sprawna, dbająca o porządek i detale. ' +
      'Pompa działa cicho i wydajnie.',
  },
  {
    author: 'Katarzyna A',
    date: '2025-03',
    rating: 5,
    text:
      'Polecam firmę EcoHeat Technic. Profesjonalny montaż klimatyzacji, szybka realizacja ' +
      'i fachowa obsługa. Wszystko wykonane solidnie i terminowo.',
  },
  {
    author: 'Beniamin C',
    date: '2025-03',
    rating: 5,
    text:
      'Robota sprawna i bezproblemowa. Wcześniej dokładnie omówiliśmy kwestie techniczne ' +
      'i wizualne, udało się znaleźć złoty środek. Zamówiłem urządzenie Sinclair – ciche ' +
      'i wydajne. Ekipa słowna, bez niespodzianek.',
  },
  {
    author: 'Karolina C',
    date: '2025-03',
    rating: 5,
    text:
      'Super kontakt, szybko i rzetelnie wykonana robota. Polecam z całego serca.',
  },
  {
    author: 'Alicja F',
    date: '2025-03',
    rating: 5,
    text:
      'Rzetelny wykonawca, godny polecenia.',
  },
  {
    author: 'Marcin K',
    date: '2025-04',
    rating: 5,
    text:
      'Polecam. Rzetelna firma z dużą wiedzą.',
  },
];


function calcAverageRating(reviews: { rating: number }[]) {
  if (!reviews.length) return 0;
  const sum = reviews.reduce((acc, r) => acc + (Number(r.rating) || 0), 0);
  return sum / reviews.length;
}

export default function HomePage() {
  const avg = calcAverageRating(googleReviews);

  return (
    <>
      <PageHero
        title="EcoHeat"
        subtitle="Nowoczesne i energooszczędne rozwiązania grzewcze dla domu i firmy."
        imageUrl="/images/hero/h6.jpeg"
        heightClassName="h-[70vh] md:h-[70vh]"
      />

      {/* 1) Sekcja intro — odstęp od hero */}
      <section className="mx-auto max-w-6xl px-4 mt-10">
        <Reveal>
          <div className="rounded-t-[28px] rounded-b-[28px] border border-black/10 bg-white p-6 shadow-lg md:p-10">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/logo.png"
                alt="EcoHeat logo"
                width={200}
                height={200}
                className="h-32 w-auto"
                priority
              />

              <h2 className="mt-5 text-2xl font-bold tracking-tight md:text-3xl">
                Montaż • Serwis • Doradztwo
              </h2>

              <p className="mt-3 max-w-3xl text-gray-600">
                <br />
                EcoHeat Technic <br />
Technologia, która pracuje na Twój komfort<br />
Indywidualnie zaprojektowane instalacje grzewcze i sanitarne dla wymagających inwestorów<br />

Projektujemy i wykonujemy nowoczesne instalacje, które łączą wysoką efektywność energetyczną z estetyką i niezawodnością. Zapewniamy kompleksową obsługę – od pierwszej konsultacji, przez dobór technologii, po precyzyjny montaż i uruchomienie systemu.<br />
<br />
Zakres naszych realizacji:<br />
Pompy ciepła · Ogrzewanie podłogowe · Rekuperacja · Klimatyzacja ·<br /> Kotły gazowe · Kotły na pellet · Instalacje wodno-kanalizacyjne<br />
<br />
👉 Umów konsultację i poznaj rozwiązania dopasowane do Twojej inwestycji - Zacznijmy od rozmowy<br />
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="#galeria"
                  className="rounded-full border border-black/10 bg-gray-50 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
                >
                  Nasze realizacje
                </a>
                <a
                  href="#certyfikaty"
                  className="rounded-full border border-black/10 bg-gray-50 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
                >
                  Certyfikaty
                </a>
                <a
                  href="#partnerzy"
                  className="rounded-full border border-black/10 bg-gray-50 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
                >
                  Partnerzy
                </a>
                <a
                  href="#opinie"
                  className="rounded-full border border-black/10 bg-gray-50 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
                >
                  Opinie Google
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2) Galeria prac */}
      <section
        id="galeria"
        className="mx-auto max-w-6xl px-2 sm:px-4 pb-14 pt-14 scroll-mt-36"
      >
        <Reveal>
          <h3 className="mb-6 text-center text-2xl font-bold tracking-tight">
            Nasze realizacje
          </h3>

          {/* Galeria – bez dodatkowej karty pod spodem, więcej miejsca na zdjęcia */}
          <div className="-mx-2 sm:mx-0">
            <GalleryCarousel images={galleryImages} />
          </div>
        </Reveal>
      </section>


      {/* DLACZEGO ECOHEAT TECHNIC */}
      <section id="certyfikaty" className="mx-auto max-w-6xl pb-14 scroll-mt-36">
        <Reveal>
          <section className="mt-12 rounded-2xl border border-black/10 bg-white p-7 shadow-sm md:p-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                Dlaczego EcoHeat Technic?
              </h3>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                'Indywidualne podejście do każdej inwestycji',
                'Szeroki zakres nowoczesnych technologii grzewczych',
                'Wysoki standard wykonania i estetyki',
                'Rzetelne doradztwo bez presji sprzedażowej',
                'Długofalowe relacje z klientami',
                'Wsparcie posprzedażowe i serwis',
              ].map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-3 rounded-2xl bg-gray-50 p-5"
                >
                  <span className="mt-0.5 text-lg">✔</span>
                  <p className="text-sm text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </section>

        </Reveal>
      </section>
{/* 3) Certyfikaty */}
<section id="certyfikaty" className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-36">
  <Reveal>
    <h3 className="text-center text-2xl font-bold tracking-tight mb-6">
      Certyfikaty i uprawnienia
    </h3>

    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-900">
          Potwierdzone kompetencje. Sprawdzone standardy.
        </p>

        <p className="mx-auto mt-4 max-w-4xl text-gray-600">
          W EcoHeat Technic stawiamy nie tylko na doświadczenie praktyczne, ale również na formalne
          kwalifikacje i aktualne uprawnienia, które są gwarancją bezpieczeństwa oraz jakości wykonywanych instalacji.
        </p>

        <p className="mx-auto mt-4 max-w-4xl text-gray-600">
          Nasze realizacje opieramy na obowiązujących normach technicznych oraz sprawdzonych procedurach montażowych.
          Dzięki temu klienci mają pewność, że ich instalacje są wykonane zgodnie ze sztuką i obowiązującymi przepisami.
        </p>

        <div className="mt-8">
          <a
            href="/certyfikaty"
            className="
              inline-flex items-center justify-center gap-2 rounded-xl
              bg-black px-8 py-4 text-base font-semibold text-white
              border border-black transition-all duration-300 ease-out
              hover:bg-white hover:text-black hover:shadow-md
            "
          >
            Zobacz certyfikaty i uprawnienia
          </a>
        </div>
      </div>
    </div>
  </Reveal>
</section>


      {/* 4) Partnerzy */}
<section id="partnerzy" className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-36">
  <Reveal>
    <h3 className="text-center text-2xl font-bold tracking-tight mb-6">
      Firmy, z którymi pracujemy
    </h3>

    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {partnerLogos.map((p) => (
          <div
            key={p.name}
            className="group relative z-0 hover:z-30 flex items-center justify-center rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <Image
              src={p.src}
              alt={p.name}
              width={220}
              height={120}
              className="h-16 w-auto object-contain opacity-90 transition-all duration-200 group-hover:opacity-100 group-hover:scale-[1.03]"
            />

            <div className="pointer-events-none absolute -bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/80 px-3 py-2 text-xs font-semibold text-white opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
              {p.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Reveal>
</section>


      {/* 5) Opinie Google */}
<section id="opinie" className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-36">
  <Reveal>
    <h3 className="text-center text-2xl font-bold tracking-tight mb-6">
      Opinie Google
    </h3>

    <GoogleReviewsSection
      reviews={googleReviews}
      totalCount={12}
      averageRating={avg}
    />
  </Reveal>
</section>



{/* 6) Umów się na spotkanie lub konsultację */}
<section id="spotkanie" className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-36">
  <Reveal>
    <MeetingForm />
  </Reveal>
</section>


    </>
  );
}
