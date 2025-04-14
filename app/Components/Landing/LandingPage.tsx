import Link from "next/link";
import React from "react";
import Overlay from "../Common/Overlay";

const LandingPage = () => {
  return (
    <section className="flex flex-col lg:flex-row h-[100dvh] max-h-screen text-white overflow-hidden 1">
      <div className="basis-1/2 flex lg:flex-col justify-between order-1 lg:order-2 1">
        <Link
          href={"/ceilings"}
          className={`bg-[url('/common/stretchCeiling.jpeg')] bg-cover bg-no-repeat bg-right lg:bg-top text-center basis-1/2 font-titles flex justify-center items-center leading-11 text-6xl order-2 lg:order-1 lg:text-[80px] hover:lg:text-[90px] font-bold uppercase tracking-tighter text-white/85 hover:text-white transition-all ease-in-out duration-100 lg:leading-15 `}
        >
          <Overlay className="w-full h-full bg-black/20 flex justify-center items-center">
            <>
              Stretch <br /> Ceilings
            </>
          </Overlay>
        </Link>
        <Link
          href={"/sourcing"}
          className={`bg-[url('/common/productSourcing.jpg')] bg-cover bg-no-repeat lg:bg-center text-center basis-1/2 font-titles flex justify-center items-center leading-11 text-6xl order-2 lg:order-1 lg:text-[80px] hover:lg:text-[90px] font-bold uppercase tracking-tighter text-white/85 hover:text-white transition-all ease-in-out duration-100 lg:leading-15 `}
        >
          <Overlay className="w-full h-full bg-black/20 flex justify-center items-center">
            Product <br /> Sourcing
          </Overlay>
        </Link>
      </div>
      <Link
        href={"/interior-design"}
        className="bg-[url('/common/interiorDesign.jpg')] bg-cover bg-center bg-no-repeat basis-1/2 text-center font-titles flex justify-center items-center leading-11 text-6xl order-2 lg:order-1 lg:text-[80px] hover:lg:text-[90px] font-bold uppercase tracking-tighter text-white/85 hover:text-white transition-all ease-in-out duration-100 lg:leading-15 "
      >
        <Overlay className="w-full h-full bg-black/20 flex justify-center items-center ">
            Interior <br /> Design
        </Overlay>
      </Link>
    </section>
  );
};

export default LandingPage;
