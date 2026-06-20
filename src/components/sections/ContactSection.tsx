'use client';

import { contactData, siteConfig } from '@/data';
import { Section, SectionHeader, Button, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui';
import { Mail, Linkedin, FileText } from 'lucide-react';

export function ContactSection() {
  return (
    <Section id="say-hi">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          title={contactData.title}
          subtitle={contactData.description}
          centered
          anchor="say-hi"
        />

        <TooltipProvider delayDuration={300}>
          <div className="flex flex-wrap justify-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg" className="bg-background-secondary" asChild>
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    {contactData.buttonText}
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Opens in a new tab</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg" asChild>
                  <a href={`mailto:${contactData.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{contactData.email}</TooltipContent>
            </Tooltip>

            {siteConfig.cvUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href={siteConfig.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View My CV
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View my CV (opens in new tab)</TooltipContent>
              </Tooltip>
            )}
          </div>
        </TooltipProvider>
      </div>
    </Section>
  );
}
