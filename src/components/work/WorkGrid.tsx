"use client";

import Link from "next/link";
import { useState } from "react";
import { projectArt } from "@/components/visuals/Scenes";
import { workTags, type CaseStudy, type WorkTag } from "@/lib/content";

export function WorkGrid({ projects }: { projects: CaseStudy[] }) {
  const [tag, setTag] = useState<(typeof workTags)[number]>("All");
  const visible = tag === "All" ? projects : projects.filter((project) => project.tags.includes(tag as WorkTag));

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter projects">
        {workTags.map((item) => {
          const selected = tag === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setTag(item)}
              className={`min-h-11 rounded-full px-4 text-sm ${
                selected ? "bg-plum text-white" : "border border-line bg-card text-ink-soft hover:border-plum/40"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      {visible.length === 0 ? (
        <p className="mt-8 text-sm text-muted">No projects in this category.</p>
      ) : (
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {visible.map((project) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="h-56 overflow-hidden rounded-2xl">{projectArt(project.slug)}</div>
                <h2 className="mt-4 font-sans text-base font-semibold text-ink group-hover:text-plum">{project.title}</h2>
                <p className="mt-1 text-sm text-muted">{project.cardLabel}</p>
                <p className="mt-2 text-xs tracking-wide text-rose uppercase">{project.tags.join(" · ")}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
