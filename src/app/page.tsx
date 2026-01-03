import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import GalleryCarousel from '@/components/GalleryCarousel';
import ReviewsCarousel from '@/components/ReviewsCarousel';

const galleryImages = [
  '/images/gallery/logo.jpg',
  '/images/gallery/logo.jpg',
  '/images/gallery/logo.jpg',
  '/images/gallery/logo.jpg',
];

const partnerLogos = [
  { name: 'Daikin', src: '/images/partners/logo.png' },
  { name: 'Mitsubishi', src: '/images/partners/logo.png' },
  { name: 'Panasonic', src: '/images/partners/logo.png' },
  { name: 'Samsung', src: '/images/partners/logo.png' },
  { name: 'Daikin', src: '/images/partners/logo.png' },
  { name: 'Mitsubishi', src: '/images/partners/logo.png' },
  { name: 'Panasonic', src: '/images/partners/logo.png' },
  { name: 'Samsung', src: '/images/partners/logo.png' },
];

const googleReviews = [
  { author: 'Jan K.', text: 'Szybka realizacja, fachowe doradztwo. Polecam!' },
  { author: 'Anna M.', text: 'Bardzo dobry kontakt i czysto wykonana instalacja.' },
  { author: 'Marek S.', text: 'Profesjonalny serwis i terminowość.' },
  { author: 'Katarzyna P.', text: 'Wszystko jasno wytłumaczone, świetna ekipa.' },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        title="EcoHeat"
        subtitle="Nowoczesne i energooszczędne rozwiązania grzewcze dla domu i firmy."
        imageUrl="/images/hero-offer.jpg"
        heightClassName="h-[70vh] md:h-[70vh]"
      />

      {/* 1) Sekcja intro — 1 cm odstępu od hero */}
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
                Krótki, konkretny opis: co robicie, dla kogo, w czym jesteście mocni.
                2–3 zdania.
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
      <section id="galeria" className="mx-auto max-w-6xl px-4 py-14 scroll-mt-36">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Galeria prac</h3>
              <p className="mt-2 text-gray-600">Użyj strzałek, aby przewijać.</p>
            </div>
          </div>

          <GalleryCarousel images={galleryImages} />
        </Reveal>
      </section>

      {/* 3) Certyfikaty */}
      <section id="certyfikaty" className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-36">
        <Reveal>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-bold tracking-tight">Certyfikaty</h3>
            <p className="mt-2 text-gray-600">Tu wstawisz skany/znaczki certyfikatów.</p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {['Certyfikat A', 'Certyfikat B', 'Certyfikat C'].map((c) => (
                <div key={c} className="rounded-2xl bg-gray-50 p-4">
                  <p className="font-semibold">{c}</p>
                  <p className="mt-2 text-sm text-gray-600">Krótki opis.</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4) Partnerzy */}
      <section id="partnerzy" className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-36">
        <Reveal>
          <h3 className="text-2xl font-bold tracking-tight">Firmy, z którymi pracujemy</h3>
          <p className="mt-2 text-gray-600">Najedź na logo – pokaże się nazwa.</p>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {partnerLogos.map((p) => (
              <div
                key={p.name}
                className="group relative flex items-center justify-center rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={140}
                  height={60}
                  className="h-10 w-auto opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                />

                {/* 1 cm niżej: zamiast bottom-3 dajemy -bottom-6 */}
                <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                  {p.name}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 5) Opinie Google — nie full width, jak reszta */}
      <section id="opinie" className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-36">
        <Reveal>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Opinie Google</h3>
                <p className="mt-2 text-gray-600">Użyj strzałek, aby przewijać.</p>
              </div>
            </div>

            <ReviewsCarousel reviews={googleReviews} />
          </div>
        </Reveal>
      </section>
    </>
  );
}
