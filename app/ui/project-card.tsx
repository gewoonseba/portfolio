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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99], // Custom easing
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="group"
      layout
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        layout
        variants={itemVariants}
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
      <motion.div
        layout
        variants={itemVariants}
        className="mb-1 flex items-center justify-between"
      >
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
      <motion.p layout variants={itemVariants}>
        {project.year} · {project.company}
      </motion.p>
    </motion.div>
  );
}
