"use client";

import { Project, ProjectCard } from "@/app/ui/project-card";

const projects: Project[] = [
  {
    id: "smvd-doc",
    title: "Filling out documents",
    year: 2024,
    company: "Smooved",
    media: {
      type: "video",
      src: "/img/design/fluid-doc.mp4",
    },
  },
  {
    id: "itp-izimi",
    title: "Izimi app and web platform",
    year: 2023,
    company: "In The Pocket",
    media: {
      type: "image",
      src: "/img/design/izimi.png",
    },
    caseStudy: "https://www.inthepocket.com/work/izimi",
  },
  {
    id: "itp-tpvision",
    title: "TP Vision Wave web platform",
    year: 2022,
    company: "In The Pocket",
    media: {
      type: "image",
      src: "/img/design/tpvision.png",
    },
    caseStudy: "https://www.inthepocket.com/work/tp-vision",
  },
  {
    id: "itp-multipharma",
    title: "Multipharma app",
    year: 2021,
    company: "In The Pocket",
    media: {
      type: "image",
      src: "/img/design/multipharma.png",
    },
    caseStudy: "https://www.inthepocket.com/work/multipharma",
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
