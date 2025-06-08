"use client";

import VideoAutoPlayer from "@/app/components/data-view/video-autoplayer";
import NavButton from "@/app/components/nav/nav-button";
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
    <div className="border-secondary relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-md border">
      {project.media.type === "image" ? (
        <Image
          src={project.media.src}
          alt={project.title}
          fill
          className="bg-secondary object-cover"
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
      <div className="flex items-center justify-between pb-1">
        <h3 className="leading-none tracking-tight">{project.title}</h3>
        {project.link ? (
          <NavButton
            label={project.type}
            href={project.link}
            direction="forward"
            asSpan={true}
          />
        ) : (
          <span className="text-secondary uppercase-tight text-sm leading-none">
            {project.type}
          </span>
        )}
      </div>
      <p className="leading-none tracking-tight">
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
