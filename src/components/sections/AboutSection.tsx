'use client';

import * as React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { aboutData, siteConfig, principles } from '@/data';
import { Section, SectionHeader, Text } from '@/components/ui';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui';
import { ScaleIcon, SimplifyIcon, EnableIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

const iconMap = {
  Scale: ScaleIcon,
  Simplify: SimplifyIcon,
  Enable: EnableIcon,
} as const;

const HOVER_OPEN_DELAY = 150;
const HOVER_CLOSE_DELAY = 100;

function PrincipleHoverCard({ principle, index }: { principle: typeof principles[0]; index: number }) {
  const IconComponent = iconMap[principle.icon];
  const [pinned, setPinned] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const hoverTimerRef = React.useRef<ReturnType<typeof setTimeout>>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const isOpen = pinned || hovered;

  const clearHoverTimer = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  const handlePointerEnter = () => {
    clearHoverTimer();
    hoverTimerRef.current = setTimeout(() => setHovered(true), HOVER_OPEN_DELAY);
  };

  const handlePointerLeave = () => {
    clearHoverTimer();
    hoverTimerRef.current = setTimeout(() => setHovered(false), HOVER_CLOSE_DELAY);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setPinned((prev) => !prev);
  };

  const handleDismiss = () => {
    setPinned(false);
    setHovered(false);
    clearHoverTimer();
  };

  const handlePointerDownOutside = (e: CustomEvent<{ originalEvent: PointerEvent }>) => {
    // Always prevent Radix's built-in dismiss — we manage open state ourselves
    e.preventDefault();
    // If the click was on the trigger, handleClick will manage the toggle
    if (triggerRef.current?.contains(e.detail.originalEvent.target as Node)) return;
    handleDismiss();
  };

  const handleFocusOutside = (e: Event) => {
    e.preventDefault();
    // Only dismiss if focus went somewhere other than the trigger
    if (triggerRef.current?.contains(document.activeElement)) return;
    handleDismiss();
  };

  React.useEffect(() => clearHoverTimer, []);
  
  return (
    <HoverCard.Root open={isOpen} onOpenChange={() => {}}>
      <HoverCard.Trigger asChild>
        <button
          ref={triggerRef}
          onClick={handleClick}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          className={cn(
            'principle-hint inline-flex items-center gap-1 px-1 -mx-1 rounded',
            'transition-all duration-200',
            'hover:bg-background-tertiary/60',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue',
            pinned && 'is-active bg-background-tertiary/60'
          )}
          style={{ '--hint-delay': `${index * 300}ms` } as React.CSSProperties}
          aria-expanded={pinned}
        >
          <IconComponent width={16} height={16} className="inline-block" />
          <span 
            className="font-semibold bg-clip-text text-transparent"
            style={{ backgroundImage: principle.gradient }}
          >
            {principle.title}
          </span>
        </button>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className={cn(
            'z-[100] w-[280px] px-4 py-3 rounded-xl',
            'bg-background-secondary border border-border shadow-2xl',
            'text-sm leading-relaxed',
            'data-[state=open]:animate-fade-in',
            'slide-in-from-bottom-2'
          )}
          sideOffset={8}
          side="top"
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onPointerDownOutside={handlePointerDownOutside}
          onFocusOutside={handleFocusOutside}
        >
          <div className="flex items-center gap-2 mb-2">
            <IconComponent width={20} height={20} />
            <span 
              className="font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: principle.gradient }}
            >
              {principle.title}
            </span>
          </div>
          <p className="text-text-secondary">{principle.description}</p>
          <HoverCard.Arrow className="fill-background-secondary" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

export function AboutSection() {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <Section id="about">
      <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-start max-w-4xl mx-auto">
        <div className="flex justify-center md:justify-start">
          <Avatar
            size="xl"
            className="ring-4 ring-border"
          >
            <AvatarImage
              src={aboutData.profileImage || siteConfig.profileImage}
              alt={siteConfig.authorName}
            />
            <AvatarFallback>{getInitials(siteConfig.authorName)}</AvatarFallback>
          </Avatar>
        </div>

        <div>
          <SectionHeader 
            title={aboutData.title}
            centered={false}
            anchor="about"
          />

          <div className="space-y-5">
            <Text>
              {aboutData.paragraphs[0]}
            </Text>
            
            <Text>
              I engineer the complete system by applying three principles:{' '}
              <PrincipleHoverCard principle={principles[0]} index={0} />,{' '}
              <PrincipleHoverCard principle={principles[1]} index={1} />, and{' '}
              <PrincipleHoverCard principle={principles[2]} index={2} />.
            </Text>
            
            {aboutData.paragraphs.slice(1).map((paragraph, index) => (
              <Text key={index}>
                {paragraph}
              </Text>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
