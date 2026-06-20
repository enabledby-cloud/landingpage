'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { testimonialsData } from '@/data';
import type { Testimonial } from '@/data/types';
import { Section, SectionHeader, Text, Avatar, AvatarFallback } from '@/components/ui';
import { Quote, ExternalLink, X } from 'lucide-react';

const FEATURED_COUNT = 6;

function TestimonialCard({ testimonial, onClick }: { testimonial: Testimonial; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex h-full flex-col rounded-xl border border-border bg-background-secondary/60 p-6 text-left backdrop-blur-xl transition-all duration-300 hover:border-brand-purple/50 hover:bg-background-secondary/80 hover:shadow-xl hover:shadow-brand-purple/5"
    >
      {/* Decorative quote icon */}
      <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-purple/10 transition-colors group-hover:text-brand-purple/20" />

      {/* Headline as hero */}
      {testimonial.headline && (
        <p className="mb-auto pr-8 text-lg font-semibold leading-snug text-text-primary transition-colors group-hover:text-brand-purple/90">
          &ldquo;{testimonial.headline}&rdquo;
        </p>
      )}

      {/* Author attribution */}
      <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
        <Avatar size="sm" className="ring-2 ring-background-tertiary transition-all group-hover:ring-brand-purple/30">
          <AvatarFallback>{testimonial.initials}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-text-primary">
            {testimonial.author}
          </p>
          <Text variant="small" className="text-text-muted">
            {testimonial.title}
          </Text>
        </div>
      </div>

      {/* Always visible click hint */}
      <span className="absolute bottom-3 right-4 flex items-center gap-1 text-xs font-medium text-text-muted transition-colors group-hover:text-brand-purple">
        <ExternalLink className="h-3 w-3" />
        Read full
      </span>
    </button>
  );
}

export function TestimonialsSection() {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const featured = testimonialsData.testimonials.slice(0, FEATURED_COUNT);

  return (
    <Section id="kudos">
      <SectionHeader
        title={testimonialsData.title}
        subtitle={testimonialsData.subtitle}
        centered
        anchor="kudos"
      />

      {/* 2-column grid with equal height cards */}
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((testimonial) => (
          <TestimonialCard
            key={testimonial.author}
            testimonial={testimonial}
            onClick={() => setSelected(testimonial)}
          />
        ))}
      </div>

      {/* LinkedIn link */}
      <div className="mt-8 text-center">
        <a
          href={testimonialsData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-brand-blue"
        >
          View all {testimonialsData.testimonials.length} recommendations on LinkedIn
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Modal for full quote — no layout shift */}
      <Dialog.Root open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
          <Dialog.Content
            className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-background-secondary p-6 shadow-2xl sm:p-8"
            aria-describedby="testimonial-dialog-quote"
          >
            {selected && (
              <>
                <Dialog.Title className="sr-only">
                  Recommendation from {selected.author}
                </Dialog.Title>

                <Quote className="mb-4 h-10 w-10 text-brand-purple/30" />

                {selected.headline && (
                  <p className="mb-4 text-xl font-semibold leading-snug text-brand-purple/90">
                    &ldquo;{selected.headline}&rdquo;
                  </p>
                )}

                <blockquote
                  id="testimonial-dialog-quote"
                  className="text-base leading-relaxed text-text-secondary"
                >
                  &ldquo;{selected.quote}&rdquo;
                </blockquote>

                <footer className="mt-6 flex items-center gap-4 border-t border-border pt-5">
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
                    className="absolute top-4 right-4 rounded-lg p-2 text-text-muted transition-colors hover:bg-background-tertiary hover:text-text-primary"
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
