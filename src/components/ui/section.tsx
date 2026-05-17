'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { Link as LinkIcon } from 'lucide-react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section ID for navigation */
  id?: string;
  /** Container max width */
  containerClass?: string;
  /** Full width without container */
  fullWidth?: boolean;
  /** Render as child element */
  asChild?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, id, containerClass, fullWidth = false, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'section';
    return (
      <Comp
        ref={ref}
        id={id}
        className={cn('py-10 md:py-16 lg:py-20', id && 'scroll-mt-20', className)}
        {...props}
      >
        {fullWidth ? (
          children
        ) : (
          <div className={cn('container mx-auto max-w-6xl px-4 sm:px-6', containerClass)}>
            {children}
          </div>
        )}
      </Comp>
    );
  }
);
Section.displayName = 'Section';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** When set, shows a link icon on hover that anchors to this id */
  anchor?: string;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, centered = true, anchor, ...props }, ref) => {
    const handleAnchorClick = (e: React.MouseEvent) => {
      if (!anchor) return;
      e.preventDefault();
      const href = `#${anchor}`;
      history.replaceState(null, '', href);
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div
        ref={ref}
        className={cn(
          'mb-8 md:mb-12',
          centered && 'text-center',
          className
        )}
        {...props}
      >
        <h2 className="group inline-flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
          {title}
          {anchor && (
            <a
              href={`#${anchor}`}
              onClick={handleAnchorClick}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-text-muted hover:text-brand-blue"
              aria-label={`Link to ${title} section`}
            >
              <LinkIcon className="w-5 h-5" />
            </a>
          )}
        </h2>
        {subtitle && (
          <p className={cn(
            'text-text-muted mt-3 text-lg',
            centered && 'max-w-2xl mx-auto'
          )}>
            {subtitle}
          </p>
        )}
        <div className={cn(
          'gradient-line h-0.5 w-24 mt-4',
          centered && 'mx-auto'
        )} />
      </div>
    );
  }
);
SectionHeader.displayName = 'SectionHeader';

export { Section, SectionHeader };
