import React from "react";
import Overlay from "../Common/Overlay";
import TypingEffect from "../Common/TypingEffect";

type CeilingsHeroProps = {
  videoSrc: string;
  slogans: string[];
  className?: string;
};

export default function CeilingsHero({
  videoSrc,
  slogans,
  className,
}: CeilingsHeroProps) {
  return (
    <section
      className={`relative w-screen h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden ${
        className ?? ""
      }`}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />

      <div className="absolute inset-0">
        <Overlay className="!bg-black/30 flex justify-center items-center">
          <TypingEffect className="text-white/90" words={slogans} />
        </Overlay>
      </div>
    </section>
  );
}
