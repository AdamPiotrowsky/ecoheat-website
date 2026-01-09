'use client';

import Image from 'next/image';
import { useMemo, useState, useEffect } from 'react';

type GalleryCarouselProps = {
  images: string[];
};

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const prev = () => {
    setIdx((i) => (i - 1 + safeImages.length) % safeImages.length);
  };

  const next = () => {
    setIdx((i) => (i + 1) % safeImages.length);
  };

  // przy każdej zmianie zdjęcia resetujemy stan ładowania
  useEffect(() => {
    setIsLoaded(false);
  }, [idx]);

  if (!safeImages.length) return null;

  return (
    <div className="relative mt-4 sm:mt-6">
      {/* większe pole na zdjęcie, szczególnie na telefonach */}
      <div className="relative h-[380px] overflow-hidden rounded-2xl bg-black shadow-sm sm:h-[440px] md:h-[560px] lg:h-[640px]">
        {/* Zdjęcie – całe, bez przycinania, z płynnym pojawianiem */}
        <Image
          src={safeImages[idx]}
          alt={`Realizacja ${idx + 1}`}
          fill
          // brak key → brak pełnego remountu przy każdej zmianie
          className={[
            'object-contain',
            'transition-opacity duration-500 ease-out',
            isLoaded ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          priority={idx === 0}
          onLoadingComplete={() => setIsLoaded(true)}
        />

        {/* Overlay ładowania – ciemne tło już jest pod spodem (bg-black),
            więc nie ma białego flasha */}
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

        {/* Kropki nawigacji */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
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
      </div>
    </div>
  );
}
