import React from "react";
import Hero from "../../Components/InteriorDesign/Hero";
import ProjectsSection from "../../Components/InteriorDesign/ProjectsSection";
import Link from "next/link";

const Design = () => {
  return (
    <main className="m-auto pt-[69px]">
      <Hero />

      <div className="w-[90%] m-auto lg:w-full">
        <ProjectsSection />
        <div className="flex justify-center items-center pb-[15vh]">
          <Link
            href={"/design-projects"}
            className="bg-main-dark text-white text-xl tracking-tighter py-4 px-6 m-auto font-titles font-bold uppercase"
          >
            All Projects
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Design;
