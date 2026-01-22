import CeilingsHero from "@/app/Components/Ceilings/CeilingsHero";
import WhyChooseSection from "@/app/Components/Ceilings/WhyChooseSection";
import Designs from "@/app/Components/Ceilings/Designs";
import Colors from "@/app/Components/Ceilings/Colors";
import BecomeAPartner from "@/app/Components/Ceilings/BecomeAPartner";
import { getTranslations } from "next-intl/server";
import React from "react";

const ceilingDesignImages = [
  "/ceiling_designs/Star_Ceiling_1728x.webp",
  "/ceiling_designs/Perimeter_LED_1296x.webp",
  "/ceiling_designs/Luminous_Ceiling_1728x.webp",
  "/ceiling_designs/Linear_Lights_1296x.webp",
  "/ceiling_designs/Mirror_Ceiling_2100x.webp",
  "/ceiling_designs/Printed_Design_Ceiling_1512x.webp",
  "/ceiling_designs/Clasic_ceiling_1728x.webp",
];

const ceilingColorImages = [
  "/colours/Beige glossy.jpeg",
  "/colours/Beige Satin.jpeg",
  "/colours/Black glossy.png",
  "/colours/Black matte.png",
  "/colours/Black satin.jpeg",
  "/colours/Galaxy film.png",
  "/colours/Silver Glossy.jpeg",
  "/colours/Silver satin.jpeg",
  "/colours/White glossy.jpeg",
  "/colours/White Matte.png",
  "/colours/white Satin.jpeg",
];

export default async function Ceilings() {
  const t = await getTranslations();
  const slogans = t.raw("ceilingsPage.words") as string[];

  return (
    <main>
      <CeilingsHero videoSrc="/common/hero.mp4" slogans={slogans} />
      <WhyChooseSection />
      <Designs images={ceilingDesignImages} />
      <Colors images={ceilingColorImages} />
      <BecomeAPartner />
    </main>
  );
}

