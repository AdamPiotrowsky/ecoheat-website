'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function GalleryCarousel({ images }: { images: string[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: 'left' | 'right') => {
    const el = ref.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const atStart = el.scrollLeft <= 2;
    const atEnd = el.scrollLeft >= max - 2;

    // Zapętlenie:
    if (dir === 'left' && atStart) {
      el.scrollTo({ left: max, behavior: 'smooth' });
      return;
    }
    if (dir === 'right' && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    const card = el.querySelector<HTMLElement>('[data-card="1"]');
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.9; // + gap
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <div className="relative mt-6">
      {/* Strzałki */}
      <button
        onClick={() => scrollByCard('left')}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md backdrop-blur transition hover:bg-white"
        aria-label="W lewo"
        title="W lewo"
      >
        ←
      </button>

      <button
        onClick={() => scrollByCard('right')}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md backdrop-blur transition hover:bg-white"
        aria-label="W prawo"
        title="W prawo"
      >
        →
      </button>

      {/* Lista */}
      <div
        ref={ref}
        className="no-scrollbar flex gap-4 overflow-x-auto pb-2"
        style={{ scrollSnapType: 'x mandatory' as any }}
      >
        {images.map((src, idx) => (
          <div
            key={src}
            data-card="1"
            className="relative h-64 min-w-[85%] snap-center overflow-hidden rounded-2xl bg-gray-100 shadow-sm md:min-w-[48%] lg:min-w-[32%]"
          >
            <Image
              src={src}
              alt={`Realizacja ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
