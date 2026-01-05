'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/o-nas', label: 'O nas' },
  { href: '/oferta', label: 'Oferta' },
  { href: '/certyfikaty', label: 'Certyfikaty' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Zamknij menu po zmianie ścieżki
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Esc zamyka menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav className="w-full bg-white">
      <div className="h-[1px] w-full bg-black/15" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:py-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
        <Image
            src="/images/logo.png"
            alt="EcoHeat logo"
            width={140}
            height={140}
            className="h-18 w-auto md:h-20"
            priority
          />

        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-16 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'relative px-2 py-2 text-lg font-semibold tracking-wide text-gray-800 transition-colors duration-200 hover:text-gray-950',
                  // underline – blisko tekstu, pełna szerokość
                  'after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[2px] after:bg-gray-900 after:content-[""]',
                  'after:origin-left after:scale-x-0 after:transition-transform after:duration-300',
                  'hover:after:scale-x-100',
                  isActive ? 'after:scale-x-100' : '',
                ].join(' ')}


              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/10 p-3 text-gray-900 shadow-sm transition hover:bg-gray-50"
          aria-label="Otwórz menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Ikona hamburger / X */}
          <span className="relative block h-4 w-6">
            <span
              className={[
                'absolute left-0 top-0 h-[2px] w-6 bg-gray-900 transition-all duration-300',
                open ? 'top-2 rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-2 h-[2px] w-6 bg-gray-900 transition-all duration-300',
                open ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-4 h-[2px] w-6 bg-gray-900 transition-all duration-300',
                open ? 'top-2 -rotate-45' : '',
              ].join(' ')}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {open ? (
        <div className="md:hidden border-t border-black/10">
          <div className="mx-auto max-w-7xl px-5 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      'rounded-xl px-4 py-3 text-base font-semibold transition',
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100',
                    ].join(' ')}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 h-[1px] w-full bg-black/10" />

            <Link
              href="/kontakt"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3 text-base font-semibold text-white border border-black transition-all duration-300 ease-out hover:bg-white hover:text-black hover:shadow-md"
              onClick={() => setOpen(false)}
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      ) : null}

      <div className="h-[1px] w-full bg-black/10" />
    </nav>
  );
}
