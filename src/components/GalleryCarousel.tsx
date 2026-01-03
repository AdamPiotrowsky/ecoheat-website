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
      <div className="relative h-72 overflow-hidden rounded-2xl bg-gray-100 shadow-sm md:h-96">
        <Image
          key={safeImages[idx]} // key powoduje ładny „restart” animacji gdybyś dodał
          src={safeImages[idx]}
          alt={`Realizacja ${idx + 1}`}
          fill
          className="object-cover"
          priority
        />

        {/* Strzałki */}
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

        {/* Delikatny licznik */}
        <div className="absolute bottom-3 right-3 z-20 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {idx + 1}/{safeImages.length}
        </div>
      </div>
    </div>
  );
}
