"use client";

import Image from "next/image";
import Link from "next/link";

export type Project = {
  id: string;
  title: string;
  year: number;
  company: string;
  media: {
    type: "image" | "video";
    src: string;
  };
  caseStudy?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const MediaContent = () => (
    <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-1 shadow-border">
      <Image
        src={project.media.src}
        alt={project.title}
        fill
        className="bg-neutral-800 object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  if (project.caseStudy) {
    return (
      <Link href={project.caseStudy} className="group block">
        <MediaContent />
        <div className="flex items-center justify-between">
          <h3 className="~text-base/md">{project.title}</h3>
          <span className="uppercase tracking-tight text-neutral-100 transition-all duration-150 ~text-sm/base group-hover:underline">
            View case ↗
          </span>
        </div>
        <p className="uppercase tracking-tight ~text-sm/base">
          {project.year} · {project.company}
        </p>
      </Link>
    );
  }

  return (
    <div>
      <MediaContent />
      <div className="flex items-center justify-between">
        <h3 className="~text-base/md">{project.title}</h3>
      </div>
      <p className="uppercase tracking-tight ~text-sm/base">
        {project.year} · {project.company}
      </p>
    </div>
  );
}
