'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-brand-blue/10 text-brand-blue border border-brand-blue/30',
        pink:
          'bg-brand-pink/10 text-brand-pink border border-brand-pink/30',
        purple:
          'bg-brand-purple/10 text-brand-purple border border-brand-purple/30',
        outline:
          'border border-border text-text-secondary hover:border-brand-blue hover:text-brand-blue',
        success:
          'bg-status-success/10 text-status-success border border-status-success/30',
        warning:
          'bg-status-warning/10 text-status-warning border border-status-warning/30',
        error:
          'bg-status-error/10 text-status-error border border-status-error/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
