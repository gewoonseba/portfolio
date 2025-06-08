"use client";

import VideoAutoPlayer from "@/app/components/data-view/video-autoplayer";
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
    <div className="text-primary border-secondary relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-md">
      {project.media.type === "image" ? (
        <Image
          src={project.media.src}
          alt={project.title}
          fill
          className="bg-btn-secondary-hover object-cover"
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
        <h3 className="text-md text-primary">{project.title}</h3>
        <span className="text-secondary text-base tracking-tight uppercase transition-all duration-150 group-hover:underline">
          {project.type}{" "}
          {project.link || project.id === "smvd-refresh" ? "→" : ""}
        </span>
      </div>
      <p className="text-base tracking-tight">
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

  // Default case: no link
  return (
    <div className="block">
      <Content />
    </div>
  );
}
