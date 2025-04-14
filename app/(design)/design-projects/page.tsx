"use client";
import React from "react";
import Image from "next/image";
import { projects } from "@/app/Components/InteriorDesign/ProjectsSection";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectsPage = () => {
  return (
    <>
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
                <h2 className=" font-bold text-5xl text-white uppercase">
                  {project.title}
                </h2>
                <h3 className="font-thin text-lg text-white tracking-tighter">
                  {project.location} - {project.date}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
};

export default ProjectsPage;
