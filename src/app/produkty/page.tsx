import PageHero from '@/components/PageHero';

export default function ProductsPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Produkty"
        subtitle="Wybrane rozwiązania, które instalujemy i polecamy."
        imageUrl="/images/hero-products.jpg"
      />

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { name: 'Produkt A', items: ['Cecha 1', 'Cecha 2', 'Cecha 3'] },
          { name: 'Produkt B', items: ['Cecha 1', 'Cecha 2', 'Cecha 3'] },
          { name: 'Produkt C', items: ['Cecha 1', 'Cecha 2', 'Cecha 3'] },
        ].map((p) => (
          <div key={p.name} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <ul className="mt-3 list-inside list-disc text-sm text-gray-600">
              {p.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
