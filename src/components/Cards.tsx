import Image from "next/image";
import type { Experience, Project } from "@/data/site";
import { ArrowUpRight } from "./Icons";
import TechIcon from "./TechIcon";

export function TechPills({ tech, className = "mt-2" }: { tech: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap ${className}`} aria-label="Technologies used">
      {tech.map((t) => (
        <li key={t} className="mr-1.5 mt-2">
          <span className="flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-accent">
            <TechIcon name={t} />
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* Shared hover treatment: the card lifts onto a soft surface, and siblings dim (see `group/list` on the parent list). */
const cardBase =
  "group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50";
const cardBg =
  "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface/70 lg:group-hover:shadow-[inset_0_1px_0_0_var(--card-edge)] lg:group-hover:drop-shadow-lg";

export function ExperienceCard({ job }: { job: Experience }) {
  const titleText = `${job.title} · ${job.company}`;
  return (
    <div className={cardBase}>
      <div className={cardBg} />
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2"
        aria-label={job.period}
      >
        {job.period}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-heading">
          {job.url ? (
            <a
              href={job.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link inline-flex items-baseline text-base font-medium leading-tight text-heading hover:text-accent focus-visible:text-accent"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {titleText}
                <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
              </span>
            </a>
          ) : (
            titleText
          )}
        </h3>
        {job.previousTitles?.map((t) => (
          <div key={t} className="text-muted" aria-hidden>
            {t}
          </div>
        ))}
        <p className="mt-2 text-sm leading-normal">{job.description}</p>
        <TechPills tech={job.tech} />
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const href = project.liveUrl ?? project.githubUrl;
  return (
    <div className={cardBase}>
      <div className={cardBg} />
      <div className={`z-10 sm:order-2 ${project.image ? "sm:col-span-6" : "sm:col-span-8"}`}>
        <h3>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} (opens in a new tab)`}
              className="group/link inline-flex items-baseline text-base font-medium leading-tight text-heading hover:text-accent focus-visible:text-accent"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {project.title}
                <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
              </span>
            </a>
          ) : (
            <span className="text-base font-medium text-heading">{project.title}</span>
          )}
        </h3>
        <p className="mt-2 text-sm leading-normal">{project.description}</p>
        {project.githubUrl && project.liveUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="relative z-20 mt-2 inline-flex items-center text-sm font-medium text-heading hover:text-accent focus-visible:text-accent"
          >
            Source code <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        )}
        <TechPills tech={project.tech} />
      </div>
      {project.image && (
        <Image
          src={project.image.src}
          alt=""
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 640px) 120px, 200px"
          className="z-10 mt-4 aspect-video w-[200px] rounded border-2 border-text/10 object-cover object-top transition group-hover:border-text/30 sm:order-1 sm:col-span-2 sm:mt-1 sm:w-auto"
        />
      )}
    </div>
  );
}
