import Image from "next/image";
import React from "react";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations();
  const bodyParts = t("notFound.body").split("\n");

  return (
    <section className="h-[100dvh] flex flex-col items-center justify-center text-center">
      <Image src={"/common/VA_logo.png"} alt="Logo" width={300} height={300} className="w-[150px] mb-6" />
      <h1 className="text-4xl lg:text-5xl font-black tracking-tighter">{t("notFound.title")}</h1>
      <p className="text-lg lg:text-xl tracking-tighter py-6 ">
        {bodyParts[0]}
        <br />
        {bodyParts[1] ?? ""}
      </p>
      <Link href={"/"} className="px-10 py-4 bg-main-dark text-white font-semibold tracking-tighter uppercase">
        {t("notFound.home")}
      </Link>
    </section>
  );
}

