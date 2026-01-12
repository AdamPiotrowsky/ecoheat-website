import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import MeetingForm from '@/components/MeetingForm';

const COMPANY = {
  owner: 'Dominik Przewoźny',
  phone: '+48 734 601 121',
  email: 'biuro@ecoheattechnic.pl',
  addressLine1: 'Ratajczaka 14',
  postcodeCity: '64-320 Wielka Wieś',
  fullAddress: 'Ratajczaka 14, 64-320 Wielka Wieś, Polska',
};

export default function ContactPage() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    COMPANY.fullAddress
  )}&output=embed`;

  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Napisz lub zadzwoń — odpowiemy najszybciej jak to możliwe."
        imageUrl="/images/hero/h5.jpeg"
        heightClassName="h-[70vh] md:h-[70vh]"
      />
        
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">

                {/* MAPA */}
        <Reveal>
          <section className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <iframe
              title="Mapa – lokalizacja EcoHeat Technic"
              src={mapsSrc}
              width="100%"
              height="100%"
              className="min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </Reveal>

        <section className="grid gap-6 md:grid-cols-2">
          {/* LEWA: Dane */}
          <Reveal>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                Dane firmy
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Skontaktuj się z nami telefonicznie lub mailowo — chętnie doradzimy.
              </p>

              <div className="mt-6 space-y-4 text-gray-800">
                <div>
                  <p className="text-sm text-gray-500">Właściciel</p>
                  <p className="font-semibold">{COMPANY.owner}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Adres</p>
                  <p className="font-semibold">{COMPANY.addressLine1}</p>
                  <p className="font-semibold">{COMPANY.postcodeCity}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Telefon</p>
                  <a
                    className="font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-black/60"
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  >
                    {COMPANY.phone}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    className="font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-black/60"
                    href={`mailto:${COMPANY.email}`}
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

            </div>
          </Reveal>

          {/* PRAWA: Formularz mailowy */}
          <Reveal>
            <MeetingForm />
          </Reveal>
        </section>


      </div>
    </>
  );
}
