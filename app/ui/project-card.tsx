"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96], // Custom easing
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96], // Custom easing
    },
  },
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group"
    >
      <motion.div
        layout
        className={`relative mb-2 w-full overflow-hidden rounded-1 ${
          project.size === "small"
            ? "h-[22rem]"
            : project.size === "medium"
              ? "h-[32rem]"
              : "h-[64rem]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized={project.isGif}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33.33vw, 25vw"
        />
        {project.caseStudy && (
          <motion.div
            layout
            className="absolute inset-0 flex items-center justify-center bg-neutral-900/80 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
          >
            <Link
              href={project.caseStudy}
              className="uppercase tracking-tight text-neutral-100 transition-all duration-150 ~text-sm/base hover:underline"
            >
              READ CASE ↗
            </Link>
          </motion.div>
        )}
      </motion.div>
      <motion.div layout className="mb-1 flex items-center justify-between">
        <motion.h3 layout className="~text-base/md">
          {project.title}
        </motion.h3>
        <motion.span
          layout
          className="~text-xs/sm rounded-1 bg-neutral-100 bg-opacity-5 px-2 uppercase tracking-tight text-neutral-100"
        >
          {project.caseStudy ? "case" : "shot"}
        </motion.span>
      </motion.div>
      <motion.p layout>
        {project.year} · {project.company}
      </motion.p>
    </motion.div>
  );
}
