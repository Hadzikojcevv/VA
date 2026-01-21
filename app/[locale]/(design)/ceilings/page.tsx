import Overlay from "@/app/Components/Common/Overlay";
import TypingEffect from "@/app/Components/Common/TypingEffect";
import {getTranslations} from "next-intl/server";
import React from "react";

export default async function Ceilings() {
  const t = await getTranslations();
  const words = t.raw("ceilingsPage.words") as string[];

  return (
    <main className="pt-[68px] h-[100dvh]  bg-[url('/common/caro/Stretchceelings.webp')] bg-cover bg-no-repeat bg-top ">
      <Overlay className="!bg-black/30 flex justify-center items-center">
        <TypingEffect className="text-white/90" words={words} />
      </Overlay>
    </main>
  );
}

