"use client";

import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  year: number;
  company: string;
  image: string;
  caseStudy?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group">
      <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-1 shadow-border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {project.caseStudy && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/80 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            <Link
              href={project.caseStudy}
              className="uppercase tracking-tight text-neutral-100 transition-all duration-150 ~text-sm/base hover:underline"
            >
              View case ↗
            </Link>
          </div>
        )}
      </div>
      <h3 className="~text-base/md">{project.title}</h3>
      <p className="uppercase tracking-tight ~text-sm/base">
        {project.year} · {project.company}
      </p>
    </div>
  );
}
