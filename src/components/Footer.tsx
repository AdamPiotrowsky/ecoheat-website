export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-500 md:flex-row">
        <p>© {new Date().getFullYear()} EcoHeat. Wszelkie prawa zastrzeżone.</p>
        <p>ul. Przykładowa 1 • 00-000 Miasto • NIP: 000-000-00-00</p>
      </div>
    </footer>
  );
}
