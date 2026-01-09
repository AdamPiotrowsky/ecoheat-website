'use client';

import { useEffect, useMemo, useState } from 'react';

type Props = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  heightClassName?: string; // np. "h-[60vh] md:h-[70vh]"
  subtitleTypingSpeedMs?: number; // np. 45
  subtitleStartDelayMs?: number;  // np. 250
};

export default function PageHero({
  title,
  subtitle,
  imageUrl,
  heightClassName = 'h-[60vh] md:h-[70vh]',
  subtitleTypingSpeedMs = 35,
  subtitleStartDelayMs = 250,
}: Props) {
  const subtitleChars = useMemo(() => Array.from(subtitle ?? ''), [subtitle]);

  const [showTitle, setShowTitle] = useState(false);
  const [typedSubCount, setTypedSubCount] = useState(0);
  const [doneSubTyping, setDoneSubTyping] = useState(false);

  useEffect(() => {
    // Reset na zmianę strony/propsów
    setShowTitle(false);
    setTypedSubCount(0);
    setDoneSubTyping(false);

    // Title: pokaż od razu (ładny fade-in)
    const t1 = window.setTimeout(() => setShowTitle(true), 50);

    // Jeśli nie ma subtitle, kończymy
    if (!subtitleChars.length) return () => window.clearTimeout(t1);

    // Subtitle: start po krótkiej pauzie
    const t2 = window.setTimeout(() => {
      const timer = window.setInterval(() => {
        setTypedSubCount((prev) => {
          const next = prev + 1;

          if (next >= subtitleChars.length) {
            window.clearInterval(timer);
            setDoneSubTyping(true);
            return subtitleChars.length;
          }

          return next;
        });
      }, subtitleTypingSpeedMs);
    }, subtitleStartDelayMs);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [subtitleChars, subtitleTypingSpeedMs, subtitleStartDelayMs]);

  const typedSubtitle = subtitleChars.slice(0, typedSubCount).join('');

  return (
    <section className={`relative w-full overflow-hidden ${heightClassName}`}>
      {/* tło */}
      <div
        className="absolute inset-0 hero-bg hero-zoom"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden="true"
      />

      {/* przyciemnienie */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      {/* tekst w kontenerze */}
      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-24 md:pb-16 md:pt-32">
          {/* Title: pojawia się (fade + slide) */}
          <h1
            className={[
              'text-4xl font-bold tracking-tight text-white md:text-5xl',
              'transition-all duration-700 ease-out',
              showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
            ].join(' ')}
          >
            {title}
          </h1>

          {/* Subtitle: typewriter po tytule */}
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-base text-white/85 md:text-lg">
              <span>{typedSubtitle}</span>

              {/* Migający kursor podczas pisania subtitle */}
              {!doneSubTyping ? (
                <span className="ml-1 inline-block w-[10px] align-baseline text-white/90 animate-pulse">
                  |
                </span>
              ) : null}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
