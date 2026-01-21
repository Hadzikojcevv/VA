import React from "react";
import { getTranslations } from "next-intl/server";
import { getProjects } from "@/app/Components/InteriorDesign/ProjectsSection";
import ProjectsGrid from "./ProjectsGrid";

export default async function ProjectsPage() {
  const t = await getTranslations();
  const projects = getProjects(t);
  
  return <ProjectsGrid projects={projects} />;
}
