import Link from "next/link";
import Nav from "@/components/Nav";
import TechIcon from "@/components/TechIcon";
import { ExperienceCard, ProjectCard } from "@/components/Cards";
import { ArrowRight, ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { education, experience, profile, programs, projects, skills } from "@/data/site";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-bg/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
      <h2 className="text-sm font-bold uppercase tracking-widest text-heading">{children}</h2>
    </div>
  );
}

const strong = "font-medium text-heading";

export default function Home() {
  const socials = [
    { href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
  ];

  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* ---------- Sidebar ---------- */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
              <Link href="/">{profile.name}</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-heading sm:text-xl">
              {profile.title}
            </h2>
            <p className="mt-4 max-w-xs leading-normal">{profile.tagline}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.location}
            </p>
            <Nav />
          </div>

          <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  aria-label={label}
                  title={label}
                  className="block hover:text-heading focus-visible:text-heading"
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </header>

        {/* ---------- Content ---------- */}
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <SectionHeading>About</SectionHeading>
            <div className="space-y-4">
              <p>
                I&apos;m a full-stack software engineer who builds web, mobile and backend applications — and
                automates the business processes behind them.
              </p>
              <p>
                I&apos;m currently a <span className={strong}>Mid Level Software Engineer I</span> at{" "}
                <a className={`${strong} hover:text-accent focus-visible:text-accent`} href="https://hatchafrica.co" target="_blank" rel="noreferrer noopener">
                  Hatch Africa
                </a>
                , working with <span className={strong}>Next.js, NestJS, React Native</span> and{" "}
                <span className={strong}>Firebase</span>. I also build workflow automation with{" "}
                <span className={strong}>Microsoft Power Platform</span>.
              </p>
              <p>
                I hold a <span className={strong}>{education.degree}</span> from{" "}
                <span className={strong}>{education.school}</span> ({education.detail}) and I&apos;m always
                learning something new.
              </p>
            </div>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group}>
                  <dt className="text-xs font-bold uppercase tracking-widest text-heading">{s.group}</dt>
                  <dd className="mt-3">
                    <ul className="flex flex-wrap gap-x-4 gap-y-2.5 text-sm">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <TechIcon name={item} className="h-4 w-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <SectionHeading>Experience</SectionHeading>
            <ol className="group/list space-y-12">
              {experience.map((job) => (
                <li key={job.company + job.title}>
                  <ExperienceCard job={job} />
                </li>
              ))}
            </ol>

            <div className="mt-12 space-y-2 text-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-heading">Programs</h3>
              <ul className="space-y-1">
                {programs.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-12 inline-flex items-center font-semibold text-heading hover:text-accent focus-visible:text-accent"
              >
                View Full Résumé
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            )}
          </section>

          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <SectionHeading>Projects</SectionHeading>
            <ul className="group/list space-y-12">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <li key={project.title}>
                    <ProjectCard project={project} />
                  </li>
                ))}
            </ul>
            <Link
              href="/archive"
              className="group mt-12 inline-flex items-center font-semibold text-heading hover:text-accent focus-visible:text-accent"
            >
              View Full Project Archive
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </section>

          {/* <footer className="max-w-md pb-16 text-sm sm:pb-0">
            <p>
              Built with Next.js and Tailwind CSS, deployed on Vercel. Layout inspired by{" "}
              <a href="https://brittanychiang.com" target="_blank" rel="noreferrer noopener" className="font-medium text-heading hover:text-accent focus-visible:text-accent">
                Brittany Chiang
              </a>
              . Brewed with ☕ in Addis Ababa.
            </p>
          </footer> */}
        </main>
      </div>
    </div>
  );
}
