export default function TopBar() {
  return (
    <div className="w-full border-b border-white/10 bg-gray-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs md:text-sm">
        {/* LEWA STRONA – dane */}
        <div className="hidden items-center gap-5 md:flex">
          <span className="flex items-center gap-1 opacity-90">
            📍 Wielka Wieś, Ratajczaka 14
          </span>

          <a
            href="tel:+48734601121"
            className="flex items-center gap-1 opacity-90 hover:opacity-100"
          >
            📞 +48 734 601 121
          </a>

          <a
            href="mailto:ecoheattechnic@gmail.com"
            className="flex items-center gap-1 opacity-90 hover:opacity-100"
          >
            ✉️ ecoheattechnic@gmail.com
          </a>
        </div>

        {/* MOBILE – skrócona wersja */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="tel:+48734601121"
            className="opacity-90 hover:opacity-100"
          >
            📞
          </a>
          <a
            href="mailto:ecoheattechnic@gmail.com"
            className="opacity-90 hover:opacity-100"
          >
            ✉️
          </a>
        </div>

        {/* PRAWA STRONA – social + kontakt */}
        <div className="flex items-center gap-6">
                <a
                  href="https://www.facebook.com/EcoHeatTechnic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#1877F2" />
                    <path
                      d="M13.8 7.6h1.7V5h-2.1c-2.2 0-3.6 1.4-3.6 3.7v1.9H7.5v2.7h2.3V19h2.8v-5.7h2.3l.4-2.7h-2.7V9c0-.8.2-1.4 1.2-1.4z"
                      fill="white"
                    />
                  </svg>
                </a>



<a
  href="https://www.instagram.com/ecoheattechnic/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="inline-flex items-center justify-center transition-opacity hover:opacity-80"
>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="igGradientTopbar" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="50%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#8134AF" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      ry="5"
      fill="none"
      stroke="url(#igGradientTopbar)"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      fill="none"
      stroke="url(#igGradientTopbar)"
      strokeWidth="2"
    />
    <circle cx="17.2" cy="6.8" r="1.2" fill="url(#igGradientTopbar)" />
  </svg>
</a>




          {/* Przycisk kontakt */}
          <a
            href="/kontakt"
            className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold transition hover:bg-white hover:text-gray-900 md:text-sm"
          >
            Kontakt
          </a>
        </div>
      </div>
    </div>
  );
}
