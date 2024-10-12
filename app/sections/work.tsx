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
    title: "Filling in forms on mobile",
    year: 2024,
    company: "Smooved",
    image: "/img/design/fluid-docs.gif",
  },
  {
    id: "2",
    title: "Mobile menu interactions",
    year: 2024,
    company: "Smooved",
    image: "/img/design/izimi.jpg",
  },
  {
    id: "3",
    title: "Introducing personal reviews",
    year: 2024,
    company: "Smooved",
    image: "/img/design/izimi.jpg",
    caseStudy: "#",
  },
  {
    id: "4",
    title: "Refreshed social posts",
    year: 2024,
    company: "Smooved",
    image: "/img/design/izimi.jpg",
  },
  {
    id: "5",
    title: "Izimi app and web platform",
    year: 2022,
    company: "In The Pocket",
    image: "/img/design/izimi.jpg",
    caseStudy: "#",
  },
  {
    id: "6",
    title: "TP Vision Wave web platform",
    year: 2022,
    company: "In The Pocket",
    image: "/img/design/izimi.jpg",
    caseStudy: "#",
  },
  {
    id: "7",
    title: "Multipharma app",
    year: 2022,
    company: "In The Pocket",
    image: "/img/design/izimi.jpg",
    caseStudy: "#",
  },
];

export default function Work() {
  return (
    <section className="md:py-24 py-16">
      <h2 className="text-3xl font-bold pb-8">Work</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
