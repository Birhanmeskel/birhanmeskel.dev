// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Birhanmeskel Abate",
  shortName: "Birhan Abate",
  title: "Software Engineer · Full-Stack Developer",
  tagline:
    "I build scalable, user-friendly web applications — from database to interface.",
  location: "Addis Ababa, Ethiopia",
  email: "birhan.abate17@gmail.com",
  siteUrl: "https://birhanabate.dev", // TODO: replace with your real domain
  // Drop an updated resume at public/resume.pdf and set this to "/resume.pdf".
  resumeUrl: null as string | null,
  socials: {
    github: "https://github.com/Birhanmeskel",
    linkedin: "https://www.linkedin.com/in/birhanmeskel-abate/",
  },
};

export type Experience = {
  period: string;
  title: string;
  company: string;
  url?: string;
  previousTitles?: string[];
  description: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    period: "2026 — Present", // TODO: confirm start month/year
    title: "Software Engineer I",
    company: "Hatch Africa",
    url: "https://hatchafrica.co",
    previousTitles: ["Junior Full-Stack Developer"],
    description:
      "Promoted to Software Engineer I after eight months as a Junior Full-Stack Developer. Build and ship features across the stack — designing APIs, building responsive interfaces, and delivering reliable software that real users depend on.",
    tech: ["TypeScript", "React", "Next.js", "Node.js", "NestJS"],
  },
  {
    period: "Previously", // TODO: add dates
    title: "Full-Stack Developer",
    company: "EthioChicken (AGP Poultry)",
    description:
      "Developed and maintained scalable applications using Next.js, NestJS, React Native and Firebase. Built and optimized RESTful APIs and backend services, and collaborated with cross-functional teams to deliver business-driven solutions.",
    tech: ["Next.js", "NestJS", "React Native", "Firebase", "REST APIs"],
  },
];

export type Project = {
  title: string;
  year?: string;
  madeAt?: string;
  description: string;
  image?: { src: string; width: number; height: number };
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Revobingo",
    madeAt: "Commercial",
    description:
      "A commercial online bingo platform, live in production. Role-based access for admins, agents and cashiers, real-time game management, downloadable bingo cards and revenue tracking — built to handle many concurrent users.",
    image: { src: "/projects/revobingo.png", width: 543, height: 684 },
    tech: ["MongoDB", "Express", "React", "Node.js", "MySQL"],
    liveUrl: "https://revobingo.com",
    featured: true,
  },
  {
    title: "ClassyTrips",
    madeAt: "Client",
    description:
      "A luxury travel and car-rental platform that simplifies booking and management for clients. Contributed across frontend and backend, with a focus on responsive design and secure transactions.",
    image: { src: "/projects/classytrips.png", width: 541, height: 690 },
    tech: ["React", "Node.js", "Express"], // TODO: confirm stack
    liveUrl: "https://classytrips.com.et",
    featured: true,
  },
  {
    title: "AMU-TCSH Hospital Appointment System",
    madeAt: "Arba Minch University",
    description:
      "Final-year graduation project for Arba Minch University Hospital. Patients book appointments, doctors manage schedules, with role-based access, ratings and real-time updates.",
    image: { src: "/projects/hospital.png", width: 540, height: 680 },
    tech: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "https://amuth.netlify.app/",
    githubUrl: "https://github.com/Birhanmeskel/GraduationProject",
    featured: true,
  },
  {
    title: "Evangadi Forum",
    madeAt: "Evangadi Bootcamp",
    description:
      "A Q&A forum that acts as a central hub for student questions and suggestions, encouraging community engagement and peer learning.",
    image: { src: "/projects/evangadi-forum.jpg", width: 1013, height: 1024 },
    tech: ["React", "Node.js", "Express", "MySQL"],
    liveUrl: "https://forumbybirhan.netlify.app/",
    githubUrl: "https://github.com/Birhanmeskel/Evangadi_Forum",
    featured: true,
  },
  {
    title: "E-Commerce Clone",
    description:
      "An Amazon-style shop with authentication, product listings, a fully functional cart and checkout.",
    image: { src: "/projects/amazon-clone.jpg", width: 1000, height: 1000 },
    tech: ["React", "Node.js", "Firebase"],
    liveUrl: "https://birhanzon.netlify.app/",
    githubUrl: "https://github.com/Birhanmeskel/Amazon-Clone",
    featured: false,
  },
  {
    title: "Power BI Dashboards",
    description:
      "Business-intelligence dashboards: AdventureWorks sales insights and Zoom attendance analysis.",
    tech: ["Power BI", "Data Cleaning", "Visualization"],
    featured: false,
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "NestJS", "REST APIs", "Firebase"] },
  { group: "Databases", items: ["MongoDB", "MySQL"] },
  { group: "Business & Data", items: ["Power Platform", "Power BI", "SharePoint", "HubSpot"] },
];

export const education = {
  degree: "BSc in Computer Science",
  school: "Arba Minch University",
  detail: "CGPA 3.81 / 4.0",
};

export const programs = [
  "Evangadi Full-Stack Web Development (MERN) Program",
  "Dereja Academy Accelerator Program",
  "AddisCoder Tech & Innovation Summer Camp",
];
