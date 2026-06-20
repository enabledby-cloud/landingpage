'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TypingSegment {
  /** The text to type out */
  text: string;
  /** Optional wrapper component to apply around the typed text (e.g. GradientText) */
  wrapper?: (children: React.ReactNode) => React.ReactNode;
}

interface TypingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Array of text segments to type sequentially */
  segments: TypingSegment[];
  /** Delay between each character in ms */
  speed?: number;
  /** Initial delay before typing starts in ms */
  delay?: number;
  /** Whether to show a blinking cursor */
  showCursor?: boolean;
  /** Cursor character */
  cursor?: string;
}

export function TypingText({
  segments,
  speed = 70,
  delay = 400,
  showCursor = true,
  cursor = '|',
  className,
  ...props
}: TypingTextProps) {
  const totalLength = segments.reduce((sum, s) => sum + s.text.length, 0);
  const [charCount, setCharCount] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (charCount >= totalLength) {
        setDone(true);
        return;
      }
      setCharCount((c) => c + 1);
    }, charCount === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [charCount, totalLength, speed, delay]);

  // Build the visible content from segments
  const rendered: React.ReactNode[] = [];
  let charsLeft = charCount;
  for (let i = 0; i < segments.length; i++) {
    if (charsLeft <= 0) break;
    const segment = segments[i];
    const visibleChars = Math.min(charsLeft, segment.text.length);
    charsLeft -= visibleChars;
    const visibleText = segment.text.slice(0, visibleChars);

    if (segment.wrapper) {
      rendered.push(<React.Fragment key={i}>{segment.wrapper(visibleText)}</React.Fragment>);
    } else {
      rendered.push(<React.Fragment key={i}>{visibleText}</React.Fragment>);
    }
  }

  return (
    <span className={cn('inline', className)} {...props}>
      {rendered}
      {showCursor && (
        <span
          className={cn(
            'inline-block ml-0.5 text-brand-purple font-light',
            done && 'animate-pulse'
          )}
          aria-hidden="true"
        >
          {cursor}
        </span>
      )}
    </span>
  );
}
