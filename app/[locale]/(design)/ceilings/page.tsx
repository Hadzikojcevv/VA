import CeilingsHero from "@/app/Components/Ceilings/CeilingsHero";
import SectionTitle from "@/app/Components/Common/SectionTitle";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function Ceilings() {
  const t = await getTranslations();
  const slogans = t.raw("ceilingsPage.words") as string[];

  return (
    <main>
      <CeilingsHero videoSrc="/common/hero.mp4" slogans={slogans} />

      <section className="py-14 lg:py-20">
        <div className="w-[92%] max-w-5xl mx-auto">
          <SectionTitle text={t("ceilingsPage.whyChooseTitle")} />

          <p className="mt-6 text-center font-normal text-main-dark/80 tracking-tighter text-lg lg:text-xl leading-[125%] max-w-3xl mx-auto">
            {t("ceilingsPage.whyChooseDesc")}
          </p>
        </div>
      </section>
    </main>
  );
}

