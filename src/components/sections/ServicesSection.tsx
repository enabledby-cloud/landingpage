'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { servicesData } from '@/data';
import { Section, SectionHeader } from '@/components/ui';
import { Cloud, DollarSign, Layers, Shield, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceConfig = [
  { icon: Cloud, color: '#3e8bff', gradient: 'linear-gradient(135deg, #ff5e84, #3e8bff)' },
  { icon: DollarSign, color: '#59f4b2', gradient: 'linear-gradient(135deg, #ff5e84, #59f4b2)' },
  { icon: Layers, color: '#ff8e26', gradient: 'linear-gradient(135deg, #ff5e84, #ff8e26)' },
  { icon: Shield, color: '#58A6FF', gradient: 'linear-gradient(135deg, #A093FF, #58A6FF)' },
];

export function ServicesSection() {
  return (
    <Section id="what-i-do">
      <SectionHeader
        title={servicesData.title}
        subtitle={servicesData.subtitle}
        centered
        anchor="what-i-do"
      />
      
      <div className="max-w-3xl mx-auto">
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-3"
        >
          {servicesData.services.map((service, index) => {
            const config = serviceConfig[index % serviceConfig.length];
            const IconComponent = config.icon;
            
            return (
              <Accordion.Item
                key={service.title}
                value={service.title}
                className={cn(
                    'group rounded-xl border border-border/50',
                    'bg-background-secondary/50 backdrop-blur-sm',
                    'data-[state=open]:border-border',
                    'data-[state=open]:bg-background-secondary/80',
                    'transition-all duration-200'
                  )}
                  style={{ '--service-color': config.color } as React.CSSProperties}
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      className={cn(
                        'flex w-full items-center gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4',
                        'text-left',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-inset rounded-xl',
                        '[&[data-state=open]>svg.chevron]:rotate-180'
                      )}
                    >
                      <div 
                        className="flex-shrink-0 p-2.5 rounded-lg"
                        style={{ backgroundColor: `${config.color}15` }}
                      >
                        <IconComponent className="w-5 h-5" style={{ color: config.color }} />
                      </div>
                      <span className="flex-1 font-semibold text-text-primary transition-colors duration-200 group-hover:text-(--service-color)">
                        {service.title}
                      </span>
                      <ChevronDown 
                        className="chevron w-5 h-5 text-text-muted transition-transform duration-200" 
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content
                    className={cn(
                      'overflow-hidden',
                      'data-[state=open]:animate-slideDown',
                      'data-[state=closed]:animate-slideUp'
                    )}
                  >
                      <div className="px-3 sm:px-5 pb-4 sm:pb-5 pt-0">
                      <div className="pl-[52px]">
                        <p className="text-text-secondary leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </div>
    </Section>
  );
}
