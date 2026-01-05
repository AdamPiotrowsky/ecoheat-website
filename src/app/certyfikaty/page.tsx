import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CertificateGallery from '@/components/CertificateGallery';

const certificates = [
  {
    title: 'Certyfikat A',
    desc: 'Krótki opis certyfikatu i zakresu uprawnień.',
    thumb: '/images/certs/c1.png',
    full: '/images/certs/c1.png',
  },
  {
    title: 'Certyfikat B',
    desc: 'Krótki opis certyfikatu i zakresu uprawnień.',
    thumb: '/images/certs/c2.png',
    full: '/images/certs/c2.png',
  },
  {
    title: 'Certyfikat C',
    desc: 'Krótki opis certyfikatu i zakresu uprawnień.',
    thumb: '/images/certs/c3.png',
    full: '/images/certs/c3.png',
  },
    {
    title: 'Certyfikat D',
    desc: 'Krótki opis certyfikatu i zakresu uprawnień.',
    thumb: '/images/certs/c4.png',
    full: '/images/certs/c4.png',
  },
];

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        title="Certyfikaty i uprawnienia"
        subtitle="Potwierdzone kompetencje. Sprawdzone standardy."
        imageUrl="/images/hero/h2.jpeg"
        heightClassName="h-[70vh] md:h-[70vh]"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <section className="text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Bezpieczeństwo i jakość potwierdzone dokumentami
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-gray-600">
            Poniżej znajdziesz certyfikaty i uprawnienia potwierdzające nasze kwalifikacje.
            Kliknij, aby powiększyć dokument.
          </p>
        </section>

        <Reveal>
          <section className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-10">
            <CertificateGallery items={certificates} />
          </section>
        </Reveal>
      </div>
    </>
  );
}
