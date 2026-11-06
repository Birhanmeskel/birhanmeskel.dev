// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Birhanmeskel Abate",
  shortName: "Birhan Abate",
  title: "Software Engineer · Full-Stack & Power Platform Developer",
  tagline:
    "I build scalable web and mobile applications, and automate the business processes behind them.",
  location: "Addis Ababa, Ethiopia",
  email: "birhan.abate17@gmail.com",
  siteUrl: "https://birhanmeskel-dev.vercel.app", // update if you add a custom domain
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
    company: "Hatch Africa · EthioChicken",
    url: "https://hatchafrica.co",
    previousTitles: ["Junior Full-Stack Developer"],
    description:
      "Promoted to Software Engineer I after eight months as a Junior Full-Stack Developer. Develop and maintain scalable web and mobile applications with Next.js, NestJS, React Native and Firebase, build and optimize RESTful APIs and backend services, and deploy with Google Cloud Run and Artifact Registry — working with cross-functional teams to deliver business-driven solutions.",
    tech: ["Next.js", "NestJS", "React Native", "Firebase", "Google Cloud Run", "REST APIs"],
  },
  {
    period: "Sep 2025 — Apr 2026",
    title: "Power Platform Developer",
    company: "Ewket Tech",
    description:
      "Built business-process automation with Power Apps and Power Automate: multi-level approval workflows, employee requests, onboarding and offboarding automation, and notification and reminder flows. Used SharePoint for document and request management.",
    tech: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"],
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
    title: "Kech Delivery Platform",
    description:
      "A delivery platform made up of customer, restaurant-owner and driver mobile apps, plus sales and admin dashboards for running day-to-day operations.",
    tech: ["React Native", "Next.js", "NestJS", "Firebase"], // TODO: confirm stack
    liveUrl: "https://kechdelivery.cloud/",
    featured: true,
  },
  {
    title: "Hatch Africa Sales App & Dashboard",
    madeAt: "Hatch Africa",
    description:
      "A sales mobile app and companion dashboard supporting customer, order, delivery and operational workflows for the field and back-office teams.",
    tech: ["React Native", "Next.js", "NestJS", "Firebase"], // TODO: confirm stack
    featured: true,
  },
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
    featured: false,
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
    featured: false,
  },
  {
    title: "Habtamu Amibara Real Estate",
    madeAt: "Client",
    description:
      "A dynamic portfolio website for a real-estate sales agent, presenting properties with a clean, responsive design.",
    tech: ["Next.js", "Tailwind CSS"], // TODO: confirm stack
    liveUrl: "https://habtamurealestate.com",
    featured: false,
  },
  {
    title: "Synchrony — Business Process Automation",
    madeAt: "Power Platform",
    description:
      "A suite of automations: employee request apps, multi-level approval workflows with history tracking, onboarding and offboarding coordination between HR and managers, document management, and email/Teams reminders for pending and overdue approvals.",
    tech: ["Power Apps", "Power Automate", "SharePoint", "Teams"],
    featured: true,
  },
  {
    title: "Kifiya — Offer of Employment Automation",
    madeAt: "Power Platform",
    description:
      "Automated the offer-of-employment process for external program managers, streamlining the business workflow end to end.",
    tech: ["Power Automate", "Power Apps", "SharePoint"],
    featured: false,
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
  { group: "Frontend & Mobile", items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS"] },
  { group: "Backend & Cloud", items: ["Node.js", "Express", "NestJS", "REST APIs", "Firebase", "Google Cloud Run"] },
  { group: "Databases", items: ["MongoDB", "MySQL", "Firestore"] },
  { group: "Microsoft Power Platform", items: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Microsoft 365"] },
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
