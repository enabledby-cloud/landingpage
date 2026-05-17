'use client';

import { useEffect, useRef, useState } from 'react';
import * as Progress from '@radix-ui/react-progress';
import { caseStudiesData } from '@/data';
import { Section, SectionHeader, Badge, GradientText } from '@/components/ui';

const AUTO_ADVANCE_MS = 6000;

export function CaseStudiesSection() {
  const studies = caseStudiesData.caseStudies;
  const count = studies.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(Date.now());
  const rafRef = useRef<number>(0);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Reset progress + scroll active card into view (container only, no page scroll)
  useEffect(() => {
    startRef.current = Date.now();
    setProgress(0);
    const container = cardsRef.current;
    if (!container) return;
    const card = container.children[active] as HTMLElement | undefined;
    if (card) {
      const left = card.offsetLeft - container.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
      container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    }
  }, [active]);

  // Animate progress + auto-advance
  useEffect(() => {
    if (paused) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / AUTO_ADVANCE_MS) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        setActive((prev) => (prev + 1) % count);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, paused, count]);

  // When paused, remember elapsed so we can resume
  useEffect(() => {
    if (paused) return;
    // Adjust start time so progress resumes from where it was
    const elapsed = (progress / 100) * AUTO_ADVANCE_MS;
    startRef.current = Date.now() - elapsed;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const study = studies[active];

  return (
    <Section id="results">
      <SectionHeader
        title={caseStudiesData.title}
        subtitle={caseStudiesData.subtitle}
        centered
        anchor="results"
      />

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Radio cards — horizontal scroll when overflowing */}
        <div ref={cardsRef} className="flex gap-2 sm:gap-3 mb-4 overflow-x-auto scrollbar-none pb-1">
          {studies.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 flex-1 text-left rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-200 cursor-pointer min-w-[140px] sm:min-w-[160px]
                  ${isActive
                    ? 'border-brand-purple/50 bg-background-secondary/60'
                    : 'border-border bg-background-secondary/20 opacity-50 hover:opacity-75'
                  }`}
              >
                <span className="block text-sm font-semibold text-text-primary truncate">
                  {s.title}
                </span>
                <span className="block text-xs text-text-muted mt-0.5 truncate">
                  {s.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Progress bar */}
        <Progress.Root
          className="h-1 rounded-full bg-border/40 overflow-hidden mb-6"
          value={progress}
        >
          <Progress.Indicator
            className="h-full rounded-full transition-none"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #F778BA, #A093FF, #58A6FF)',
            }}
          />
        </Progress.Root>

        {/* Content box */}
        <div className="rounded-xl border border-border bg-background-secondary/40 overflow-hidden">
          <div className="p-4 sm:p-6 lg:px-10 lg:py-8">
            <div className="flex flex-wrap gap-2 mb-5">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="default">{tag}</Badge>
              ))}
            </div>

            <p className="text-sm sm:text-[15px] leading-relaxed text-text-secondary">
              {study.situation}{' '}
              <span className="text-text-primary">{study.task}</span>{' '}
              {study.action}
            </p>
          </div>

          {/* Result strip */}
          <div className="border-t border-border bg-background/60 px-4 sm:px-6 lg:px-10 py-4 sm:py-5
                          flex items-center gap-3">
            <span
              className="shrink-0 h-8 w-1 rounded-full"
              style={{ background: 'linear-gradient(180deg, #F778BA, #A093FF, #58A6FF)' }}
              aria-hidden
            />
            <p className="text-base md:text-lg font-bold tracking-tight">
              <GradientText>{study.result}</GradientText>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
