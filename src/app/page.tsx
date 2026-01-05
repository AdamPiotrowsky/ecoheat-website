import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import GalleryCarousel from '@/components/GalleryCarousel';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';

const galleryImages = [
  '/images/hero-about.jpg',
  '/images/gallery/logo.jpg',
  '/images/hero-about.jpg',
  '/images/gallery/logo.jpg',
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
    author: 'rentileno…',
    date: '2025-04-06',
    rating: 5,
    text:
      'Profesjonalne podejście do klienta. Montaż poszedł sprawnie i szybko. ' +
      'Klimatyzacja grzeje i chłodzi :) PolecamKlimatyzacja grzeje i chłodzi :) PolecamKlimatyzacja grzeje i chłodzi :) PolecamKlimatyzacja grzeje i chłodzi :) PolecamKlimatyzacja grzeje i chłodzi :) Polecam',
  },
  {
    author: 'Alicja',
    date: '2025-04-01',
    rating: 5,
    text:
      'Profesjonalna firma. Fachowe doradztwo. Dobrze zorganizowana praca. ' +
      'Dotrzymanie terminu. Wszystko zgodnie z ustaleniami.',
  },
  {
    author: 'Maciej Kazieczko',
    date: '2025-04-01',
    rating: 1,
    text:
      'Profesjonalna i rzetelna firma. Montaż klimatyzacji przeprowadzony sprawnie, ' +
      'czysto i zgodnie z ustaleniami. Fachowe podejście.',
  },
  {
    author: 'Mateusz Owsian…',
    date: '2025-03-28',
    rating: 2,
    text: 'Godny polecenia profesjonalista.',
  },
    {
    author: 'rentileno…',
    date: '2025-04-06',
    rating: 5,
    text:
      'Profesjonalne podejście do klienta. Montaż poszedł sprawnie i szybko. ' +
      'Klimatyzacja grzeje i chłodzi :) PolecamKlimatyzacja grzeje i chłodzi :) PolecamKlimatyzacja grzeje i chłodzi :) PolecamKlimatyzacja grzeje i chłodzi :) PolecamKlimatyzacja grzeje i chłodzi :) Polecam',
  },
  {
    author: 'Alicja',
    date: '2025-04-01',
    rating: 5,
    text:
      'Profesjonalna firma. Fachowe doradztwo. Dobrze zorganizowana praca. ' +
      'Dotrzymanie terminu. Wszystko zgodnie z ustaleniami.',
  },
  {
    author: 'Maciej Kazieczko',
    date: '2025-04-01',
    rating: 5,
    text:
      'Profesjonalna i rzetelna firma. Montaż klimatyzacji przeprowadzony sprawnie, ' +
      'czysto i zgodnie z ustaleniami. Fachowe podejście.',
  },
  {
    author: 'Mateusz Owsian…',
    date: '2025-03-28',
    rating: 2,
    text: 'Godny polecenia profesjonalista.',
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
                width={120}
                height={120}
                className="h-24 w-auto"
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
                  Galeria prac
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
      <section id="galeria" className="mx-auto max-w-6xl px-4 pb-14 pt-14 scroll-mt-36">
        <Reveal>
          <h3 className="text-center text-2xl font-bold tracking-tight mb-6">
            Galeria prac
          </h3>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
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
      totalCount={38}
      averageRating={avg}
    />
  </Reveal>
</section>

    </>
  );
}
