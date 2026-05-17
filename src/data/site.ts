
import type { SiteConfig, NavLink, HeroData, AboutData, ContactData, FooterData, FeatureFlags } from './types';

export const featureFlags: FeatureFlags = {
  cookieConsent: false,
};

export const siteConfig: SiteConfig = {
 siteName: 'Marvyn Zalewski - Engineering Manager',
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
   "I'm a people-centric Engineering Leader and Cloud Strategist. I act as a force multiplier for organizations, helping them simplify complex systems, build resilient cloud platforms, and empower their engineering teams to do their best work.",
 greetingNote: '*a greeting from North Germany',
 ctaText: 'Get in touch',
 ctaHref: '#say-hi',

};

export const aboutData: AboutData = {
 title: 'My Approach',
 paragraphs: [
   "My leadership philosophy is simple: create an environment where talented engineers feel seen, heard, and trusted with full ownership. I'm not here to manage tasks but to be a force multiplier, clearing roadblocks and simplifying systems—whether they're code, infrastructure, or processes so teams can build things that matter.",
   "My journey has taken me from hands-on DevOps and security architecture to leading platform strategy. I thrive on solving the complex puzzles that live at the intersection of technology, people, and business goals. Whether it's modernizing a CI/CD pipeline, implementing a FinOps culture, or shaping a service reliability strategy, my commitment is the same: I deliver.",
 ],
 profileImage: '/profile.jpeg',

};

export const contactData: ContactData = {
 title: 'Say Hi',
 description:
   "Always up for conversations, ideas, or just talking tech over coffee. Let's connect.",
 buttonText: 'Email Me',
 email: 'mszalewski@ownpixel.com',

};

export const footerData: FooterData = {
 copyright: `${new Date().getFullYear()} Marvyn Zalewski`,
 madeWith: 'Made with ❤️ in Barcelona',
 builtWith: '',
};
