import PageHero from '@/components/PageHero';

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Kontakt"
        subtitle="Napisz lub zadzwoń — odpowiemy najszybciej jak to możliwe."
        imageUrl="/images/hero-contact.jpg"
      />

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Dane firmy</h2>

          <div className="mt-4 space-y-2 text-gray-700">
            <p className="font-semibold">EcoHeat</p>
            <p>ul. Przykładowa 1, 00-000 Miasto</p>
            <p>Tel: +48 000 000 000</p>
            <p>Email: kontakt@ecoheat.pl</p>
          </div>

          <h3 className="mt-6 text-lg font-semibold">Formularz</h3>
          <form className="mt-3 space-y-3">
            <input className="w-full rounded-xl border bg-white px-4 py-2" placeholder="Imię i nazwisko" />
            <input className="w-full rounded-xl border bg-white px-4 py-2" placeholder="Email" />
            <input className="w-full rounded-xl border bg-white px-4 py-2" placeholder="Telefon (opcjonalnie)" />
            <textarea className="w-full rounded-xl border bg-white px-4 py-2" rows={5} placeholder="Wiadomość" />
            <button
              type="button"
              className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Wyślij
            </button>
            <p className="text-xs text-gray-500">
              (W kolejnym kroku podepniemy wysyłkę e-mail.)
            </p>
          </form>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <iframe
            title="Mapa"
            src="https://www.google.com/maps?q=Warszawa&output=embed"
            width="100%"
            height="100%"
            className="min-h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
