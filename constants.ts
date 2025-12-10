import { Experience, Project, Skill } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/omogbolahan-i-bakare-8a0741293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  github: "https://github.com/king-bami",
  email: "mailto:contact@bakareomogbolahan.com",
  portfolio: "https://bakareomogbolahan.com" // Placeholder
};

export const RESUME_SUMMARY = `
Results-driven Senior Full Stack Developer with 5+ years of experience designing, building, and scaling web applications for startups and enterprises across Africa. Specialized in Next.js, Node.js, and Supabase, with proven expertise in cloud-native architecture, API design, and AI-powered automation. Adept at leading teams and delivering user-centered digital products from concept to production. Passionate about using technology to drive measurable business outcomes and global impact.
`;

export const EXPERIENCES: Experience[] = [
  {
    company: "ParcelTrack",
    role: "Senior Full Stack Developer (Contract, USA)",
    location: "Remote (USA)",
    period: "Nov 2025 – Dec 2025",
    description: [
      "Delivered ParcelTrack, a full-stack enterprise logistics & dispatch platform with a dual ecosystem: Customer Portal and Secure Admin Dashboard.",
      "Architected a production-grade backend using Supabase PostgreSQL with Row Level Security (RLS) for strict per-user isolation.",
      "Built SQL triggers & functions to automate user creation, timeline propagation, and status updates, removing 100% manual admin tasks.",
      "Built a real-time tracking engine using react-simple-maps with multi-country stopovers, animated transitions, and a fully responsive timeline UI.",
      "Designed a premium, modern SaaS UI using Next.js 16 (App Router), Tailwind v4, TypeScript & Framer Motion with micro-interactions and glassmorphism effects.",
      "Created interactive operations analytics using Chart.js to help logistics teams monitor delivery performance and bottlenecks."
    ],
    techStack: ["Next.js 16", "TypeScript", "Supabase PostgreSQL", "TailwindCSS v4", "Framer Motion", "react-simple-maps", "Chart.js"],
    link: "https://www.parceltrack.store/"
  },
  {
    company: "Seamless Auto Part",
    role: "Lead Full Stack Engineer",
    location: "Lagos, Nigeria",
    period: "Jan 2025 – Present",
    description: [
      "Architected and developed an intelligent auto-parts marketplace (Next.js, Node.js, MongoDB) that helps users find genuine vehicle and industrial parts with AI-powered recommendations.",
      "Developed an in-house Smart Recommendation API trained on user behavior, boosting conversions by ~30%.",
      "Implemented a real-time admin dashboard with role-based access, instant CRUD operations, and Paystack checkout.",
      "Migrated the system from React to Next.js (SSR/SSG) to improve SEO, scalability, and performance for 2,500+ active users."
    ],
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "TailwindCSS", "JWT", "Socket.IO", "Paystack API", "AI Recommendation API"],
    link: "https://seamlessautopart.netlify.app/"
  },

  {
    company: "Attenda Africa",
    role: "Ex-Founder & CTO",
    location: "Lagos, Nigeria",
    period: "May 2023 – Dec 2024",
    description: [
      "Founded and led the development of Attenda, a geo-attendance and facial verification platform.",
      "Adopted by a government organisation (NDA) for nationwide attendance monitoring.",
      "Raised over $10,000 in funding from investors and received AWS cloud credits as part of support for the platform.",
      "Built the full architecture with Next.js + Supabase, integrating AI facial verification (Hugging Face) and Geo APIs.",
      "Integrated Telegram automation for check-ins, announcements & reporting.",
      "Successfully piloted across multiple NYSC CDS groups, serving 1,000+ users and 600+ admins."
    ],
    techStack: ["Next.js", "Supabase", "TailwindCSS", "Hugging Face API", "Chart.js", "Telegram API", "Edge Functions", "RBAC"],
    link: "https://attenda.africa"
  },
  {
    company: "NYSC Charity Group",
    role: "CDS President (Community Leadership)",
    location: "Abeokuta North, Ogun State",
    period: "Service Year",
    description: [
      "Led high-impact projects focused on youth empowerment and digital transformation as President of the Charity CDS group.",
      "Initiated and executed a major tech training program for 200+ students in collaboration with Crescent University and SQI College of ICT.",
      "Oversaw planning, content coordination, volunteer management, and execution to reduce the digital divide in the community."
    ],
    techStack: ["Leadership", "Community Building", "Project Management", "Public Speaking"],
    link: "https://www.linkedin.com/posts/omogbolahan-i-bakare-8a0741293_techforgood-empowermentthrougheducation-nysc-activity-7307885717475487744-fzv7"
  },
  {
    company: "Afrisata Awards",
    role: "Lead Full Stack Developer",
    location: "Nairobi, Kenya",
    period: "Jan 2024 – Apr 2024",
    description: [
      "Built the entire digital infrastructure for Africa Sales in Technology Awards, including secure voting, leaderboards & payment flows.",
      "Created admin dashboards for managing candidates, analytics & event monitoring.",
      "Integrated secure Paystack payments and real-time vote tracking."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Paystack API", "TailwindCSS"],
    link: "https://afrisata.com"
  },
  {
    company: "Sunrise Water Park",
    role: "Frontend Developer (Contract)",
    location: "Ogun State, Nigeria",
    period: "Apr 2023 – Jun 2023",
    description: [
      "Developed a high-performance, SEO-optimized website showcasing attractions, pricing & booking information.",
      "Delivered a visually engaging, responsive UI with strong user experience and brand consistency."
    ],
    techStack: ["Next.js", "TailwindCSS", "Vercel"],
    link: "https://sunrisewaterpark.com"
  },
  {
    company: "Lagos State University (LASU)",
    role: "Career Break - Bachelor's Degree",
    location: "Ojo, Lagos",
    period: "Oct 2020 – Jun 2023",
    description: [
      "Pursued a Bachelor’s Degree in Computer Science with a focus on algorithms, databases & software engineering.",
      "Built personal and open-source projects while mentoring junior developers through campus tech communities."
    ],
    techStack: ["Algorithms", "Databases", "Software Engineering"]
  },
  {
    company: "Google Open Source Mentorship",
    role: "Frontend Developer (AdSense UI Team)",
    location: "Remote",
    period: "Jun 2020 – Sep 2020",
    description: [
      "Selected for the Google Open Source Program; contributed to the AdSense UI/UX team.",
      "Developed reusable UI components in React + TypeScript and integrated REST APIs for global publisher dashboards.",
      "Improved dashboard load time by 20% through optimization."
    ],
    techStack: ["React", "TypeScript", "Redux", "Material-UI", "Jest", "Google Cloud"]
  },
  {
    company: "Aptech Computer Education",
    role: "Software Development Trainee (CPISM Program)",
    location: "Pune, India",
    period: "Jan 2019 – Dec 2019",
    description: [
      "Completed the CPISM program, gaining foundational expertise in programming, databases & system design.",
      "Built mini-projects across web & desktop environments using JavaScript, C#, and SQL."
    ],
    techStack: ["JavaScript", "C#", "SQL"]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Frontend Engineering",
    items: ["Next.js", "React.js", "Redux", "TypeScript", "TailwindCSS", "Framer Motion", "Material UI"],
    level: 95
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "Express.js", "Supabase", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    level: 85
  },
  {
    category: "AI & Automation",
    items: ["Hugging Face", "Telegram API", "Geo APIs", "Gemini API"],
    level: 80
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Vercel", "CI/CD Pipelines"],
    level: 85
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Remote Collaboration", "Product Strategy", "Agile Development"],
    level: 90
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Omogbolahan I. Bakare's portfolio website. 
Your goal is to represent him professionally to recruiters.
He is a Senior Full Stack Developer and Founder/CTO based in Nigeria, open to remote/global roles.
Key Highlights:
- Founder of Attenda Africa (Geo-attendance app used by NYSC).
- Expert in Next.js, Supabase, and Node.js.
- Google Open Source Mentorship alumni.
- Recently built Seamless Auto Part with AI recommendations increasing conversion by 30%.
- Values: Impact-driven, Scalability, Clean Code, User Experience.

Keep answers concise, professional, and persuasive. If asked about contact, provide his email: gbolahan.bakare@attenda.africa or LinkedIn.
`;

export const STATS = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "25+" },
  { label: "Users Impacted", value: "10k+" },
  { label: "Code Commits", value: "3k+" }
];

export const TESTIMONIALS = [
  {
    name: "Obed Jonathan",
    role: "Technology Consultant || Cybersecurity Engineer",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    text: "I can confidently beat my chest that Gbolahan is excellent. His technical depth, combined with his leadership as a President during his service year, makes him a rare gem in the tech space. He delivers world-class results every time."
  },
  {
    name: "Adewale O.",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Gbolahan's leadership in building Attenda was exceptional. He translated complex government requirements into a user-friendly platform that scaled nationwide."
  },
  {
    name: "Sarah K.",
    role: "CEO, Afrisata",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The voting platform Gbolahan built handled our traffic spikes effortlessly. His attention to security and performance is top-notch."
  },
  {
    name: "Rajiv M.",
    role: "Senior Instructor",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "One of the most dedicated students I've mentored. His grasp of system architecture at such an early stage was impressive."
  },
  {
    name: "Michael B.",
    role: "Lead Engineer",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    text: "Working with Gbolahan is a pleasure. He writes clean, maintainable code and always keeps the end-user experience in mind."
  },
  {
    name: "Zainab A.",
    role: "Product Owner",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "His ability to bridge the gap between technical constraints and product requirements is rare. A true asset to any team."
  },
  {
    name: "David O.",
    role: "Frontend Dev",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "I learned so much just by reviewing his PRs. He has a deep understanding of React patterns and performance optimization."
  }
];