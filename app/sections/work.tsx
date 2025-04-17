"use client";

import { Project, ProjectCard } from "@/app/ui/project-card";

export const projects: Project[] = [
  {
    id: "smvd-refresh",
    title: "Refreshed Mover Dashboard",
    type: "Case Study",
    year: 2025,
    company: "Smooved",
    media: {
      type: "video",
      src: "/img/design/mover-redesign/mover-redesign.mp4",
    },
  },
  {
    id: "smvd-doc",
    title: "Filling out PDF documents",
    type: "Prototype",
    year: 2024,
    company: "Smooved",
    media: {
      type: "video",
      src: "/img/design/fluid-doc.mp4",
    },
  },
  {
    id: "smvd-companion",
    title: "Entering meter info",
    type: "Prototype",
    year: 2024,
    company: "Smooved",
    media: {
      type: "video",
      src: "/img/design/companion.mp4",
    },
  },
  {
    id: "itp-izimi",
    title: "Izimi app and web platform",
    type: "Product Design",
    year: 2023,
    company: "In The Pocket",
    media: {
      type: "image",
      src: "/img/design/izimi.png",
    },
  },
  {
    id: "itp-tpvision",
    title: "TP Vision Wave web platform",
    type: "Product Design",
    year: 2022,
    company: "In The Pocket",
    media: {
      type: "image",
      src: "/img/design/tpvision.png",
    },
  },
  {
    id: "itp-multipharma",
    title: "Multipharma app",
    type: "Product Design",
    year: 2021,
    company: "In The Pocket",
    media: {
      type: "image",
      src: "/img/design/multipharma.png",
    },
  },
];

export default function Work() {
  return (
    <section className="md:py-24 py-16">
      <h2 className="text-3xl font-bold border-b border-neutral-100/5 pb-3">
        Work
      </h2>
      <div className="grid grid-cols-1 gap-12 pt-5 md:grid-cols-2 3xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
