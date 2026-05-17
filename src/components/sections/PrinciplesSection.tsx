'use client';

import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { principles } from '@/data';
import { ScaleIcon, SimplifyIcon, EnableIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

const iconMap = {
  Scale: ScaleIcon,
  Simplify: SimplifyIcon,
  Enable: EnableIcon,
} as const;

const HINT_DELAY_STEP_MS = 300;

export function PrinciplesSection() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Tooltip.Provider delayDuration={200}>
      <section className="py-6 md:py-8">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          {/* Compact horizontal principle bar */}
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <span className="text-text-muted text-sm hidden sm:inline">
              My principles:
            </span>
            
            <div className="flex items-center gap-1 md:gap-2 p-1.5 rounded-full bg-background-secondary/60 backdrop-blur-sm border border-border/50">
              {principles.map((principle, index) => {
                const IconComponent = iconMap[principle.icon];
                const isActive = activeIndex === index;
                return (
                  <React.Fragment key={principle.title}>
                    {index > 0 && (
                      <div className="w-px h-6 bg-border/50" />
                    )}
                    <Tooltip.Root
                      open={isActive || undefined}
                      onOpenChange={(open) => {
                        if (!open && isActive) return;
                      }}
                    >
                      <Tooltip.Trigger asChild>
                        <button
                          onClick={() => handleClick(index)}
                          className={cn(
                            'principle-hint group flex items-center gap-2 px-3 py-2 rounded-full',
                            'transition-all duration-200 ease-out',
                            'hover:bg-background-tertiary/80',
                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                            isActive && 'is-active bg-background-tertiary/80'
                          )}
                          style={{ 
                            '--ring-color': principle.color,
                            '--hint-delay': `${index * HINT_DELAY_STEP_MS}ms`,
                          } as React.CSSProperties}
                          aria-expanded={isActive}
                        >
                          <IconComponent 
                            width={18} 
                            height={18} 
                            color={principle.color}
                            className="transition-transform duration-200 group-hover:scale-110"
                          />
                          <span 
                            className="text-sm font-medium transition-colors"
                            style={{ color: principle.color }}
                          >
                            {principle.title}
                          </span>
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className={cn(
                            'z-50 max-w-[280px] px-4 py-3 rounded-lg',
                            'bg-background-secondary border border-border shadow-xl',
                            'text-sm text-text-secondary leading-relaxed',
                            'data-[state=delayed-open]:animate-fade-in',
                            'slide-in-from-bottom-2'
                          )}
                          sideOffset={8}
                          onPointerDownOutside={() => setActiveIndex(null)}
                        >
                          <p className="font-medium text-text-primary mb-1" style={{ color: principle.color }}>
                            {principle.title}
                          </p>
                          <p>{principle.description}</p>
                          <Tooltip.Arrow className="fill-background-secondary" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Tooltip.Provider>
  );
}
