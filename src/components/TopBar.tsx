export default function TopBar() {
  return (
    <div className="w-full border-b bg-gray-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-1 text-xs md:justify-between">
        <div className="hidden gap-4 md:flex">
          <span>📍 Warszawa</span>
          <span>📞 +48 000 000 000</span>
          <span>✉️ kontakt@ecoheat.pl</span>
        </div>

        {/* Na telefonie prościej, żeby się mieściło */}
        <div className="flex gap-4 md:hidden">
          <span>📞 +48 000 000 000</span>
          <span>✉️ kontakt@ecoheat.pl</span>
        </div>
      </div>
    </div>
  );
}
