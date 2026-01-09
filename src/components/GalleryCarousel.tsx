'use client';

import Image from 'next/image';
import { useMemo, useState, useEffect, useRef } from 'react';

type GalleryCarouselProps = {
  images: string[];
};

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // do swipe na telefonie
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50; // px

  const prev = () => {
    setIdx((i) => (i - 1 + safeImages.length) % safeImages.length);
  };

  const next = () => {
    setIdx((i) => (i + 1) % safeImages.length);
  };

  // reset stanu ładowania przy każdej zmianie zdjęcia
  useEffect(() => {
    setIsLoaded(false);
  }, [idx]);

  if (!safeImages.length) return null;

  // obsługa gestów dotykowych
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchEndXRef.current = touch.clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;

    const deltaX = touchStartXRef.current - touchEndXRef.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        // swipe w lewo -> następne
        next();
      } else {
        // swipe w prawo -> poprzednie
        prev();
      }
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <div className="relative mt-4 sm:mt-6">
      {/* większe pole na zdjęcie, szczególnie na telefonach */}
      <div
        className="relative h-[380px] overflow-hidden rounded-2xl bg-black shadow-sm sm:h-[440px] md:h-[560px] lg:h-[640px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Zdjęcie – całe, bez przycinania, z płynnym pojawianiem */}
        <Image
          src={safeImages[idx]}
          alt={`Realizacja ${idx + 1}`}
          fill
          className={[
            'object-contain',
            'transition-opacity duration-500 ease-out',
            isLoaded ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          priority={idx === 0}
          onLoadingComplete={() => setIsLoaded(true)}
        />

        {/* Loader podczas zmiany zdjęcia */}
        {!isLoaded && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/40 border-t-white/80" />
          </div>
        )}

        {/* Strzałka lewa */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md backdrop-blur transition hover:bg-white"
          aria-label="Poprzednie zdjęcie"
          title="Poprzednie"
        >
          ←
        </button>

        {/* Strzałka prawa */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md backdrop-blur transition hover:bg-white"
          aria-label="Następne zdjęcie"
          title="Następne"
        >
          →
        </button>

        {/* Kropki nawigacji – tylko na desktopie (md+) */}
        <div className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 md:flex">
          {safeImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Przejdź do zdjęcia ${i + 1}`}
              className={[
                'h-2 w-2 rounded-full transition-all duration-300',
                i === idx ? 'w-6 bg-white' : 'bg-white/60 hover:bg-white/80',
              ].join(' ')}
            />
          ))}
        </div>

        {/* Licznik slajdów – tylko na telefonie (do md) */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white md:hidden">
          {idx + 1}/{safeImages.length}
        </div>
      </div>
    </div>
  );
}
