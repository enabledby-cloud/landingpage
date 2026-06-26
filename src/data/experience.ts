
import type { ExperienceData, SkillsData } from './types';

export const experienceData: ExperienceData = {
 awin: {
  title: 'Engineering Manager - Cloud Platform',
  company: 'Awin Global',
  period: 'Aug 2024 - Present',
  description:
    'Leading a cross-cultural Cloud Platform and DevOps organization across UK, Germany, Romania, and Spain. Responsible for cloud platform strategy, cloud landingzone infrastructure, CI/CD, observability, SRE, and FinOps. I am on a mission to build a resilient, cost-effective platform that accelerates the entire engineering organization.',
  achievements: [
    'Rebuilt the team from 6 to 12 engineers in 10 months after a restructure, filling skill gaps with a deliberate 1/5/6 junior-mid-senior mix while maintaining delivery and operational stability throughout.',
    'Established the FinOps function from scratch, achieving $84,000+ in monthly recurring savings within 6 months and reducing budget forecast variance from 20% to 3% through a structured cost planning process.',
    'Led the CI/CD platform modernisation and replacing Jenkins, Harbor, and Nexus with GitHub Actions and cloud-native tooling which cut new project initialization time by 16 hours and eliminating 10 weekly support tickets.',
    'Secured $150,000 in AWS MAP funding for a full datacenter-to-cloud migration by connecting the right stakeholders and reworking the vendor ARR model, which resulted in a signed contract within 7 months.',
    'Wrote and implemented the "You Build It, You Run It" operating model and a company-wide SRE strategy, clarifying ownership across all team types and standardizing incident management ahead of a security audit.',
    'Drove the observability strategy, standardizing on OTEL and Vector to reduce complexity and cost across 15+ engineering teams.',
    'Raised the Peakon engagement score from 7.2 to 8.3 and the DX score from 62 to 73 within one year.',
  ],
  skills: ['Engineering Management', 'AWS', 'FinOps', 'SRE Strategy', 'CI/CD', 'Platform Engineering', 'Cloud Migration', 'Team Topologies'],
  previousRole: {
    title: 'Cloud DevOps Manager',
    period: 'Jan 2024 - Aug 2024',
    description:
      'Restructured the team and its operating model to remove systemic bottlenecks and clarify ownership using Team Topologies.',
    achievements: [
      'Analyzed operational bottlenecks, defined a new department charter, and led a re-organization into distinct DevOps, Cloud Platform, and IT Ops teams within 7 months.',
      'Coached 3 senior DevOps engineers across Germany and Italy to successfully conclude the AWS landing zone for organizational adoption.',
      'Replaced Docker Desktop with open-source tooling, improving developer experience and achieving $18,000 in annual savings.',
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
       title: 'Security Architect',
       period: 'Jul 2022 - Jan 2024',
       description:
         'Built and scaled a self-service Secure Product Lifecycle (SPLC) for AVIV\'s cloud-native products.',
       achievements: [
         'Launched the SPLC and matured it into a self-service program (dynamic questionnaire and standardized risk reports) covering 50+ assessments in 9 months, uncovering 80+ unique risks.',
         'Reduced recurring findings by prioritizing platform-level fixes with preventative SCPs, automated responses, and notifications.',
         'Established KPIs (cycle time, completion rates, developer satisfaction) and used them to drive iterative improvements and leadership reporting.',
         'Raised security awareness across Product & Tech through presentations, architecture guidelines, and a newsletter embedded in team rituals.',
       ],
     },
     {
       title: 'Security Officer',
       period: 'Feb 2022 - Jun 2022',
       description:
         'Delivered merger integration and AWS security foundations that improved control coverage and audit readiness.',
       achievements: [
         'Ran the security integration stream for the German businesses, aligned controls to CIS and group standards, and facilitated internal audits.',
         'Developed the security stream for the AWS landing zone covering IAM Identity Center, Transit Gateway hub-and-spoke network, and centralized security logging.',
         'Fortified the AWS security posture via SCPs, Prowler, and AWS Security Hub.',
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
         'Pioneered a modern DevOps culture and rebuilt the main product with an AWS-native architecture.',
       achievements: [
         'Modernized legacy config management by replacing Puppet with modular Ansible and introducing a Docker platform based on DC/OS Mesosphere.',
         'Managed and automated 3 datacenters with 50+ Linux and Windows physical servers (KVM, OpenNebula, Hyper-V).',
         'Engineered GitLab CI/CD with Terraform (later CDKTF), including ephemeral stacks to accelerate testing and releases.',
         'Shipped the AWS-native MVP in 8 months and completed the feature set 9 months later.',
       ],
     },
   ],
 },
 early: {
   title: 'IT Support & Systems Technician',
   company: 'Goodgame Studios / tectumHOME',
   period: 'Sep 2011 - Jul 2015',
   description:
     'Provided 2nd and 3rd level IT support for 800+ users in a fast-growing gaming company while managing Windows Server infrastructure and completing an apprenticeship in IT Systems Electronics.',
   achievements: [
     'Managed Windows Server environments, Active Directory, and Google Workspace administration.',
     'Automated routine tasks using PowerShell and AutoIT scripts to improve operational efficiency.',
     'Planned and executed smart home projects including Crestron control unit programming.',
   ],
   skills: ['Windows Server', 'Active Directory', 'PowerShell', 'Networking', 'Crestron'],
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
       'Systemic Thinking',
       'Team Building & Coaching',
       'Organizational Design',
       'Stakeholder Management',
     ],
   },
   {
     name: 'Platform Engineering',
     skills: [
       'Developer Experience (DevEx)',
       'Cloud Cost Management (FinOps)',
       'Service Reliability (SRE)',
       'Observability (Datadog, OTEL, Vector)',
       'Internal Developer Platforms',
       'Team Topologies',
     ],
   },
   {
     name: 'Cloud & Infrastructure',
     skills: [
       'AWS (Advanced)',
       'Terraform/CDKTF',
       'Docker',
       'CI/CD (GitLab, GitHub Actions)',
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
