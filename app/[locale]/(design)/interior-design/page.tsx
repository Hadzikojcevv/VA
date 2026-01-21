import React from "react";
import Hero from "../../../Components/InteriorDesign/Hero";
import ProjectsSection from "../../../Components/InteriorDesign/ProjectsSection";
import ContactSection from "@/app/Components/InteriorDesign/ContactSection";
import AboutUsSection from "@/app/Components/InteriorDesign/AboutUsSection";

export default function InteriorDesign() {
  return (
    <main className="m-auto pt-[69px]">
      <Hero />
      <ProjectsSection />
      <AboutUsSection />
      <ContactSection />
    </main>
  );
}

