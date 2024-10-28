"use client";

import { ProjectCard } from "@/app/ui/project-card";

type Project = {
  id: string;
  title: string;
  year: number;
  company: string;
  image: string;
  caseStudy?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Izimi app and web platform",
    year: 2023,
    company: "In The Pocket",
    image: "/img/design/izimi.jpg",
    caseStudy: "https://www.inthepocket.com/work/izimi",
  },
  {
    id: "2",
    title: "TP Vision Wave web platform",
    year: 2022,
    company: "In The Pocket",
    image: "/img/design/tpvision.jpg",
    caseStudy: "https://www.inthepocket.com/work/tp-vision",
  },
  {
    id: "3",
    title: "Multipharma app",
    year: 2021,
    company: "In The Pocket",
    image: "/img/design/multipharma.jpg",
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
