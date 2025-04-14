import Link from "next/link";
import React from "react";

const AboutUsSection = () => {
  return (
    <section className="bg-[url('/common/test.jpg')] h-[100dvh] bg-cover bg-no-repeat">
      <div className="h-full w-full bg-black/25 flex items-center justify-end ">
        <div className="backdrop-blur-md bg-white/15 rounded-xl p-3 lg:p-6 2xl:p-10 shadow-lg m-auto lg:mr-[12vw] w-[80%]  lg:w-[35%] relative">
          <p className="absolute bottom-[2%] right-[2%] font-thin tracking-widest text-white uppercase opacity-60">
            VA Concepts
          </p>

          <h2 className="text-white text-4xl lg:text-5xl 2xl:text-6xl uppercase font-bold tracking-tighter text-center md:text-left">
            Modern Style
          </h2>
          <h2 className="text-white text-4xl lg:text-5xl 2xl:text-6xl uppercase font-bold tracking-tighter lg:ml-10 mb-8 lg:mb-10 text-center md:text-left">
            Timeless Charm
          </h2>

          <p className="text-white/80  w-[90%] 2xl:w-[60%] mb-4 tracking-tighter text-lg md:text-xl lg:text-xl leading-[125%]">
            Discover VA Concepts to the max, feature your home with our designs
            featuring unique, modern, timeless sofas, chairs, kitchen elements,
            decorative touches from our products catalog.
          </p>

          <p className="text-white/80  w-[90%] 2xl:w-[60%] tracking-tighter text-lg md:text-xl lg:text-xl leading-[125%]">
            Add a fresh touch to you favorite kitchen spot with our striking
            tables, sideboard and spice up your living with a chic coffee table
            and our Stretch Ceilings.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6 w-[40%] ">
            <Link
              href="/design-projects"
              className="px-5 py-3 lg:px-6 font-semibold tracking-tighter bg-main-dark/90 text-white  hover:bg-main-dark transition text-center"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 lg:px-6 font-semibold tracking-tighter bg-main-dark/90 text-white  hover:bg-main-dark transition text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
