'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/o-nas', label: 'O nas' },
  { href: '/oferta', label: 'Oferta' },
  { href: '/certyfikaty', label: 'Certyfikaty' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white">
      {/* górna linia oddzielająca */}
      <div className="h-[1px] w-full bg-black/15" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="EcoHeat logo"
            width={86}
            height={86}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* NAWIGACJA */}
        <div className="flex items-center gap-14">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'relative text-lg font-semibold tracking-wide text-gray-800 transition-colors duration-200 hover:text-gray-950',
                  // underline animation
                  'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-900 after:transition-all after:duration-400 after:content-[""]',
                  'hover:after:w-full',
                  // aktywna strona
                  isActive ? 'after:w-full' : '',
                ].join(' ')}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* dolna linia oddzielająca */}
      <div className="h-[1px] w-full bg-black/10" />
    </nav>
  );
}
