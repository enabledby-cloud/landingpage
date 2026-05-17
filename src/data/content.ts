
import type { Principle, ServicesData, CaseStudiesData, TestimonialsData } from './types';

export const principles: Principle[] = [
 {
   icon: 'Scale',
   title: 'Scale',
   description: 'Designing resilient, cloud-native and people-centric systems that grow with your business.',
   color: '#3e8bff',
   gradient: 'linear-gradient(135deg, #ff5e84, #3e8bff)',
 },
 {
   icon: 'Simplify',
   title: 'Simplify',
   description:
     'Reasoning through complexity to create elegant, maintainable, and cost-effective solutions.',
   color: '#59f4b2',
   gradient: 'linear-gradient(135deg, #ff5e84, #59f4b2)',
 },
 {
   icon: 'Enable',
   title: 'Enable',
   description:
     'Empowering teams with the right tools, processes, and culture to achieve steady peak performance.',
   color: '#ff8e26',
   gradient: 'linear-gradient(135deg, #ff5e84, #ff8e26)',
 },

];

export const servicesData: ServicesData = {
 title: 'What I Do',
 subtitle:
   'Hands-on leadership and technical expertise for cloud and engineering challenges.',
 services: [
   {
     title: 'Cloud & DevOps Transformation',
     description:
       'Applying principles from Team Topologies, I help restructure teams to resolve ownership conflicts and eliminate bottlenecks. My goal is to create a clear vision and mission, fostering a culture of ownership that enables scalable, high-performing engineering organizations.',
   },
   {
     title: 'Financial Operations (FinOps) & Cost Optimization',
     description:
       "I build FinOps practices from the ground up to establish cost intelligence and accountability. Specializing in waste reduction and workload optimization, I create crucial partnerships between finance and engineering to deliver substantial, recurring savings in your cloud spend.",
   },
   {
     title: 'Platform Engineering & Developer Enablement',
     description:
       'I lead initiatives to build robust internal platforms that accelerate development. This includes modernizing CI/CD pipelines to slash onboarding times, standardizing observability, and creating OKR-driven roadmaps focused on improving the developer experience.',
   },
   {
     title: 'Cloud Security & Governance',
     description:
       'I architect and implement comprehensive security strategies, from establishing a Secure Product Lifecycle (SPLC) to modernizing identity and access management. I harden cloud environments with preventative and detective controls to significantly improve your security posture.',
   },
 ],

};

export const caseStudiesData: CaseStudiesData = {
 title: 'Results',
 subtitle: 'Real challenges, measurable outcomes.',
 caseStudies: [
   {
     title: 'The FinOps Turnaround',
     subtitle: 'Driving Cloud Cost Intelligence',
     tags: ['FinOps', 'AWS', 'Strategy', 'Leadership'],
     situation: 'A $3.5M+ annual cloud spend had doubled with no corresponding footprint increase, lacking visibility or accountability.',
     task: 'Reduce the bill by $50k/month, implemented several cost-saving measures like cost-saving plans, rightsizing instances, reduced waste, and transform the culture to be more cost-conscious.',
     action: 'Hired a senior engineer, empowered them to lead, implemented proactive reviews, and built a partnership with Finance.',
     result: 'Exceeded goal, delivering over $1M in annualized savings and dramatically improving forecast accuracy.',
   },
   {
     title: 'CI/CD Modernization',
     subtitle: 'Enabling Faster, Safer Deployments',
     tags: ['CI/CD', 'Platform Engineering', 'DevEx'],
     situation: 'An outdated on-prem CI/CD system caused outages and delayed feature delivery for over 200 engineers.',
     task: 'Lead a modernization strategy to enable faster, more stable, and independent feature delivery.',
     action: 'Built the business case, secured budget, defined a SaaS-first strategy, and managed the cloud-native migration project.',
     result: 'Reduced service onboarding time from 8+ hours to less than 1 hour and eliminated manual deployment interventions.',
   },
   {
     title: 'Identity & Access Modernization',
     subtitle: 'Improving Security and Developer Experience',
     tags: ['Security', 'AWS', 'IAM', 'Automation'],
     situation: 'Legacy AWS access was fragile, manual, and created security risks with permanent user permissions.',
     task: 'Migrate to AWS Identity Center with Just-In-Time (JIT) permissions to improve security, durability, and user experience.',
     action: 'Aligned stakeholders, simplified the toolstack, and coached the team on a scalable Terraform setup for the new system.',
     result: 'Eliminated waiting times for permissions, saved time on security reviews, and significantly improved the overall security posture.',
   },
   {
     title: 'SRE Strategy & Execution',
     subtitle: 'Building a Foundation for Reliability',
     tags: ['SRE', 'Strategy', 'Incident Management'],
     situation: 'Fragmented SRE practices and outdated incident management posed a significant risk to an upcoming security audit.',
     task: 'Define and execute an SRE strategy aligned with a "You Build It, You Run It" model and deliver a robust incident management reimplementation.',
     action: 'Authored a comprehensive SRE strategy, defined a roadmap with quick wins, and executed on a unified incident management framework.',
     result: 'Established a clear SRE strategy and delivered an auditable incident management framework, improving operational data quality.',
   },
   {
     title: 'Platform Ownership Conflict',
     subtitle: 'From Confusion to Clarity',
     tags: ['Team Topologies', 'Leadership', 'Org Design'],
     situation: 'Overlapping ownership between two platform teams created confusion, ticket ping-pong, and frustration for engineers.',
     task: 'Resolve the ownership conflict and create a clear, shared responsibility model.',
     action: 'Gathered stakeholder feedback, facilitated a workshop applying Team Topologies, and documented a platform catalog with clear ownership.',
     result: 'Eliminated confusion and contributed to an 11-point improvement in the developer experience score.',
   },
 ],

};

export const testimonialsData: TestimonialsData = {
 title: 'Kudos',
 linkedinUrl: 'https://www.linkedin.com/in/marvyn-zalewski/',
 testimonials: [
   {
     quote:
       "I've worked with Marvyn in the same team for several years, me in the role of the Product Owner, he as a DevOps Engineer. Marvyn truly lived up to the mindset of enabling his dev team to claim the ownership of their applications infrastructure, including performance, up-time & budget monitoring. He was an evangelist of that ways of working at immowelt and helped to establish it throughout the organization. Besides that Marvyn never hesitated to help out on tasks outside of his field of expertise, when the team needed it. He is a true team player and was at all the time a beloved and valued team mate due to his excellent character. I can highly recommend working with Marvyn.",
     author: 'Philipp Horns',
     title: 'Lead Product Manager at AVIV Group',
     initials: 'PH',
   },
   {
     quote:
       "I've had the opportunity to work with Marvyn for about a year on the same team and I can confidently say, that he is not only an excellent manager, but also a great person! His leadership style is inspiring! Marvyn consistently brought innovative ideas to the table and ensured projects moved forward seamlessly. He knows how to bring out the best in every team member and he is always willing to offer support whenever it's needed. Any team would be lucky to have Marvyn!",
     author: 'Maksym Kolisnyk',
     title: 'Senior Network Engineer',
     initials: 'MK',
   },
   {
     quote:
       'I had the chance to work with Marvyn Zalewski while he was working as a Security Architect with a strong focus on cloud technologies. Before I joined the team, he had already put in place solid foundations for our cloud architecture, which proved both reliable and scalable. Marvyn is a quick learner and has a deep understanding of AWS cloud. He knows how to design and guide technical solutions that are secure, but also realistic for teams to implement. He brings a lot of empathy to his work, always considering team constraints and helping them move forward without adding unnecessary friction. I strongly recommend Marvyn for any role involving cloud architecture or AWS-focused engineering work, especially where collaboration across teams is key.',
     author: 'Jean Favreau',
     title: 'Head of Security Transformation at AVIV Group',
     initials: 'JF',
   },
   {
     quote:
       "I had the pleasure of working with Marvyn Zalewski on two significant projects at Aviv. In our first project, which focused on building AWS foundations, Marvyn was a key team member working on the network components of our AWS Landing Zone. His strong grasp of network architecture, coupled with his DevOps expertise, played a crucial role in automating and optimising our setup. In our second project, Marvyn took on the role of Security Architect for a large-scale migration of multiple data centers to AWS. His in-depth security assessments and approvals ensured that all target platform designs met rigorous standards for security and compliance. Marvyn's thoughtful approach, combined with his technical strengths in both DevOps and security, make him an invaluable team member. I highly recommend him for any team seeking a skilled Security Architect with strong DevOps and leadership capabilities.",
     author: 'Boris Gonev',
     title: 'Regional Vice President, Cloud & Infrastructure at Endava',
     initials: 'BG',
   },
   {
     quote:
       'Over several years, I have worked with Marvyn in various relationships and roles. With his high level of commitment and impressive technical expertise in DevOps, IT security and architecture, Marvyn has been instrumental in successfully driving the DevOps transformation and modernizing the tech stack with new technologies, fostering a culture of collaboration and openness. He always emphasized automation and coaching his environment to support enablement and business goals with the "you build it, you run it" approach. His mature communication and excellent stakeholder management make him a natural leader who can communicate complex topics in an understandable way. I fully recommend Marvyn and am convinced that with his extensive knowledge, strong communication skills and commitment he will enrich any team and lead any project to success.',
     author: 'Cemal Acar',
     title: 'Senior Manager Application Operations and SRE at CTS EVENTIM Solutions',
     initials: 'CA',
   },
   {
     quote:
       "Marvyn is an extremely knowledgeable & experienced security professional with a deep technical background, learned through numerous roles. He is dedicated, passionate and always takes extra effort to constantly improve, and interact with his peers. His enthusiasm for learning and engaging is fantastic to watch! He would be an excellent management lead for any innovative technology company.",
     author: 'Joe Stevens',
     title: 'CISO / Tech Executive / Advisor',
     initials: 'JS',
   },
   {
     quote:
       'I highly recommend Marvyn for his exceptional expertise in DevOps, security and cloud. He consistently delivers high quality results and is a valuable asset to any team. In addition, he has the ability to empower teams to grow in these topics through mentoring and his very collaborative and open mindset.',
     author: 'Torben Rauche',
     title: 'Lead Fullstack at Netfonds AG',
     initials: 'TR',
   },
   {
     quote:
       "Marvyn is an exceptional Security Architect and Cyber Security Specialist who brings a unique blend of technical expertise, positive energy, and effective communication to every team. His commitment to crafting state-of-the-art security solutions is unwavering. His proficiency in guiding and providing secure architecture particularly within the Amazon Web Services ecosystem, is truly impressive. Marvyn's mission to enable secure products and foster a growth mindset in teams reflects his dedication to excellence. He is a remarkable professional who not only ensures security but also elevates team dynamics, making him a standout addition to any organization.",
     author: 'Dennis Kribl',
     title: 'Senior Cloud Site Reliability Engineer at Scalable Capital',
     initials: 'DK',
   },
 ],

};
