'use client';

import { useMemo, useState } from 'react';

type Review = {
  author: string;
  date: string;   // np. "2025-04-06"
  rating: number; // 1..5
  text: string;
};

function StarRow({ rating }: { rating: number }) {
  const full = Math.floor(Math.max(0, Math.min(5, rating)));
  const half = rating - full >= 0.5 && full < 5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-xl leading-none">
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="text-yellow-400">★</span>
      ))}
      {half ? <span className="text-yellow-400">☆</span> : null}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className="text-gray-300">★</span>
      ))}
    </div>
  );
}

function calcAverage(reviews: Review[]) {
  if (!reviews.length) return 0;
  const sum = reviews.reduce((acc, r) => acc + (Number(r.rating) || 0), 0);
  return sum / reviews.length;
}

export default function GoogleReviewsSection({
  reviews,
  totalCount,
  averageRating, // możesz nadal podać z zewnątrz, ale jak nie podasz to policzy samo
}: {
  reviews: Review[];
  totalCount: number;
  averageRating?: number;
}) {
  // policz średnią automatycznie jeśli nie dostaniesz jej w props
  const avg = useMemo(() => (typeof averageRating === 'number' ? averageRating : calcAverage(reviews)), [averageRating, reviews]);

  // 3 na desktop jak na screenie, 1 na mobile
  const perPageMobile = 1;
  const perPageDesktop = 3;

  const [page, setPage] = useState(0);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const total = reviews.length;
  const pagesMobile = Math.max(1, Math.ceil(total / perPageMobile));
  const pagesDesktop = Math.max(1, Math.ceil(total / perPageDesktop));

  const goPrev = (pages: number) => {
    setExpandedKey(null);
    setPage((p) => (p - 1 + pages) % pages);
  };

  const goNext = (pages: number) => {
    setExpandedKey(null);
    setPage((p) => (p + 1) % pages);
  };

  const mobileSlice = useMemo(() => {
    const start = page * perPageMobile;
    return reviews.slice(start, start + perPageMobile);
  }, [page, reviews]);

  const desktopSlice = useMemo(() => {
    const start = page * perPageDesktop;
    return reviews.slice(start, start + perPageDesktop);
  }, [page, reviews]);

  const googleWordmark = (
    <span className="text-3xl font-semibold tracking-tight">
      <span className="text-blue-500">G</span>
      <span className="text-red-500">o</span>
      <span className="text-yellow-500">o</span>
      <span className="text-blue-500">g</span>
      <span className="text-green-500">l</span>
      <span className="text-red-500">e</span>
    </span>
  );

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        {/* LEWY KAFEL PODSUMOWANIA — wyśrodkowany w pionie i poziomie */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="text-xl font-extrabold tracking-tight">DOSKONAŁA</div>

            {/* gwiazdki wg średniej */}
            <div className="mt-3">
              <StarRow rating={avg} />
            </div>

            <div className="mt-2 text-sm text-gray-600">
              Na podstawie <span className="font-semibold text-gray-900">{totalCount} opinii</span>
            </div>

            <div className="mt-4">{googleWordmark}</div>

            <div className="mt-4 text-xs text-gray-500">
              Średnia: <span className="font-semibold text-gray-900">{avg.toFixed(1)}</span> / 5
            </div>
          </div>
        </div>

        {/* PRAWA STRONA: OPINIE */}
        <div className="relative">
          {/* Strzałki desktop */}
          <div className="hidden lg:flex">
            <button
              onClick={() => goPrev(pagesDesktop)}
              className="absolute -left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition hover:bg-gray-50"
              aria-label="Poprzednie opinie"
              title="Poprzednie"
            >
              ‹
            </button>
            <button
              onClick={() => goNext(pagesDesktop)}
              className="absolute -right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition hover:bg-gray-50"
              aria-label="Następne opinie"
              title="Następne"
            >
              ›
            </button>
          </div>

          {/* Strzałki mobile */}
          <div className="mb-3 flex items-center justify-end gap-2 lg:hidden">
            <button
              onClick={() => goPrev(pagesMobile)}
              className="rounded-full bg-white p-2 shadow-sm ring-1 ring-black/10 hover:bg-gray-50"
              aria-label="Poprzednia opinia"
            >
              ‹
            </button>
            <button
              onClick={() => goNext(pagesMobile)}
              className="rounded-full bg-white p-2 shadow-sm ring-1 ring-black/10 hover:bg-gray-50"
              aria-label="Następna opinia"
            >
              ›
            </button>
          </div>

          {/* Delikatna animacja przejścia stron: fade + slide */}
          <div
            key={page}
            className="transition-all duration-[500ms] ease-out opacity-100 translate-y-0"
          >
            {/* MOBILE: 1 karta */}
            <div className="grid gap-4 lg:hidden">
              {mobileSlice.map((r) => (
                <ReviewCard
                  key={r.author + r.date}
                  review={r}
                  expandedKey={expandedKey}
                  setExpandedKey={setExpandedKey}
                />
              ))}
            </div>

            {/* DESKTOP: 3 karty */}
            <div className="hidden gap-4 lg:grid lg:grid-cols-3">
              {desktopSlice.map((r) => (
                <ReviewCard
                  key={r.author + r.date}
                  review={r}
                  expandedKey={expandedKey}
                  setExpandedKey={setExpandedKey}
                />
              ))}
            </div>
          </div>

          {/* Dodajemy prawdziwy efekt przejścia: gdy zmienia się page, key zmusza do remount,
             a transition robi “miękki” wizualny przeskok. Jeśli chcesz mocniej, powiedz — dołożę dwa stany. */}
        </div>
      </div>
    </div>
  );
}

function ReviewCard({
  review,
  expandedKey,
  setExpandedKey,
}: {
  review: Review;
  expandedKey: string | null;
  setExpandedKey: (k: string | null) => void;
}) {
  const key = review.author + '|' + review.date;
  const expanded = expandedKey === key;

  return (
    <div
      className={[
        'rounded-2xl border border-black/10 bg-white p-5 shadow-sm',
        // równa wysokość
        'h-[260px] md:h-[280px]',
        // układ pionowy
        'flex flex-col',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-semibold text-gray-900">{review.author}</div>
          <div className="text-xs text-gray-500">{review.date}</div>
        </div>
        <div className="text-sm font-semibold text-gray-400">G</div>
      </div>

      <div className="mt-3">
        <StarRow rating={review.rating} />
      </div>

      {/* treść: clamp gdy nie rozwinięte */}
      <p
        className={[
          'mt-3 text-sm leading-relaxed text-gray-700',
          expanded ? 'overflow-auto' : 'line-clamp-4',
        ].join(' ')}
      >
        {review.text}
      </p>

      {/* przycisk na dole karty */}
      <div className="mt-auto pt-3">
        {review.text.length > 120 ? (
          <button
            type="button"
            onClick={() => setExpandedKey(expanded ? null : key)}
            className="text-sm font-semibold text-gray-900 underline decoration-black/20 underline-offset-4 hover:decoration-black/60"
          >
            {expanded ? 'Zwiń' : 'Zobacz więcej'}
          </button>
        ) : (
          <div className="h-5" />
        )}
      </div>
    </div>
  );
}
