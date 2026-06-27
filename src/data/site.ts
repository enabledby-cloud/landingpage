import type { SiteConfig, NavLink, HeroData, AboutData, ContactData, FooterData, FeatureFlags } from './types';

export const featureFlags: FeatureFlags = {
  cookieConsent: false,
};

export const siteConfig: SiteConfig = {
  siteName: 'Marvyn Zalewski - Engineering Manager for Cloud Platforms',
  authorName: 'Marvyn Zalewski',
  linkedinUrl: 'https://www.linkedin.com/in/marvyn-zalewski',
  email: 'mszalewski@ownpixel.com',
  profileImage: '/profile.jpeg',
  websiteUrl: 'https://enabledby.cloud',
  cvUrl: 'https://github.com/enabledby-cloud/cv/blob/cv-pdf/Marvyn-Stephano_Zalewski_CV.pdf',
};

export const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'What I Do', href: '#what-i-do' },
  { name: 'Results', href: '#results' },
  { name: 'Career', href: '#career' },
  { name: 'Kudos', href: '#kudos' },
  { name: 'Say Hi', href: '#say-hi' },
];

export const heroData: HeroData = {
  greeting: 'Moin',
  suffix: '*',
  name: 'Marvyn',
  tagline:
    "I'm on a mission to build an empowering developer experience, so engineers can focus on shipping and operating great products; faster, more reliable, efficient, and secure.",
  greetingNote: '*a greeting from North Germany',
  ctaText: 'Explore My Work',
  ctaHref: '#results',
};

export const aboutData: AboutData = {
  title: 'My Approach',
  paragraphs: [
    'My principles are simple: remove every obstacle between engineers and shipping great products. I build high-trust, autonomous teams and invest in the platforms, tooling, and culture that make this possible.',
    'With a background spanning DevOps, security architecture, and cloud platform strategy, I connect technical solutions to business outcomes. I specialize in creating tangible results through FinOps, modern and AI-native platform engineering, and organizational design using frameworks like Team Topologies.',
  ],
  profileImage: '/profile.jpeg',
};

export const contactData: ContactData = {
  title: 'Say Hi',
  description:
    "This is my professional showcase. I'm always open to connecting over shared interests in platform engineering, leadership, or just good tech and coffee conversations.",
  buttonText: 'Connect on LinkedIn',
  email: 'mszalewski@ownpixel.com',
};

export const footerData: FooterData = {
  copyright: `${new Date().getFullYear()} Marvyn Zalewski`,
  madeWith: 'Made with ❤️ in Barcelona',
  builtWith: '',
};
