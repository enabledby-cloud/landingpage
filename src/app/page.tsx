'use client';

import {
  HeroSection,
  AboutSection,
  ServicesSection,
  CaseStudiesSection,
  TestimonialsSection,
  ExperienceSection,
  ContactSection,
} from '@/components/sections';
import { Header, Footer } from '@/components/layout';
import { CookieConsent } from '@/components/common';
import { featureFlags } from '@/data';
import ParticleBackground from './components/ParticleBackground/Background';

function SectionDivider() {
  return <div className="section-divider max-w-4xl mx-auto" />;
}

export default function HomePage() {
  return (
    <>
      <ParticleBackground mouseEffectEnabled={true} />
      <Header />

      <main className="container mx-auto max-w-6xl px-4 sm:px-6 pt-20 md:pt-28">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <CaseStudiesSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ContactSection />
      </main>

      <Footer />
      {featureFlags.cookieConsent && <CookieConsent position="bottom" />}
    </>
  );
}