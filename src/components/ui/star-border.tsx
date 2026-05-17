'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface StarBorderProps {
  as?: React.ElementType;
  color?: string;
  speed?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

/**
 * Animated border effect with a star-like moving dot that drags color behind it.
 *
 * Uses a rotating conic-gradient behind the content. The inner div masks
 * the center, so only the thin border area shows the rotating color trail.
 */
export function StarBorder({
  as: Component = 'button',
  className,
  color = 'white',
  speed = '6s',
  children,
  ...props
}: StarBorderProps) {
  return (
    <Component
      className={cn(
        'relative inline-flex items-center justify-center rounded-md p-[1px]',
        'overflow-hidden transition-all duration-300',
        className
      )}
      style={
        {
          '--star-color': color,
          '--star-speed': speed,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Star 1 — clockwise */}
      <div
        className="absolute inset-0 overflow-hidden rounded-md"
        aria-hidden="true"
      >
        <div className="absolute inset-[-100%] animate-star-spin"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, var(--star-color) 5%, transparent 15%, transparent 100%)`,
            animationDuration: speed,
          }}
        />
      </div>
      {/* Star 2 — counter-clockwise (mirrored via scaleX) */}
      <div
        className="absolute inset-0 overflow-hidden rounded-md"
        style={{ transform: 'scaleX(-1)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-[-100%] animate-star-spin"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, var(--star-color) 5%, transparent 15%, transparent 100%)`,
            animationDuration: speed,
          }}
        />
      </div>

      {/* Inner content area — masks center so only border glow shows */}
      <div className="relative z-10 bg-background-secondary rounded-[5px] px-6 py-2.5 text-sm font-medium text-text-primary inline-flex items-center gap-2 w-full justify-center">
        {children}
      </div>
    </Component>
  );
}
