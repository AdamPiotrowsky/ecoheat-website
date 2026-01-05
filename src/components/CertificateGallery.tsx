'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type Cert = {
  title: string;
  desc?: string;
  thumb: string; // miniaturka (może być to samo co full)
  full: string;  // duże zdjęcie do lightbox
};

export default function CertificateGallery({ items }: { items: Cert[] }) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const safeItems = useMemo(() => items.filter(Boolean), [items]);

  const close = () => setOpen(false);

  const openAt = (idx: number) => {
    setActiveIdx(idx);
    setOpen(true);
  };

  const prev = () => {
    setActiveIdx((i) => (i - 1 + safeItems.length) % safeItems.length);
  };

  const next = () => {
    setActiveIdx((i) => (i + 1) % safeItems.length);
  };

  // Klawiatura: Esc zamyka, strzałki zmieniają
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, safeItems.length]);

  if (!safeItems.length) return null;

  const active = safeItems[activeIdx];

  return (
    <>
      {/* GRID: mobile 1 kolumna, od md 2 kolumny */}
      <div className="grid gap-6 md:grid-cols-2">
        {safeItems.map((c, idx) => (
          <button
            key={c.title + idx}
            type="button"
            onClick={() => openAt(idx)}
            className="group text-left"
          >
            <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition group-hover:shadow-md">
              <div className="relative h-72 overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={c.thumb}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {c.title}
              </h3>

              {c.desc ? (
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              ) : null}

              <p className="mt-3 text-sm font-semibold text-gray-900 underline decoration-black/20 underline-offset-4 group-hover:decoration-black/60">
                
              </p>
            </div>
          </button>
        ))}
      </div>

{open && (
  <div
    className="fixed inset-0 z-[100] bg-black/70"
    onClick={close}
    aria-modal="true"
    role="dialog"
  >
    {/* wyśrodkowanie panelu */}
    <div className="flex h-full w-full items-center justify-center p-4">
      {/* PANEL – klik w niego NIE zamyka */}
      <div
        className="relative w-full max-w-5xl rounded-2xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[75vh] w-full">
          <Image
            src={active.full}
            alt={active.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              {active.title}
            </p>
            {active.desc && (
              <p className="truncate text-xs text-white/70">
                {active.desc}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
            >
              ←
            </button>
            <button
              onClick={next}
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
            >
              →
            </button>
            <button
              onClick={close}
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* hint */}
    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/70">
      Kliknij gdziekolwiek poza certyfikatem, aby zamknąć • Esc
    </p>
  </div>
)}
    </>
  );
}
