'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import React from "react";
// import Overlay from "../Common/Overlay";
import Image from 'next/image';
import { projects } from './ProjectsSection';

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
        {projects.map((project, index) => (
          <SwiperSlide key={index} className='relative'>
            <Image
              src={project.gallery[0]}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
              unoptimized
            />
            <p
              className={`absolute bottom-2 ${
                project.bgClass === "cover" ? "right-2" : "right-[8.5%]"
              } font-thin text-2xl md:text-4xl lg:text-6xl tracking-widest text-white/60`}
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
