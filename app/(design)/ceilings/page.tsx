import TypingEffect from "@/app/Components/Common/TypingEffect";
import React from "react";

const Ceilings = () => {
  return (
    <main className="pt-[88px] h-[100dvh] flex justify-center items-center bg-[url('/common/stretch2.png')] bg-cover bg-no-repeat bg-top">
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
    </main>
  );
};

export default Ceilings;
