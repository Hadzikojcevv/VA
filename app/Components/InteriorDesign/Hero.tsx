import React from "react";
import Overlay from "../Common/Overlay";

const Hero = () => {
  return (
    <section className="bg-[url('/common/designHero.jpg')] h-[40dvh] lg:h-[calc(100dvh-88px)] bg-cover bg-bottom">

      <Overlay className="flex justify-center items-center font-titles text-white">
        <h1 className="text-4xl 2xl:text-[100px] uppercase text-center font-bold tracking-tighter font-titles w-[80%] m-auto">
          Tuka moze da stoi edna slika ili da se menuvaat 
        </h1>
        <></>
      </Overlay>
    </section>
  );
};

export default Hero;
