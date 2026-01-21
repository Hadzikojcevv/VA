import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleProjectCard from "./SingleProjectCard";
import { Project } from "@/app/Types/Types";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

// Gallery arrays are constant across locales
export const projectGalleries: Record<number, string[]> = {
  1: ["/AS/1.jpg", "/AS/2.jpg", "/AS/3.jpg", "/AS/4.jpg", "/AS/5.jpg", "/AS/6.jpg", "/AS/7.jpg", "/AS/8.jpg", "/AS/9.jpg"],
  2: ["/VH/IMG3.jpg", "/VH/IMG4.jpg", "/VH/IMG5.jpg", "/VH/IMG6.jpg", "/VH/IMG7.jpg", "/VH/IMG8.jpg", "/VH/IMG9.jpg", "/VH/IMG12.jpg", "/VH/kancelarija.jpg", "/VH/kancelarija1.jpg", "/VH/kujna5.jpg", "/VH/office1.jpg", "/VH/OFFICE3.jpg", "/VH/toalet2.jpg", "/VH/toalet.jpg"],
  3: ["/BA/biro2.jpg", "/BA/blagojasoba3.jpg", "/BA/blagojasoba4.jpg", "/BA/blagojasoba1.jpg"],
  4: ["/BABY/deckasoba1.jpg", "/BABY/deckasoba2.jpg", "/BABY/deckasoba3.jpg", "/BABY/deckasoba4.jpg"],
  5: ["/MP/dnevnasoba1.jpg", "/MP/dnevnasoba2.jpg", "/MP/dnevnasoba3.jpg", "/MP/KUJNA4OBR.jpg", "/MP/renderkujnaobraboten.jpg", "/MP/spalnasoba3obr.jpg", "/MP/spalnasoba4.jpg", "/MP/spalnasoba6.jpg", "/MP/spalnasoba1.jpg", "/MP/spalnasoba2.jpg", "/MP/toalet.jpg", "/MP/toalet2.jpg", "/MP/toalet3obr.jpg"],
  6: ["/AN/img9.jpg", "/AN/img10.jpg", "/AN/img11.jpg", "/AN/img12.jpg"],
  7: ["/RN/img6.jpg", "/RN/img7.jpg", "/RN/img8.jpg"],
  8: ["/B10/STANIMG1.jpg", "/B10/STANIMG2.jpg", "/B10/STANIMG3.jpg", "/B10/STANIMG4.jpg", "/B10/STANIMG5.jpg", "/B10/STANIMG6.jpg", "/B10/STANIMG7.jpg", "/B10/STANIMG8.jpg", "/B10/STANIMG9.jpg", "/B10/STANIMG10.jpg", "/B10/STANIMG11.jpg", "/B10/STANIMG12.jpg", "/B10/STANIMG13.jpg", "/B10/STANIMG14.jpg", "/B10/STANIMG15.jpg", "/B10/STANIMG16.jpg", "/B10/STANIMG17.jpg", "/B10/STANIMG18.jpg", "/B10/STANIMG19.jpg", "/B10/STANIMG20.jpg", "/B10/STANIMG21.jpg", "/B10/STANIMG23.jpg", "/B10/STANIMG26.jpg", "/B10/IMG0.jpg"],
  9: ["/HAIRSALON/render1.jpg", "/HAIRSALON/render2.jpg", "/HAIRSALON/render3.jpg", "/HAIRSALON/render4.jpg"]
};

export function getProjects(t: Awaited<ReturnType<typeof getTranslations>>): Project[] {
  const projectIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return projectIds.map((id) => {
    const projectKey = id.toString();
    const project: Project = {
      id,
      title: t(`projects.${projectKey}.title`),
      location: t(`projects.${projectKey}.location`),
      date: t(`projects.${projectKey}.date`),
      desc1: t(`projects.${projectKey}.desc1`),
      gallery: projectGalleries[id],
      bgClass: "cover",
    };
    
    // Add desc2 if it exists in translations
    try {
      const desc2 = t(`projects.${projectKey}.desc2`);
      if (desc2 && desc2 !== `projects.${projectKey}.desc2`) {
        project.desc2 = desc2;
      }
    } catch {}
    
    // Add desc3 if it exists in translations
    try {
      const desc3 = t(`projects.${projectKey}.desc3`);
      if (desc3 && desc3 !== `projects.${projectKey}.desc3`) {
        project.desc3 = desc3;
      }
    } catch {}
    
    return project;
  });
}

const ProjectsSection = async () => {
  const t = await getTranslations();
  const projects = getProjects(t);
  
  return (
    <section className="defPadding w-[90%] m-auto ">
      <SectionTitle text={t("projectsSection.title")} />

      <div className="mt-[15vh]">
        {projects.map((project, idx: number) => (
          <SingleProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
      <div className="flex justify-center items-center pb-[15vh]">
        <Link
          href={"/design-projects"}
          className="bg-main-dark text-white text-xl tracking-tighter py-4 px-6 m-auto font-bold uppercase hover:scale-105 transition ease-in-out drop-shadow-lg"
        >
          {t("projectsSection.all")}
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
