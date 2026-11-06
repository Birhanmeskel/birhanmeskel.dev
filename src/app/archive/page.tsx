import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { TechPills } from "@/components/Cards";
import { profile, projects } from "@/data/site";

export const metadata: Metadata = { title: "Project Archive" };

function shortUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function Archive() {
  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <Link href="/" className="group mb-2 inline-flex items-center font-semibold leading-tight text-accent">
        <ArrowRight className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" />
        {profile.name}
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">All Projects</h1>

      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-text/10 bg-bg/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-heading">Project</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-heading lg:table-cell">Made at</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-heading lg:table-cell">Built with</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-heading sm:table-cell">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => {
            const href = p.liveUrl ?? p.githubUrl;
            return (
              <tr key={p.title} className="border-b border-text/10 last:border-none">
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-heading">
                  <span className="hidden sm:inline">{p.title}</span>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer noopener" className="inline-flex items-baseline hover:text-accent sm:hidden">
                      {p.title}
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </a>
                  ) : (
                    <span className="sm:hidden">{p.title}</span>
                  )}
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">{p.madeAt ?? "—"}</td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <TechPills tech={p.tech} className="-mt-2" />
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="space-y-1">
                    {[p.liveUrl, p.githubUrl].filter(Boolean).map((u) => (
                      <li key={u}>
                        <a href={u} target="_blank" rel="noreferrer noopener" className="inline-flex items-baseline text-sm font-medium hover:text-accent focus-visible:text-accent">
                          {shortUrl(u!)}
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
