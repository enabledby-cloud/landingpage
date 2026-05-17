/**
 * Type definitions for portfolio/CV content
 */

// Feature flags
export interface FeatureFlags {
  cookieConsent: boolean;
}

// Site configuration
export interface SiteConfig {
  siteName: string;
  authorName: string;
  linkedinUrl: string;
  email: string;
  profileImage: string;
  githubUrl?: string;
  twitterUrl?: string;
  websiteUrl: string;
  cvUrl?: string;
}

// Navigation
export interface NavLink {
  name: string;
  href: string;
}

// Hero section
export interface HeroData {
  greeting: string;
  suffix: string;
  name: string;
  tagline: string;
  greetingNote: string;
  ctaText?: string;
  ctaHref?: string;
}

// Principles/Values
export interface Principle {
  icon: 'Scale' | 'Simplify' | 'Enable';
  title: string;
  description: string;
  color: string;
  gradient?: string;
}

// About section
export interface AboutData {
  title: string;
  paragraphs: string[];
  profileImage?: string;
}

// Services
export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface ServicesData {
  title: string;
  subtitle: string;
  services: Service[];
}

// Case Studies
export interface CaseStudy {
  title: string;
  subtitle: string;
  tags: string[];
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface CaseStudiesData {
  title: string;
  subtitle: string;
  caseStudies: CaseStudy[];
}

// Testimonials
export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  initials: string;
  avatarUrl?: string;
}

export interface TestimonialsData {
  title: string;
  linkedinUrl: string;
  testimonials: Testimonial[];
}

// Experience/CV
export interface ExperienceRole {
  title: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills?: string[];
  previousRole?: ExperienceRole;
  roles?: ExperienceRole[];
}

export interface ExperienceData {
  [key: string]: ExperienceEntry;
}

// Skills
export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  title: string;
  categories: SkillCategory[];
}

// Contact
export interface ContactData {
  title: string;
  description: string;
  buttonText: string;
  email: string;
}

// Footer
export interface FooterData {
  copyright: string;
  madeWith?: string;
  inspiration?: string;
  inspirationLinkText?: string;
  inspirationLinkHref?: string;
  builtWith: string;
}


