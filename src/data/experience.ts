
import type { ExperienceData, SkillsData } from './types';

export const experienceData: ExperienceData = {
 awin: {
   title: 'Engineering Manager, Cloud Platform',
   company: 'Awin Global',
   period: 'Jul 2024 - Present',
   description:
     'Leading a high-performing, cross-cultural cloud platform and DevOps team focused on simplifying infrastructure, improving developer experience, and driving a cost-conscious and operationally excellent engineering culture. I define the platform strategy, manage the roadmap with OKRs, and act as a force multiplier for my team.',
   achievements: [
     'Spearheaded a FinOps transformation that exceeded its goal, delivering over $1M in annualized savings and establishing a crucial partnership with the finance department.',
     'Authored and executed a comprehensive Service Reliability Engineering (SRE) strategy, delivering an auditable incident management framework and a clear roadmap for improving service reliability.',
     'Led the migration to AWS Identity Center, eliminating manual access management, resolving auth issues, and significantly improving the company’s security posture.',
     'Owned the modernization of a legacy CI/CD system into a cloud-native solution, reducing service onboarding time by over 85% (from 8+ hours to <1 hour) and improving stability for 200+ engineers.'
   ],
   skills: ['Engineering Management', 'AWS', 'FinOps', 'SRE Strategy', 'Team Topologies', 'Roadmapping'],
   previousRole: {
     title: 'Cloud DevOps Manager',
     period: 'Jan 2024 - Jul 2024',
     description:
       'Inherited and restructured a team with conflicting ownership, transforming it into a cohesive Cloud Platform team. Over 7 months, I resolved critical operational bottlenecks, defined a clear mission based on Team Topologies, and established the charter and roadmap that laid the foundation for the future platform organization.',
     achievements: [
       'Resolved a critical platform ownership conflict by applying Team Topologies principles, which eliminated ticket ping-pong and contributed to an 11-point increase in the developer experience score.',
       'Hired a key senior engineer and empowered them to lead the FinOps transformation, demonstrating the multiplier effect of investing in high-caliber talent.',
       'Authored the new team charter and roadmap that led directly to the creation of the permanent Cloud Platform team and the hiring of two additional managers.',
     ],
   },
 },
 aviv: {
   title: 'Security Architect & Security Officer',
   company: 'AVIV Group',
   period: 'Feb 2022 - Jan 2024',
   description:
     'Recruited to establish and lead the security function for a newly merged group. I designed the cloud security architecture from the ground up and pioneered the group-wide Secure Product Lifecycle (SPLC).',
   achievements: [],
   skills: ['Cloud Security Architecture', 'SPLC Design', 'AWS Security Hub', 'Threat Modeling', 'NIST/ISO'],
   roles: [
     {
       title: 'Security Officer',
       period: 'Mar 2023 - Jan 2024',
       description:
         'Pioneered and scaled the group-wide Secure Product Lifecycle (SPLC). I acted as the central security authority, managing security integration and driving a data-driven risk reduction strategy.',
       achievements: [
         'Established and scaled the SPLC to support over 50 application security assessments in just 9 months, uncovering 80+ unique risks.',
         'Implemented a group-wide, data-driven strategy to prioritize and remediate risks, focusing on platform-level fixes over temporary solutions.',
         'Provided critical guidance, threat models, and design reviews to engineering teams across the entire organization.',
       ],
     },
     {
       title: 'Security Architect',
       period: 'Feb 2022 - Feb 2023',
       description:
         'Architected and built a greenfield, multi-account AWS security foundation to support new whitelabel products. My role was to create a secure, scalable, and resilient cloud environment from first principles.',
       achievements: [
         'Designed and deployed a robust, multi-account AWS security foundation, establishing a secure baseline for all future product development.',
         'Hardened the cloud environment by implementing preventative guardrails (SCPs), a strict RBAC model, and detective scanning capabilities.',
         'Engineered and centralized the security monitoring and alerting strategy using AWS Security Hub and custom tooling.',
       ],
     },
   ],
 },
 immowelt: {
   title: 'Cyber Security Specialist & DevOps Engineer',
   company: 'immowelt',
   period: 'Aug 2015 - Jun 2022',
   description: '',
   achievements: [],
   skills: ['Terraform/CDKTF', 'Kubernetes', 'Docker', 'GitLab CI/CD', 'Ansible', 'Python'],
   roles: [
     {
       title: 'Cyber Security Specialist',
       period: 'Oct 2021 - Jun 2022',
       description:
         'Established the company\'s first cybersecurity function from the ground up, integrating "Security and Privacy by Design" principles into the development lifecycle.',
       achievements: [
         'Improved cloud security posture by developing custom scripts and leveraging Prowler for automated scanning across 100+ AWS accounts.',
         'Established a NIST-based maturity model for continuous improvement and an ISO-aligned incident response process.',
         'Drove security culture by designing and leading a company-wide Capture-The-Flag (CTF) competition for all engineering teams.',
       ],
     },
     {
       title: 'DevOps Engineer',
       period: 'Aug 2015 - Sep 2021',
       description:
         'Championed a "You build it, you run it" culture and played a key, cross-functional role in rebuilding the company\'s flagship product on AWS.',
       achievements: [
         'Led a CI/CD modernization effort that reduced service onboarding time from over 8 hours to less than 1 hour and eliminated manual deployment interventions.',
         'Drove the modernization of configuration management, migrating a monolithic Puppet setup to a highly modular Ansible infrastructure.',
         'Contributed across all phases of development (backend, frontend, infrastructure), using Java, Python, TypeScript, Angular, and React.',
       ],
     },
   ],
 },
 early: {
   title: 'IT Support & Systems Technician',
   company: 'Goodgame Studios / tectumHOME',
   period: 'Sep 2011 - Jul 2015',
   description:
     'Developed foundational skills in IT systems, networking, and project execution. Provided 1st, 2nd, and 3rd level technical support in a fast-paced environment and contributed to projects focused on Linux and live event technology.',
   achievements: [
     'Planned and executed smart home projects, including hardware installation and programming of Crestron control units.',
     'Administered clients and applications, created technical documentation, and enabled company-wide software deployments.',
   ],
   skills: ['Linux', 'Networking', 'IT Support', 'Crestron'],
 },

};

export const skillsData: SkillsData = {
 title: 'Core Competencies',
 categories: [
   {
     name: 'Leadership & Strategy',
     skills: [
       'People-Centric Leadership',
       'Engineering Management',
       'Team Building & Coaching',
       'OKRs & Roadmapping',
       'Agile/Scrumban',
       'Stakeholder Management',
     ],
   },
   {
     name: 'Platform Engineering',
     skills: [
       'Developer Experience (DevEx)',
       'Cloud Cost Management (FinOps)',
       'Service Reliability (SRE)',
       'Observability (Datadog)',
       'Internal Developer Platforms',
       'Team Topologies',
     ],
   },
   {
     name: 'Cloud & Infrastructure',
     skills: [
       'AWS (Advanced)',
       'Terraform/CDKTF',
       'Kubernetes & Docker',
       'CI/CD (GitLab, GitHub Actions)',
       'Infrastructure as Code (IaC)',
       'Ansible',
     ],
   },
   {
     name: 'Security',
     skills: [
       'Cloud Security Architecture',
       'Secure Product Lifecycle (SPLC)',
       'Threat Modeling',
       'AWS Security Hub',
       'NIST/ISO Frameworks',
       'Identity & Access Management',
     ],
   },
 ],

};
