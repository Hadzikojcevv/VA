import React, { useMemo } from "react";
import Overlay from "../Common/Overlay";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const LandingPage = () => {
  const t = useTranslations();

  const stretchCeilingsText = t("landing.stretchCeilings");
  const interiorDesignText = t("landing.interiorDesign");

  const stretchCeilingsParts = useMemo(() => stretchCeilingsText.split("\n"), [stretchCeilingsText]);
  const interiorDesignParts = useMemo(() => interiorDesignText.split("\n"), [interiorDesignText]);

  const renderMultiline = (parts: string[]) =>
    parts.map((part, idx) => (
      <React.Fragment key={idx}>
        {part}
        {idx < parts.length - 1 ? <br /> : null}
      </React.Fragment>
    ));

  return (
    <section className="flex flex-col lg:flex-row h-[100dvh] max-h-screen text-white overflow-hidden gap-1 relative">

      <div className="w-[150px] md:w-[200px] lg:w-[250px] absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 p-1 bg-white rounded-full z-10">
      
      <Image src={"/common/VA_logo.png"} alt="logo" width={250} height={200} />
      </div>
    

      <div className="basis-1/2 flex lg:flex-col justify-between order-1 lg:order-2 gap-1">
        <Link
          href={"/ceilings"}
          className="relative text-center basis-full font-titles flex justify-center items-center leading-11 text-6xl order-2 lg:order-1 lg:text-[80px] font-bold uppercase tracking-tighter text-white/85 hover:text-white transition-[color,transform] ease-in-out duration-300 lg:leading-15 overflow-hidden group"
        >
          <Image
            src="/common/caro/Stretchceelings.webp"
            alt="Stretch Ceilings"
            fill
            className="object-cover object-right lg:object-top"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <Overlay className="w-full h-full bg-black/20 flex justify-center items-center">
            <span className="transform transition-transform duration-300 ease-in-out group-hover:lg:scale-[1.125] will-change-transform">
              {renderMultiline(stretchCeilingsParts)}
            </span>
          </Overlay>
        </Link>
        {/*
          Product Sourcing tile removed.
        */}
      </div>
      <Link
        href={"/interior-design"}
        className="relative bg-center bg-no-repeat basis-1/2 text-center font-titles flex justify-center items-center leading-11 text-6xl order-2 lg:order-1 lg:text-[80px] font-bold uppercase tracking-tighter text-white/85 hover:text-white transition-[color,transform] ease-in-out duration-300 lg:leading-15 overflow-hidden group"
      >
        <Image
          src="/common/interiorDesign.jpg"
          alt="Interior Design"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <Overlay className="w-full h-full bg-black/20 flex justify-center items-center">
          <span className="transform transition-transform duration-300 ease-in-out group-hover:lg:scale-[1.125] will-change-transform">
            {renderMultiline(interiorDesignParts)}
          </span>
        </Overlay>
      </Link>
    </section>
  );
};

export default LandingPage;
