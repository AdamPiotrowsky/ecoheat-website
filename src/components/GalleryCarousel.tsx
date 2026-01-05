'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

export default function GalleryCarousel({ images }: { images: string[] }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);

  const prev = () => {
    setIdx((i) => (i - 1 + safeImages.length) % safeImages.length);
  };

  const next = () => {
    setIdx((i) => (i + 1) % safeImages.length);
  };

  if (!safeImages.length) return null;

  return (
    <div className="relative mt-6">
      <div className="relative h-[420px] overflow-hidden rounded-2xl bg-gray-100 shadow-sm md:h-[520px] lg:h-[620px]">
        <Image
          key={safeImages[idx]}
          src={safeImages[idx]}
          alt={`Realizacja ${idx + 1}`}
          fill
          className="object-cover"
          priority
        />

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md backdrop-blur transition hover:bg-white"
          aria-label="Poprzednie zdjęcie"
          title="Poprzednie"
        >
          ←
        </button>

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
                  i === idx
                    ? 'w-6 bg-white'
                    : 'bg-white/60 hover:bg-white/80',
                ].join(' ')}
              />
            ))}
          </div>

      </div>
    </div>
  );
}
