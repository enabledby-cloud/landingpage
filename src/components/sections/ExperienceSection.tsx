'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { experienceData, skillsData } from '@/data';
import { Section, SectionHeader, Card, Badge, Text } from '@/components/ui';
import { Briefcase, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ExperienceEntry, ExperienceRole } from '@/data/types';

// ─── Shared sub-components ──────────────────────────────────────────────────

function AchievementList({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
          <ChevronRight className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SkillTags({ skills }: { skills: string[] }) {
  if (skills.length === 0) return null;
  return (
    <div className="mt-5 pt-4 border-t border-border/40 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} variant="outline" className="text-xs">
          {skill}
        </Badge>
      ))}
    </div>
  );
}

// ─── Role block (sub-position within a company) ─────────────────────────────

function RoleBlock({ role }: { role: ExperienceRole }) {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap items-baseline gap-2 mb-2">
        <h4 className="font-semibold text-text-primary">{role.title}</h4>
        <span className="text-text-muted text-sm">{role.period}</span>
      </div>
      {role.description && (
        <Text variant="muted" className="mb-3">{role.description}</Text>
      )}
      <AchievementList items={role.achievements} />
    </div>
  );
}

// ─── Experience card ─────────────────────────────────────────────────────────

function ExperienceCard({ id, entry }: { id: string; entry: ExperienceEntry }) {
  const allRoles = [
    ...(entry.previousRole ? [entry.previousRole] : []),
    ...(entry.roles ?? []),
  ];

  return (
    <div id={id} className="scroll-mt-28 pb-10 last:pb-0">
      <Card variant="default" padding="default" className="group md:p-8">
        <h3 className="text-lg font-bold text-text-primary mb-1">{entry.title}</h3>
        <p className="mb-3">
          <span className="text-brand-blue font-medium">{entry.company}</span>
          <span className="text-text-muted text-sm"> · {entry.period}</span>
        </p>

        {entry.description && (
          <Text variant="muted" className="mb-4">{entry.description}</Text>
        )}

        <AchievementList items={entry.achievements} />

        {allRoles.map((role, idx) => (
          <RoleBlock key={idx} role={role} />
        ))}

        <SkillTags skills={entry.skills ?? []} />
      </Card>
    </div>
  );
}

// ─── Timeline sidebar navigation ─────────────────────────────────────────────

/** Extract a readable year from a period like "Jan 2024 - Present" → "2024". */
function parseYear(period: string): string {
  const match = period.match(/\d{4}/);
  return match?.[0] ?? period;
}

interface TimelineNavProps {
  entries: Array<{ key: string; company: string; period: string }>;
  activeKey: string;
  onSelect: (key: string) => void;
}

function TimelineNav({ entries, activeKey, onSelect }: TimelineNavProps) {
  return (
    <nav aria-label="Career timeline" className="hidden lg:flex lg:sticky lg:top-28 flex-col self-start">
      {entries.map(({ key, company, period }, idx) => {
        const active = key === activeKey;
        const last = idx === entries.length - 1;

        return (
          <div key={key} className="relative flex items-stretch">
            {/* Vertical connector */}
            {!last && <div className="absolute left-[9px] top-6 bottom-0 w-px bg-border/50" />}

            <button
              role="tab"
              aria-selected={active}
              onClick={() => onSelect(key)}
              className={cn(
                'group/nav relative flex items-start gap-3 py-3 pr-4 text-left rounded-md transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50',
                active ? 'text-text-primary' : 'text-text-muted hover:text-text-secondary',
              )}
            >
              {/* Dot */}
              <div className={cn(
                'relative z-10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300',
                active
                  ? 'border-brand-pink bg-brand-pink/20 scale-110'
                  : 'border-border bg-background-primary group-hover/nav:border-brand-pink/50',
              )}>
                <Briefcase className={cn(
                  'w-2.5 h-2.5 transition-colors',
                  active ? 'text-brand-pink' : 'text-text-muted group-hover/nav:text-brand-pink/70',
                )} />
              </div>

              {/* Label */}
              <div className="flex flex-col min-w-0">
                <span className={cn(
                  'text-sm font-medium leading-tight truncate max-w-[140px] transition-colors duration-200',
                  active && 'text-text-primary',
                )}>
                  {company}
                </span>
                <span className="text-xs text-text-muted mt-0.5">{parseYear(period)}</span>
              </div>
            </button>
          </div>
        );
      })}
    </nav>
  );
}

// ─── Competencies summary ────────────────────────────────────────────────────

function CompetenciesSummary() {
  return (
    <Card variant="gradient" padding="lg">
      <h3 className="text-lg font-bold text-text-primary mb-4">{skillsData.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillsData.categories.map((category) => (
          <div key={category.name}>
            <h4 className="text-xs font-semibold text-brand-purple uppercase tracking-wider mb-2">
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── Main section ────────────────────────────────────────────────────────────

export function ExperienceSection() {
  const experienceKeys = useMemo(() => Object.keys(experienceData), []);

  const entries = useMemo(
    () => experienceKeys.map((key) => ({ key, entry: experienceData[key] })),
    [experienceKeys],
  );

  const navEntries = useMemo(
    () => entries.map(({ key, entry }) => ({ key, company: entry.company, period: entry.period })),
    [entries],
  );

  const [activeKey, setActiveKey] = useState(experienceKeys[0]);
  const isScrollingRef = useRef(false);

  // Scroll-spy: highlight the timeline entry closest to the viewport center
  useEffect(() => {
    const observer = new IntersectionObserver(
      (observed) => {
        if (isScrollingRef.current) return;
        for (const oe of observed) {
          if (oe.isIntersecting) {
            setActiveKey(oe.target.id.replace('exp-', ''));
          }
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 },
    );

    for (const key of experienceKeys) {
      const el = document.getElementById(`exp-${key}`);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [experienceKeys]);

  // Smooth-scroll to a card when a timeline entry is clicked
  const handleTabSelect = useCallback((key: string) => {
    setActiveKey(key);
    const el = document.getElementById(`exp-${key}`);
    if (!el) return;

    isScrollingRef.current = true;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const timeout = setTimeout(() => { isScrollingRef.current = false; }, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Section id="career">
      <SectionHeader
        title="Career"
        subtitle="A decade of engineering leadership, cloud architecture, and security."
        centered
        anchor="career"
      />

      <div className="flex gap-8">
        {/* Sticky timeline sidebar (desktop only) */}
        <div className="hidden lg:block flex-shrink-0 w-44">
          <TimelineNav entries={navEntries} activeKey={activeKey} onSelect={handleTabSelect} />
        </div>

        {/* Experience cards + competencies */}
        <div className="flex-1 min-w-0">
          {entries.map(({ key, entry }) => (
            <ExperienceCard key={key} id={`exp-${key}`} entry={entry} />
          ))}
          <CompetenciesSummary />
        </div>
      </div>
    </Section>
  );
}
