import { getProjects } from "@/app/Components/InteriorDesign/ProjectsSection";
import Image from "next/image";
import React from "react";
import {getTranslations} from "next-intl/server";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const t = await getTranslations();
  const { id } = await params;
  const projects = getProjects(t);
  const project = projects.find((pro) => pro.id === +id);

  if (!project) {
    return null;
  }

  return (
    <>
      <div className="hidden lg:flex flex-col lg:flex-row h-screen overflow-hidden py-[88px]">
        <div className="w-[100%] lg:w-[70%] h-[100dvh] overflow-y-scroll order-2 lg:order-1 scrollbar-hidden">
          <div className="px-8 md:pt-0 space-y-8 ">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative">
                <p className="absolute bottom-1 right-1 font-thin uppercase tracking-widest text-white/70">VA Concepts</p>
                <Image src={image} alt={`Gallery Image ${index}`} className="w-full shadow-lg" width={3000} height={200} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[30%] h-[100dvh] sticky top-0 bg-white p-8 shadow-lg overflow-hidden lg:overflow-auto order-1 lg:order-2 pb-[100px] scrollbar-hidden">
          <h1 className="text-3xl lg:text-5xl tracking-tighter font-black mb-6">{project.title}</h1>

          <p className="text-base lg:text-xl font-bold text-main-dark/80">
            {t("designProject.date")}:{" "}
            <span className="text-main-dark/60 tracking-tighter font-semibold text-lg lg:text-xl">{project.date}</span>
          </p>
          <p className="text-base lg:text-xl font-bold text-main-dark/80 mb-6">
            {t("designProject.location")}:{" "}
            <span className="text-main-dark/60 tracking-tighter font-semibold text-lg lg:text-xl">{project.location}</span>
          </p>
          {project.desc1 && <p className="text-main-dark/80 text-sm md:text-base">{project.desc1}</p>}
          {project.desc2 && <p className="text-main-dark/80 my-4 lg:my-6 text-sm md:text-base">{project.desc2}</p>}
          {project.desc3 && <p className="text-main-dark/80 text-sm md:text-base">{project.desc3}</p>}
        </div>
      </div>

      <div className="lg:hidden py-[88px] w-[90%] m-auto">
        <div className="relative">
          <Image
            src={"/common/VA_logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="absolute top-0 right-0 w-[50px]"
          />
          <h1 className="text-4xl lg:text-5xl tracking-tighter font-black mb-6">{project.title}</h1>

          <p className="text-base lg:text-xl font-bold text-main-dark/80">
            {t("designProject.date")}:{" "}
            <span className="text-main-dark/60 tracking-tighter font-semibold text-lg lg:text-xl">{project.date}</span>
          </p>
          <p className="text-base lg:text-xl font-bold text-main-dark/80 mb-6">
            {t("designProject.location")}:{" "}
            <span className="text-main-dark/60 tracking-tighter font-semibold text-lg lg:text-xl">{project.location}</span>
          </p>
          {project.desc1 && <p className="text-main-dark/80 text-sm md:text-base">{project.desc1}</p>}
          {project.desc2 && <p className="text-main-dark/80 my-4 lg:my-6 text-sm md:text-base">{project.desc2}</p>}
          {project.desc3 && <p className="text-main-dark/80 text-sm md:text-base">{project.desc3}</p>}
        </div>

        <div className=" pt-6 space-y-8">
          {project.gallery.map((image, index) => (
            <Image key={index} src={image} alt={`Gallery Image ${index}`} className="w-full shadow-lg" width={3000} height={200} />
          ))}
        </div>
      </div>
    </>
  );
}

