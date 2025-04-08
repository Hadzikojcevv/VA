import React from "react";
import Image from "next/image";

export const images = [
  "/AS/AN/img12.jpg",
  "/AS/1.jpg",
  "/AS/3d_stretch_ceiling.2e16d0ba.fill-377x210.jpg",

  "/AS/3.jpg",
  "/AS/Beti Salon render 2.jpg",

  "/AS/4.jpg",

  "/AS/5.jpg",
  "/AS/AN/img9.jpg",
  "/AS/AN/img10.jpg",
  "/AS/6.jpg",
  "/AS/1.jpg",
  "/AS/AN/img11.jpg",
  "/AS/2.jpg",
  "/AS/spalna soba 6.jpg",
  "/AS/AN/img12.jpg",

  "/AS/4.jpg",
  // "/AS/5.jpg",
  "/AS/6.jpg",
  "/AS/3d_stretch_ceiling.2e16d0ba.fill-377x210.jpg",

  // add more image paths as needed
];

const ProjectsPage = () => {
  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4 pt-[68px]">
        {images.map((src, i) => (
          <div
            key={i}
            className="break-inside-avoid overflow-hidden relative group"
          >
            <Image
              src={src}
              alt={`grid-${i}`}
              width={1000}
              height={200}
              className="w-full h-auto object-cover fill-black hover:brightness-50 brightness-100 transition-all ease-in-out duration-250 hover:scale-105"
            />
            <h2 className="absolute hidden group-hover:block top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-title font-bold text-2xl text-white uppercase">
              Title
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
