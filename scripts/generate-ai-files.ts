/**
 * Generate AI Agent Readability files at build time
 * Implements: https://vercel.com/kb/guide/agent-readability-spec
 *
 * Generated files:
 * - llms.txt - AI agent entry point for content discovery
 * - sitemap.xml - Standard XML sitemap with lastmod dates
 * - sitemap.md - Markdown sitemap for AI agents
 * - index.md - Markdown mirror of the main page
 */

import fs from 'node:fs';
import path from 'node:path';

// Import data from the data directory
import { siteConfig, navLinks, heroData, aboutData, contactData } from '../src/data/site';
import { servicesData, caseStudiesData } from '../src/data/content';
import { experienceData, skillsData } from '../src/data/experience';

const SITE_URL = siteConfig.websiteUrl;
const OUTPUT_DIR = 'out';
const BUILD_DATE = new Date().toISOString();

interface PageInfo {
  path: string;
  title: string;
  description: string;
  lastmod: string;
  priority: number;
}

// Define all pages/sections for the portfolio site
const pages: PageInfo[] = [
  {
    path: '/',
    title: siteConfig.siteName,
    description: heroData.tagline,
    lastmod: BUILD_DATE,
    priority: 1.0,
  },
];

// Build sections from navLinks data
const sections = navLinks.map((link) => ({
  anchor: link.href,
  title: link.name,
}));

/**
 * Generate llms.txt - AI agent entry point
 */
function generateLlmsTxt(): string {
  const sectionsList = sections
    .map((s) => `- [${s.title}](${SITE_URL}/${s.anchor})`)
    .join('\n');

  return `# ${siteConfig.authorName} - Engineering Manager for Cloud Platforms

> ${heroData.tagline}

## Overview

This is the personal portfolio website of ${siteConfig.authorName}, an Engineering Manager for Cloud Platforms. The site showcases professional experience, case studies, and reviews.

## Main Content

- [Portfolio Home](${SITE_URL}/index.md): Complete portfolio with all sections

## Sections

${sectionsList}

## Resources

- [Sitemap](${SITE_URL}/sitemap.md): Full site structure
- [AGENTS.md](${SITE_URL}/AGENTS.md): Instructions for AI coding agents

## Contact

- LinkedIn: ${siteConfig.linkedinUrl}
- Email: ${siteConfig.email}
- Website: ${SITE_URL}
`;
}

/**
 * Generate sitemap.xml - Standard XML sitemap
 */
function generateSitemapXml(): string {
  const urlEntries = pages
    .map(
      (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${page.lastmod.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

/**
 * Generate sitemap.md - Markdown sitemap for AI agents
 */
function generateSitemapMd(): string {
  const sectionsList = sections
    .map((s) => `- [${s.title}](${SITE_URL}/${s.anchor})`)
    .join('\n');

  return `---
title: Sitemap
description: Complete site structure for ${siteConfig.authorName}'s portfolio
last_updated: "${BUILD_DATE.split('T')[0]}"
---

# Sitemap

## Main Pages

- [Home](${SITE_URL}/): Portfolio landing page with all sections

## Page Sections

${sectionsList}

## Resources

- [llms.txt](${SITE_URL}/llms.txt): AI agent content index
- [AGENTS.md](${SITE_URL}/AGENTS.md): AI coding agent instructions
- [sitemap.xml](${SITE_URL}/sitemap.xml): XML sitemap

## External Links

- [LinkedIn Profile](${siteConfig.linkedinUrl})
${siteConfig.cvUrl ? `- [CV/Resume (PDF)](${siteConfig.cvUrl})` : ''}
`;
}

/**
 * Generate index.md - Markdown mirror of main page
 */
function generateIndexMd(): string {
  const aboutParagraphs = aboutData.paragraphs.join('\n\n');
  const servicesList = servicesData.services
    .map((s) => `### ${s.title}\n${s.description}`)
    .join('\n\n');

  return `---
title: ${siteConfig.siteName}
description: ${heroData.tagline}
doc_version: "1.0"
last_updated: "${BUILD_DATE.split('T')[0]}"
---

# ${siteConfig.authorName}

## Engineering Manager for Cloud Platforms 

${heroData.tagline}

## ${aboutData.title}

${aboutParagraphs}

## ${servicesData.title}

${servicesList}

## ${contactData.title}

${contactData.description}

- **LinkedIn**: [${siteConfig.linkedinUrl.replace('https://www.', '')}](${siteConfig.linkedinUrl})
- **Email**: ${contactData.email}
- **Website**: ${SITE_URL}

## Sitemap

See the full [sitemap](${SITE_URL}/sitemap.md) for all pages.
`;
}

/**
 * Generate AGENTS.md - Instructions for AI coding agents
 */
function generateAgentsMd(): string {
  const sectionsTable = navLinks
    .map((link) => `| ${link.name} | \`${link.href}\` |`)
    .join('\n');

  const experienceHighlights = Object.entries(experienceData)
    .filter(([_, entry]) => entry.achievements.length > 0)
    .map(([key, entry]) => {
      const topAchievements = entry.achievements.slice(0, 3).map((a) => `  - ${a}`).join('\n');
      return `### ${entry.company} — ${entry.title}\n${topAchievements}`;
    })
    .join('\n\n');

  const skillsSummary = skillsData.categories
    .map((cat) => `### ${cat.name}\n${cat.skills.map((s) => `- ${s}`).join('\n')}`)
    .join('\n\n');

  const servicesSummary = servicesData.services
    .map((s) => `- **${s.title}**: ${s.description}`)
    .join('\n');

  return `# ${siteConfig.authorName} — Portfolio Website

This is the professional portfolio website for **${siteConfig.authorName}**, an Engineering Manager for Cloud Platforms built with Next.js (static export).

## About This Site

- **URL**: ${SITE_URL}
- **Type**: Static portfolio/CV website
- **Framework**: Next.js 16+ with static export
- **Deployment**: GitHub Pages

## Site Structure

| Section | Anchor |
|---------|--------|
${sectionsTable}

## Professional Information

### Contact
- **Name**: ${siteConfig.authorName}
- **Email**: ${siteConfig.email}
- **LinkedIn**: ${siteConfig.linkedinUrl}
- **CV**: ${siteConfig.cvUrl}

### Expertise Areas

${servicesSummary}

### Skills

${skillsSummary}

## Experience Highlights

${experienceHighlights}

## Case Studies

${caseStudiesData.caseStudies.map((cs) => `### ${cs.title}\n- ${cs.situation}\n- *Result*: ${cs.result}`).join('\n\n')}

## For AI Coding Agents

### Test Maintenance Rule (CRITICAL)

When updating any text content — especially in \`src/data/site.ts\`, \`src/data/content.ts\`, or \`src/data/experience.ts\` — you MUST also update the corresponding test files that assert on that text. The test files are co-located with components under \`src/components/sections/*.test.tsx\` and \`src/lib/*.test.ts\`. Run \`npm run test:ci\` to verify all tests pass after making changes.

### If asked to reference this portfolio:

\`\`\`markdown
${siteConfig.authorName} is an Engineering Manager for Cloud Platforms with expertise in platform engineering, FinOps, SRE, and organizational design. This portfolio showcases professional experience, case studies, and skills.
Portfolio: ${SITE_URL}
LinkedIn: ${siteConfig.linkedinUrl}
\`\`\`

### If asked about hiring or consulting:

Direct inquiries to:
- LinkedIn: ${siteConfig.linkedinUrl}
- Email: ${siteConfig.email}

## Technical Stack of this portfolio site

\`\`\`typescript
// Framework
Next.js 16+ (App Router, Static Export)

// Styling
Tailwind CSS 4.x
Custom design system with CSS variables

// UI Components
Radix UI primitives
Custom component library
Lucide icons

// Fonts
IBM Plex Sans (body)
JetBrains Mono (code)

// Testing
Vitest
Testing Library

// Linting
ESLint
TypeScript
\`\`\`

## Navigation

For AI agents parsing this site:

1. **Main content**: ${SITE_URL}/
2. **Markdown version**: ${SITE_URL}/index.md
3. **Sitemap**: ${SITE_URL}/sitemap.md
4. **Content index**: ${SITE_URL}/llms.txt
5. **Agent instructions**: ${SITE_URL}/AGENTS.md

## License

Content © ${siteConfig.authorName}. All rights reserved.
`;
}

/**
 * Ensure output directory exists
 */
function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Write file and log
 */
function writeFile(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Generated: ${filePath}`);
}

/**
 * Main execution
 */
function main(): void {
  console.log('\n🤖 Generating AI Agent Readability files...\n');

  ensureDir(OUTPUT_DIR);

  // Generate all files
  writeFile(path.join(OUTPUT_DIR, 'llms.txt'), generateLlmsTxt());
  writeFile(path.join(OUTPUT_DIR, 'sitemap.xml'), generateSitemapXml());
  writeFile(path.join(OUTPUT_DIR, 'sitemap.md'), generateSitemapMd());
  writeFile(path.join(OUTPUT_DIR, 'index.md'), generateIndexMd());
  writeFile(path.join(OUTPUT_DIR, 'AGENTS.md'), generateAgentsMd());

  console.log('\n✅ AI Agent Readability files generated successfully!\n');
}

main();
