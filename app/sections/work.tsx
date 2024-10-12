"use client";

import { ProjectCard } from "@/app/ui/project-card";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  year: number;
  company: string;
  image: string;
  caseStudy?: string;
  size: "small" | "medium" | "large";
  isGif: boolean;
};

const projects: Omit<Project, "size" | "isGif">[] = [
  {
    id: "1",
    title: "Search bar prototype in Play",
    year: 2024,
    company: "Smooved",
    image: "/img/design/izimi.jpg",
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

type FilterType = "ALL" | "CASES" | "SHOTS";

const sizeClasses = {
  small: "h-48",
  medium: "h-64",
  large: "h-80",
};

export default function Work() {
  const [filter, setFilter] = useState<FilterType>("ALL");

  const projectsWithSizes: Project[] = useMemo(() => {
    const sizes: ("small" | "medium" | "large")[] = [
      "small",
      "medium",
      "large",
    ];
    return projects.map((project) => ({
      ...project,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      isGif: project.image.endsWith(".gif"),
    }));
  }, []);

  const filteredProjects = projectsWithSizes.filter((project) => {
    if (filter === "ALL") return true;
    if (filter === "CASES") return project.caseStudy !== undefined;
    if (filter === "SHOTS") return project.caseStudy === undefined;
    return true;
  });

  return (
    <>
      <h2 className="pb-4">Work</h2>
      <div className="mb-8">
        <nav>
          <ul className="flex space-x-4 text-sm">
            {(["ALL", "CASES", "SHOTS"] as const).map((option) => (
              <li
                key={option}
                className={`cursor-pointer ${
                  filter === option
                    ? "text-neutral-100"
                    : "text-neutral-500 hover:text-neutral-100"
                } transition-colors`}
                onClick={() => setFilter(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <motion.div layout className="flex flex-col gap-6 sm:flex-row">
        {[0, 1, 2].map((columnIndex) => (
          <motion.div
            key={columnIndex}
            layout
            className={`flex flex-col gap-6 ${
              columnIndex === 0
                ? "sm:w-1/2 lg:w-1/3"
                : columnIndex === 1
                ? "sm:w-1/2 lg:w-1/3"
                : "hidden lg:flex lg:w-1/3"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects
                .filter((_, index) => index % 3 === columnIndex)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
