import Overlay from "@/app/Components/Common/Overlay";
import TypingEffect from "@/app/Components/Common/TypingEffect";
import React from "react";

const Ceilings = () => {
  return (
    <main className="pt-[68px] h-[100dvh]  bg-[url('/common/caro/Stretchceelings.webp')] bg-cover bg-no-repeat bg-top ">
      <Overlay className="!bg-black/30 flex justify-center items-center">
        <TypingEffect
          className="text-white/90"
          words={[
            "Coming Soon...",
            "Modern...",
            "Ellegant...",
            "Futuristic...",
            "Stretch Ceilings!",
          ]}
        />
      </Overlay>
    </main>
  );
};

export default Ceilings;
