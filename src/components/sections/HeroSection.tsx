'use client';

import React from 'react';
import { heroData } from '@/data';
import { GradientText, Heading, Text, StarBorder, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TypingText, type TypingSegment } from '@/components/ui';
import { ArrowDown } from 'lucide-react';

const headlineSegments: TypingSegment[] = [
  { text: heroData.greeting },
  { text: heroData.suffix, wrapper: (children) => <GradientText>{children}</GradientText> },
  { text: ", I'm " },
  { text: heroData.name, wrapper: (children) => <GradientText gradient="animated">{children}</GradientText> },
];

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32">
      <Heading 
        as="h1" 
        className="mb-6"
      >
        <TypingText segments={headlineSegments} speed={70} delay={500} />
      </Heading>
      
      <Text className="max-w-3xl mx-auto mb-4">
        {heroData.tagline}
      </Text>
      
      <Text variant="small" className="mb-6 md:mb-10">
        {heroData.greetingNote}
      </Text>

      {heroData.ctaText && heroData.ctaHref && (
        <div className="flex flex-col items-center gap-8">
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <StarBorder as="a" href={heroData.ctaHref} color="#A093FF" speed="6s">
                    {heroData.ctaText}
                  </StarBorder>
                </TooltipTrigger>
                <TooltipContent>Jump to contact</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <a 
              href="#about" 
              className="text-text-muted hover:text-brand-blue transition-colors animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
      )}
    </section>
  );
}
