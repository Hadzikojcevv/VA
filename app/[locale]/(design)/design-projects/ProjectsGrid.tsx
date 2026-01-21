"use client";

import React from "react";
import Image from "next/image";
import { cubicBezier, motion, type Variants } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Project } from "@/app/Types/Types";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: cubicBezier(0.16, 1, 0.3, 1) } },
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.section
      className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4 w-[90%] m-auto lg:w-full pt-[88px] pb-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          className="break-inside-avoid overflow-hidden relative group"
          variants={cardVariants}
        >
          <Link href={`/design-projects/${project.id}`}>
            <p className="absolute bottom-1 right-1 z-50 font-thin tracking-widest text-white uppercase opacity-60 ease-in-out group-hover:opacity-100">
              VA Concepts
            </p>

            <Image
              src={project.gallery[0]}
              alt={`grid-${i}`}
              width={1000}
              height={200}
              className="w-full h-auto object-cover fill-black hover:brightness-50 brightness-100 transition-all ease-in-out duration-250 hover:scale-105"
            />
            <div className="absolute hidden group-hover:block top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className=" font-bold text-5xl text-white uppercase">{project.title}</h2>
              <h3 className="font-thin text-lg text-white tracking-tighter">
                {project.location} - {project.date}
              </h3>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
}
