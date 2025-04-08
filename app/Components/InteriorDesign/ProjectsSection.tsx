import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleProjectCard from "./SingleProjectCard";
import { Project } from "@/app/Types/Types";
// import Image from "next/image";
// import { images } from "@/app/(design)/design-projects/page";

export const projects: Project[] = [
  {
    id: 1,
    title: "AS",
    date: "2025",
    location: "Skopje",
    desc1:
      "Located in Skopje,North Macedonia the apartment is designed for a young married couple.",
    desc2:
      "It features a living-dining room and kitchen, bedroom,bathroom and balcony.This cozy 55 m² with its light, neutral color palette, the space feels open and airy, creating a warm and inviting atmosphere. The apartment features an open-plan living area that seamlessly blends the living room, dining space, and kitchen, making it perfect for sharing quality moments together.",
    gallery: [
      "/AS/1.jpg",
      "/AS/2.jpg",
      "/AS/3.jpg",
      "/AS/4.jpg",
      "/AS/5.jpg",
      "/AS/6.jpg",
      "/AS/7.jpg",
      "/AS/8.jpg",
      "/AS/9.jpg",
    ],
  },
  {
    id: 2,
    title: "AS 2",
    date: "2025",
    location: "Skopje",
    desc1:
      "Located in Skopje,North Macedonia the apartment is designed for a young married couple.",
    desc2:
      "It features a living-dining room and kitchen, bedroom,bathroom and balcony.This cozy 55 m² with its light, neutral color palette, the space feels open and airy, creating a warm and inviting atmosphere. The apartment features an open-plan living area that seamlessly blends the living room, dining space, and kitchen, making it perfect for sharing quality moments together.",
    gallery: [
      "/AS/1.jpg",
      "/AS/2.jpg",
      "/AS/3.jpg",
      "/AS/4.jpg",
      "/AS/5.jpg",
      "/AS/6.jpg",
      "/AS/7.jpg",
      "/AS/8.jpg",
      "/AS/9.jpg",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="defPadding">
      <div className="w-[95%] m-auto">
      <SectionTitle text="Projects" />

      </div>

      {/* <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {images.map((src, i) => (
          <div key={i} className="break-inside-avoid overflow-hidden relative">
            <Image
              src={src}
              alt={`grid-${i}`}
              width={1000}
              height={200}
              className="w-full h-auto object-cover fill-black brightness-85 hover:brightness-100 transition-all ease-in-out duration-150"
            />
            <h2 className="absolute hidden hover:block top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              Title
            </h2>
          </div>
        ))}
      </div> */}

      <div className="mt-[15vh]">
        {projects.map((project, idx: number) => (
          <SingleProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
