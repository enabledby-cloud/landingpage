
import type { Principle, ServicesData, CaseStudiesData, TestimonialsData } from './types';

export const principles: Principle[] = [
 {
   icon: 'Scale',
   title: 'Scale',
   description: 'Designing resilient, people-centric systems where cloud-native technology and autonomous teams grow with your business.',
   color: '#3e8bff',
   gradient: 'linear-gradient(135deg, #ff5e84, #3e8bff)',
 },
 {
   icon: 'Simplify',
   title: 'Simplify',
   description: 'Reasoning through complexity to create elegant, maintainable, and cost-effective solutions that are simple to operate.',
   color: '#59f4b2',
   gradient: 'linear-gradient(135deg, #ff5e84, #59f4b2)',
 },
 {
   icon: 'Enable',
   title: 'Enable',
   description: 'Fostering autonomous teams with the tools, processes, and high-trust culture needed to achieve peak performance.',
   color: '#ff8e26',
   gradient: 'linear-gradient(135deg, #ff5e84, #ff8e26)',
 },
];

export const servicesData: ServicesData = {
 title: 'What I Do',
 subtitle:
   'Everything I do goes into one direction: an enabled and empowered developer experience from product ideation to its retirement.',
 services: [
   {
     title: 'Platform Engineering and Developer Enablement',
     description:
       'I treat the platform as a product to accelerate the entire engineering organization. By investing in CI/CD, observability, and data-driven DevEx improvements, I reduce friction and empower product teams to deliver value to customers faster and more frequently.',
   },
   {
     title: 'FinOps and Cost Optimization',
     description:
       "I translate cloud spend into business metrics that everyone can understand. By building a culture of financial accountability and partnering with Finance, I deliver recurring savings and improve budget predictability.",
   },
   {
     title: 'Cloud and DevOps',
     description:
       'I design and implement scalable operating models using frameworks like Team Topologies. By clarifying ownership and creating clear communication paths, I transform siloed groups into a high-performing, collaborative engineering system where teams own their services end-to-end.',
   },
   {
     title: 'Cloud Security',
     description:
       'I embed security into the development lifecycle, enabling teams with the guardrails and tools they need to build secure products by default. I implement comprehensive security architectures, including Secure Product Lifecycle (SPLC) and modernized IAM, to harden cloud environments to withstand both evolving threats and zero-day vulnerabilities.',
   },
 ],
};

export const caseStudiesData: CaseStudiesData = {
 title: 'Results',
 subtitle: 'Real challenges with measurable outcomes.',
 caseStudies: [
   {
     title: 'FinOps Initial Analysis',
     subtitle: 'Cloud Cost Intelligence',
     tags: ['FinOps', 'AWS', 'Strategy', 'Leadership'],
     situation: 'Cloud spend had doubled to an annual spend of $3.5M+ with no corresponding footprint increase resulting in lacking visibility and accountability.',
     task: 'Reduce the bill by $50k/month, implemented several cost-saving measures like cost-saving plans, rightsizing instances, reduced waste, architectural changes, and most importantly transform the engineering culture to also own the costs.',
     action: 'Hired a senior engineer and empowered him to lead the initiative. I established proactive reviews and built a strong partnership with Finance to create shared accountability.',
     result: 'Exceeded goal, delivering over $1M in annualized savings and dramatically improving forecast accuracy from over 30% deviation (forecast vs actuals) to under 4%.',
     impactMetrics: {
       'Annualized Savings': '$1M+',
       'Monthly Reduction': '$84,000+',
       'Forecast Deviation': '30% → <4%',},
   },
   {
     title: 'Modernizing Software Logistics for 150+ Engineers',
     subtitle: 'CI/CD Modernization at Scale',
     tags: ['CI/CD', 'Platform Engineering', 'DevEx'],
     situation: 'A legacy and outdated on-prem CI/CD system caused outages and delayed feature delivery for over 150 engineers with 10+ outages per month.',
     task: 'Lead the initiative to modernize the entire CI/CD ecosystem to enable faster, more stable, more secure, and independent feature delivery.',
     action: 'I built the business case, secured the budget, and then guided the team in defining a cloud-native strategy and executing the migration to a modern CI/CD platform with self-service capabilities.',
     result: 'Reduced service onboarding time from 8+ hours to less than 1 hour and eliminated manual deployment interventions.',
     impactMetrics: {
       'Onboarding Time': '8h → <1h',
       'Engineers Impacted': '150+',
       'Operational Overhead': 'removed and shifted to value creation for the teams',
     },
   },
   {
     title: 'Identity and Access Modernization',
     subtitle: 'Improving Security and Developer Experience',
     tags: ['Security', 'AWS', 'IAM', 'Automation'],
     situation: 'Legacy AWS access was fragile, manual, and created security risks with permanent user permissions based on individual certificate-based SAML logins.',
     task: 'Migrate to AWS Identity Center with Just-In-Time (JIT) based on O365 PIM permissions to improve security, durability, and user experience.',
     action: 'I aligned stakeholders on the vision, simplified the toolstack, and supported the team on the new solution to empower them to own the new system.',
     result: 'Eliminated waiting times for permission changes, saved time on security reviews, and significantly improved the overall security posture.',
     impactMetrics: {
       'Permission Update Delay': 'from 1-2 days to <5 minutes',
       'Standing Privileges (Risk)': 'are contained and reduced to a minimum'
     },
   },
   {
     title: 'SRE Implementation',
     subtitle: 'Transitioning SRE into our Operation Model',
     tags: ['SRE', 'Strategy', 'Incident Management'],
     situation: 'Fragmented SRE practices and outdated incident management posed a significant risk to an upcoming security audit.',
     task: 'Define and execute an SRE strategy aligned with a "You Build It, You Run It" model and deliver a robust incident management reimplementation.',
     action: 'I created the initial SRE strategy, then collaborated with the team to define a roadmap with quick wins and execute on a unified incident management framework.',
     result: 'Established a clear SRE path forward and delivered an auditable incident management framework, improving operational data quality.',
     impactMetrics: {
       'Audit Readiness': 'Achieved',
       'Incident Framework': 'Unified',
       'Data Quality': 'Improved',
     },
   },
    {
      title: 'Team Rebuilding',
      subtitle: 'Rebuilding a Team After Org Disruption',
      tags: ['Leadership', 'Hiring', 'Organizational Resilience'],
      situation: 'A restructure left the team with only 6 engineers out of 15 while the scope of responsibility simultaneously expanded to cover the legacy Datacenter, Cloud Platform Engineering, DevOps, and SRE.',
      task: 'Rebuild the team to full operating capacity without sacrificing delivery, stability, or morale during the transition.',
      action: 'Over 10 months I ran a deliberate hiring process focused on filling specific skill and knowledge gaps, targeting a balanced seniority distribution. I maintained team operations and managed expanded scope in parallel, while keeping individuals engaged and growing throughout the uncertainty.',
      result: 'Grew the team from 6 to 12 engineers with a 1/5/6 junior-mid-senior mix. Delivery and operational stability were maintained throughout. Received feedback: "Exceeded expectations by delivering stability and keeping the morale up where many would struggle."',
      impactMetrics: {
        'Team Size': '6 → 12 engineers',
        'Time to Rebuild': '10 months'
      },
    }
 ],
};

export const testimonialsData: TestimonialsData = {
 title: 'Kudos',
 subtitle: 'What colleagues and leaders say.',
 linkedinUrl: 'https://www.linkedin.com/in/marvyn-zalewski/',
 testimonials: [
   // Ordered by seniority for credibility
   {
     headline: 'An excellent management lead for any innovative technology company.',
     quote:
       "Marvyn is an extremely knowledgeable & experienced security professional with a deep technical background, learned through numerous roles. He is dedicated, passionate and always takes extra effort to constantly improve, and interact with his peers. His enthusiasm for learning and engaging is fantastic to watch! He would be an excellent management lead for any innovative technology company.",
     author: 'Joe Stevens',
     title: 'CISO / Tech Executive / Advisor',
     initials: 'JS',
   },
   {
     headline: 'A skilled architect with strong DevOps and leadership capabilities.',
     quote:
       "I had the pleasure of working with Marvyn Zalewski on two significant projects at Aviv. In our first project, which focused on building AWS foundations, Marvyn was a key team member working on the network components of our AWS Landing Zone. His strong grasp of network architecture, coupled with his DevOps expertise, played a crucial role in automating and optimising our setup. In our second project, Marvyn took on the role of Security Architect for a large-scale migration of multiple data centers to AWS. His in-depth security assessments and approvals ensured that all target platform designs met rigorous standards for security and compliance. Marvyn's thoughtful approach, combined with his technical strengths in both DevOps and security, make him an invaluable team member. I highly recommend him for any team seeking a skilled Security Architect with strong DevOps and leadership capabilities.",
     author: 'Boris Gonev',
     title: 'Regional Vice President, Cloud & Infrastructure at Endava',
     initials: 'BG',
   },
   {
     headline: 'Designs secure solutions that are realistic for teams to implement.',
     quote:
       'I had the chance to work with Marvyn Zalewski while he was working as a Security Architect with a strong focus on cloud technologies. Before I joined the team, he had already put in place solid foundations for our cloud architecture, which proved both reliable and scalable. Marvyn is a quick learner and has a deep understanding of AWS cloud. He knows how to design and guide technical solutions that are secure, but also realistic for teams to implement. He brings a lot of empathy to his work, always considering team constraints and helping them move forward without adding unnecessary friction. I strongly recommend Marvyn for any role involving cloud architecture or AWS-focused engineering work, especially where collaboration across teams is key.',
     author: 'Jean Favreau',
     title: 'Head of Security Transformation at AVIV Group',
     initials: 'JF',
   },
   {
     headline: 'A natural leader who communicates complex topics in an understandable way.',
     quote:
       'Over several years, I have worked with Marvyn in various relationships and roles. With his high level of commitment and impressive technical expertise in DevOps, IT security and architecture, Marvyn has been instrumental in successfully driving the DevOps transformation and modernizing the tech stack with new technologies, fostering a culture of collaboration and openness. He always emphasized automation and coaching his environment to support enablement and business goals with the "you build it, you run it" approach. His mature communication and excellent stakeholder management make him a natural leader who can communicate complex topics in an understandable way. I fully recommend Marvyn and am convinced that with his extensive knowledge, strong communication skills and commitment he will enrich any team and lead any project to success.',
     author: 'Cemal Acar',
     title: 'Senior Manager Application Operations and SRE at CTS EVENTIM Solutions',
     initials: 'CA',
   },
   {
     headline: 'A true evangelist for team ownership.',
     quote:
       "I've worked with Marvyn in the same team for several years, me in the role of the Product Owner, he as a DevOps Engineer. Marvyn truly lived up to the mindset of enabling his dev team to claim the ownership of their applications infrastructure, including performance, up-time & budget monitoring. He was an evangelist of that ways of working at immowelt and helped to establish it throughout the organization. Besides that Marvyn never hesitated to help out on tasks outside of his field of expertise, when the team needed it. He is a true team player and was at all the time a beloved and valued team mate due to his excellent character. I can highly recommend working with Marvyn.",
     author: 'Philipp Horns',
     title: 'Lead Product Manager at AVIV Group',
     initials: 'PH',
   },
   {
     headline: 'Elevates team dynamics while ensuring state-of-the-art security.',
     quote:
       "Marvyn is an exceptional Security Architect and Cyber Security Specialist who brings a unique blend of technical expertise, positive energy, and effective communication to every team. His commitment to crafting state-of-the-art security solutions is unwavering. His proficiency in guiding and providing secure architecture particularly within the Amazon Web Services ecosystem, is truly impressive. Marvyn's mission to enable secure products and foster a growth mindset in teams reflects his dedication to excellence. He is a remarkable professional who not only ensures security but also elevates team dynamics, making him a standout addition to any organization.",
     author: 'Dennis Kribl',
     title: 'Senior Cloud Site Reliability Engineer at Scalable Capital',
     initials: 'DK',
   },
   {
     headline: 'Empowers teams to grow through mentoring and a collaborative mindset.',
     quote:
       'I highly recommend Marvyn for his exceptional expertise in DevOps, security and cloud. He consistently delivers high quality results and is a valuable asset to any team. In addition, he has the ability to empower teams to grow in these topics through mentoring and his very collaborative and open mindset.',
     author: 'Torben Rauche',
     title: 'Lead Fullstack at Netfonds AG',
     initials: 'TR',
   },
   {
     headline: 'An inspiring leader who brings out the best in every team member.',
     quote:
       "I've had the opportunity to work with Marvyn for about a year on the same team and I can confidently say, that he is not only an excellent manager, but also a great person! His leadership style is inspiring! Marvyn consistently brought innovative ideas to the table and ensured projects moved forward seamlessly. He knows how to bring out the best in every team member and he is always willing to offer support whenever it's needed. Any team would be lucky to have Marvyn!",
     author: 'Maksym Kolisnyk',
     title: 'Senior Network Engineer',
     initials: 'MK',
   },
 ],
};
