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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div
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
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized={project.isGif}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {project.caseStudy && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <Link
              href={project.caseStudy}
              className="uppercase tracking-tight text-neutral-100 transition-all duration-150 ~text-sm/base hover:underline"
            >
              READ CASE ↗
            </Link>
          </div>
        )}
      </div>
      <div className="mb-1 flex items-center justify-between">
        <h3 className="font-medium text-base text-neutral-100">
          {project.title}
        </h3>
        <span className="rounded-1 bg-neutral-100 bg-opacity-5 px-2 text-[10px] font-normal text-neutral-100">
          {project.caseStudy ? "CASE" : "SHOT"}
        </span>
      </div>
      <p className="text-neutral-500 text-sm">
        {project.year} · {project.company}
      </p>
    </motion.div>
  );
}
