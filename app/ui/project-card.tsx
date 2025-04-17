"use client";

import VideoAutoPlayer from "@/app/ui/video-autoplayer";
import Image from "next/image";
import Link from "next/link";

export type Project = {
  id: string;
  title: string;
  year: number;
  company: string;
  type: string;
  media: {
    type: "image" | "video";
    src: string;
  };
  link?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const MediaContent = () => (
    <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-1 shadow-border">
      {project.media.type === "image" ? (
        <Image
          src={project.media.src}
          alt={project.title}
          fill
          className="bg-neutral-800 object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <VideoAutoPlayer src={project.media.src} />
      )}
    </div>
  );

  const Content = () => (
    <>
      <MediaContent />
      <div className="flex items-center justify-between">
        <h3 className="~text-base/md">{project.title}</h3>
        <span className="uppercase tracking-tight text-neutral-200 transition-all duration-150 ~text-sm/base group-hover:underline">
          {project.type}{" "}
          {project.link || project.id === "smvd-refresh" ? "→" : ""}
        </span>
      </div>
      <p className="tracking-tight ~text-sm/base">
        {project.year} · {project.company}
      </p>
    </>
  );

  // External link case
  if (project.link) {
    return (
      <Link href={project.link} className="group block">
        <Content />
      </Link>
    );
  }

  // Internal project page case (only for smvd-refresh for now)
  if (project.id === "smvd-refresh") {
    return (
      <Link href={`/project/refreshed-mover-dashboard`} className="group block">
        <Content />
      </Link>
    );
  }

  // Default case: no link
  return (
    <div className="block">
      <Content />
    </div>
  );
}
