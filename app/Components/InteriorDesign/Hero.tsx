"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

import React from "react";
import Image from "next/image";

const heroCaroImages: string[] = [
  "/common/caro/dnevnasoba1.jpg",
  "/common/caro/dnevnasoba2.jpg",
  "/common/caro/renderkujnaobraboten.jpg",
  "/common/caro/spalnasoba4.jpg",
  "/common/caro/BetiSalonrender1.jpg",
  "/common/caro/BetiSalonrender2.jpg",
  "/common/caro/betisalonrender3.jpg",
  "/common/caro/betisalonrender4.jpg",
  "/common/caro/biro2.jpg",
  "/common/caro/blagojasoba1.jpg",
  "/common/caro/blagojasoba4.jpg",
  // "/common/caro/Productsourcing.webp",
  "/common/caro/STANIMG1.jpg",
  "/common/caro/STANIMG3.jpg",
  "/common/caro/STANIMG14.jpg",
  "/common/caro/STANIMG15.jpg",
  "/common/caro/STANIMG16.jpg",
];

const Hero = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        mousewheel
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        className="h-[calc(100dvh-64px)]"
      >
        {heroCaroImages.map((project, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={project}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <p
              className={`absolute bottom-2 right-2 font-thin text-2xl md:text-4xl lg:text-6xl tracking-widest text-white/60`}
            >
              VA CONCEPTS
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    // <section className="bg-[url('/common/designHero.jpg')] h-[calc(100dvh-68px)] bg-cover bg-bottom">

    //   <Overlay className="flex justify-center items-center font-titles text-white">
    //     <h1 className="text-4xl 2xl:text-[100px] uppercase text-center font-bold tracking-tighter font-titles w-[80%] m-auto">
    //       Tuka moze da stoi edna slika ili da se menuvaat
    //     </h1>
    //     <></>
    //   </Overlay>
    // </section>
  );
};

export default Hero;
