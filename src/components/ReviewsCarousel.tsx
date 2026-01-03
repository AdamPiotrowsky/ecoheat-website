'use client';

import { useRef } from 'react';

type Review = { author: string; text: string };

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: 'left' | 'right') => {
    const el = ref.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>('[data-card="1"]');
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.9;
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <div className="relative mt-6">
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

      <div
        ref={ref}
        className="no-scrollbar flex gap-4 overflow-x-auto pb-2"
        style={{ scrollSnapType: 'x mandatory' as any }}
      >
        {reviews.map((r) => (
          <div
            key={r.author + r.text}
            data-card="1"
            className="min-w-[85%] snap-center rounded-2xl border border-black/10 bg-gray-50 p-6 shadow-sm md:min-w-[48%] lg:min-w-[32%]"
          >
            <p className="text-sm text-gray-700">“{r.text}”</p>
            <p className="mt-4 text-sm font-semibold text-gray-900">— {r.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
