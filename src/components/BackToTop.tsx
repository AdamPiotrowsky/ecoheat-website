'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-50 rounded-full border border-black/10 bg-white/80 p-3 shadow-md backdrop-blur transition hover:bg-white"
      aria-label="Wróć na górę"
      title="Wróć na górę"
    >
      ↑
    </button>
  );
}
