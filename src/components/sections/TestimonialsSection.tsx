'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { testimonialsData } from '@/data';
import type { Testimonial } from '@/data/types';
import { Section, SectionHeader, Text, Avatar, AvatarFallback } from '@/components/ui';
import { Quote, ExternalLink, X, Expand } from 'lucide-react';

const VISIBLE_LINES = 3;
const LINE_HEIGHT_REM = 1.5;
const MAX_QUOTE_HEIGHT = `${VISIBLE_LINES * LINE_HEIGHT_REM}rem`;

function TestimonialCard({ testimonial, onClick }: { testimonial: Testimonial; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group/card w-[340px] shrink-0 cursor-pointer rounded-lg border border-border bg-background-secondary/80 p-5 text-left backdrop-blur-xl transition-all hover:border-brand-purple/60 hover:shadow-lg hover:shadow-brand-purple/5"
    >
      <div className="mb-2 flex items-center justify-between">
        <Quote className="h-5 w-5 text-brand-purple/40" />
        <span className="flex items-center gap-1 text-xs text-text-muted opacity-0 transition-opacity group-hover/card:opacity-100">
          <Expand className="h-3 w-3" />
          Read more
        </span>
      </div>
      <blockquote
        className="overflow-hidden text-sm leading-relaxed text-text-secondary italic"
        style={{ maxHeight: MAX_QUOTE_HEIGHT }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer className="mt-3 flex items-center gap-3 border-t border-border pt-3">
        <Avatar size="sm">
          <AvatarFallback>{testimonial.initials}</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-text-primary">
            {testimonial.author}
          </p>
          <Text variant="small" className="truncate">
            {testimonial.title}
          </Text>
        </div>
      </footer>
    </button>
  );
}

function MarqueeRow({ testimonials, reverse = false, onSelect }: {
  testimonials: Testimonial[];
  reverse?: boolean;
  onSelect: (testimonial: Testimonial) => void;
}) {
  const doubled = [...testimonials, ...testimonials];
  return (
    <div className="group relative flex overflow-hidden" aria-hidden={reverse}>
      <div
        className={`flex gap-5 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'} group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.author}-${index}`}
            testimonial={testimonial}
            onClick={() => onSelect(testimonial)}
          />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const midpoint = Math.ceil(testimonialsData.testimonials.length / 2);
  const topRow = testimonialsData.testimonials.slice(0, midpoint);
  const bottomRow = testimonialsData.testimonials.slice(midpoint);

  return (
    <Section id="kudos">
      <SectionHeader
        title={testimonialsData.title}
        centered
        anchor="kudos"
      />

      <div className="-mx-4 flex flex-col gap-5 sm:-mx-6">
        <MarqueeRow testimonials={topRow} onSelect={setSelected} />
        <MarqueeRow testimonials={bottomRow} reverse onSelect={setSelected} />
      </div>

      <div className="mt-8 text-center">
        <a
          href={testimonialsData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-brand-blue"
        >
          Read all recommendations on LinkedIn
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <Dialog.Root open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm [animation:dialog-overlay-show_200ms_ease-out]" />
          <Dialog.Content
            className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-background-secondary p-6 shadow-2xl [animation:dialog-content-show_200ms_ease-out] sm:p-8"
            aria-describedby="testimonial-dialog-quote"
          >
            {selected && (
              <>
                <Dialog.Title className="sr-only">
                  Recommendation from {selected.author}
                </Dialog.Title>

                <Quote className="mb-4 h-8 w-8 text-brand-purple/40" />

                <blockquote
                  id="testimonial-dialog-quote"
                  className="text-base leading-relaxed text-text-secondary italic"
                >
                  &ldquo;{selected.quote}&rdquo;
                </blockquote>

                <footer className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                  <Avatar size="md">
                    <AvatarFallback>{selected.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-semibold text-text-primary">
                      {selected.author}
                    </p>
                    <Text variant="small">{selected.title}</Text>
                  </div>
                </footer>

                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="absolute top-4 right-4 rounded-md p-1 text-text-muted transition-colors hover:bg-background-tertiary hover:text-text-primary"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Section>
  );
}
