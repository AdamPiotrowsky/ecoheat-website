export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* O firmie */}
          <div>
            <h3 className="text-lg font-bold tracking-tight">EcoHeat Technic</h3>
            <p className="mt-3 text-sm text-white/75">
              Skontaktuj się z nami — chętnie odpowiemy na pytania dotyczące instalacji,
              doboru urządzeń oraz możliwych dofinansowań. Jesteśmy tu, by ułatwić Ci
              przejście na nowoczesne i energooszczędne rozwiązania.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-bold tracking-tight">Kontakt</h3>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p className="font-semibold text-white">Dominik Przewoźny</p>

              <p>
                📍 Ratajczaka 14<br />
                64-320 Wielka Wieś
              </p>

              <p>
                📞{' '}
                <a
                  href="tel:+48734601121"
                  className="underline decoration-white/30 underline-offset-4 hover:decoration-white/70"
                >
                  +48 734 601 121
                </a>
              </p>

              <p>
                ✉️{' '}
                <a
                  href="mailto:biuro@ecoheattechnic.pl"
                  className="underline decoration-white/30 underline-offset-4 hover:decoration-white/70"
                >
                  biuro@ecoheattechnic.pl 
                </a>
              </p>
            </div>
          </div>

          {/* Social + szybkie linki */}
          <div>
            <h3 className="text-lg font-bold tracking-tight">Bądźmy w kontakcie</h3>

            <div className="mt-4 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/EcoHeatTechnic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#1877F2" />
                  <path
                    d="M13.8 7.6h1.7V5h-2.1c-2.2 0-3.6 1.4-3.6 3.7v1.9H7.5v2.7h2.3V19h2.8v-5.7h2.3l.4-2.7h-2.7V9c0-.8.2-1.4 1.2-1.4z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ecoheattechnic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="igGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F58529" />
                      <stop offset="50%" stopColor="#DD2A7B" />
                      <stop offset="100%" stopColor="#8134AF" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="2.5"
                    y="2.5"
                    width="19"
                    height="19"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="url(#igGradientFooter)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="url(#igGradientFooter)"
                    strokeWidth="2"
                  />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="url(#igGradientFooter)" />
                </svg>
              </a>
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <a
                href="/kontakt"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900"
              >
                Przejdź do kontaktu
              </a>

              <a
                href="/oferta"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 px-4 py-3 font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                Zobacz ofertę
              </a>
            </div>
          </div>
        </div>

        {/* Dolny pasek */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} EcoHeat Technic. Wszelkie prawa zastrzeżone.</p>
          <p>Ratajczaka 14 • 64-320 Wielka Wieś</p>
        </div>
      </div>
    </footer>
  );
}
