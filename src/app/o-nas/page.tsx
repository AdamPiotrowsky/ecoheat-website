import PageHero from '@/components/PageHero';

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="O nas"
        subtitle="Poznaj EcoHeat – kim jesteśmy i dlaczego klienci nam ufają."
        imageUrl="/images/hero-about.jpg"
      />

      <section className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold">Kim jesteśmy</h2>
        <p className="mt-3 text-gray-600">
          Tu wpiszesz historię firmy, doświadczenie, misję i wyróżniki.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-gray-50 p-4">
            <h3 className="font-semibold">Doświadczenie</h3>
            <p className="mt-2 text-sm text-gray-600">Kilka zdań…</p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-4">
            <h3 className="font-semibold">Jakość</h3>
            <p className="mt-2 text-sm text-gray-600">Kilka zdań…</p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-4">
            <h3 className="font-semibold">Gwarancja</h3>
            <p className="mt-2 text-sm text-gray-600">Kilka zdań…</p>
          </div>
        </div>
      </section>
    </div>
  );
}
