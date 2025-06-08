"use client";

import { Project, ProjectCard } from "@/app/components/data-view/project-card";
import H2Underline from "@/app/components/typography/h2-underline";

export const projects: Project[] = [
  {
    id: "smvd-refresh",
    title: "Refreshed Mover Dashboard",
    type: "Showcase",
    year: 2025,
    company: "Smooved",
    media: {
      type: "video",
      src: "/img/design/mover-redesign/mover-redesign.mp4",
    },
    link: "/project/refreshed-mover-dashboard",
  },
  {
    id: "partycam",
    title: "PartyCam",
    type: "Showcase",
    year: 2025,
    company: "Personal",
    media: {
      type: "image",
      src: "/img/design/partycam/partycam-cover.png",
    },
    link: "/project/partycam",
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
    <section>
      <H2Underline>Work</H2Underline>
      <div className="3xl:grid-cols-3 grid grid-cols-1 gap-12 pt-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
