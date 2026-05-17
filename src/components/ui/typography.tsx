'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Gradient text component for brand emphasis
const gradientTextVariants = cva(
  'bg-clip-text text-transparent bg-gradient-to-r inline-block pb-[0.15em]',
  {
    variants: {
      gradient: {
        default: 'from-brand-pink via-brand-purple to-brand-blue',
        pink: 'from-brand-pink to-brand-purple',
        blue: 'from-brand-purple to-brand-blue',
        accent: 'from-brand-pink to-brand-blue',
        animated: '',
      },
    },
    defaultVariants: {
      gradient: 'default',
    },
  }
);

interface GradientTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof gradientTextVariants> {
  asChild?: boolean;
}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, gradient, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    const isAnimated = gradient === 'animated';
    return (
      <Comp
        ref={ref}
        className={cn(
          isAnimated ? 'gradient-text-animate' : gradientTextVariants({ gradient }),
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
GradientText.displayName = 'GradientText';

// Heading components with consistent styling
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asChild?: boolean;
}

const headingSizes = {
  h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter',
  h2: 'text-3xl md:text-4xl font-bold tracking-tight',
  h3: 'text-2xl font-bold tracking-tight',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-semibold',
  h6: 'text-base font-semibold',
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = 'h2', asChild = false, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : Tag;
    return (
      <Comp
        ref={ref}
        className={cn(
          headingSizes[Tag],
          'text-text-primary',
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Heading.displayName = 'Heading';

// Paragraph with consistent styling
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'muted' | 'small';
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = 'default', asChild = false, children, ...props }, ref) => {
    const variants = {
      default: 'text-text-secondary text-base md:text-lg leading-relaxed',
      muted: 'text-text-muted text-sm',
      small: 'text-text-muted text-xs',
    };

    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Text.displayName = 'Text';

// Code/Monospace text
interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'code';
    return (
      <Comp
        ref={ref}
        className={cn(
          'font-mono text-sm bg-background-tertiary px-1.5 py-0.5 rounded text-brand-purple',
          className
        )}
        {...props}
      />
    );
  }
);
Code.displayName = 'Code';

export { GradientText, Heading, Text, Code, gradientTextVariants };
