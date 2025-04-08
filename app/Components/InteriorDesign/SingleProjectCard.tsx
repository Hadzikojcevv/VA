"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Project } from "@/app/Types/Types";

interface SingleProjectCardProps {
  project: Project;
  index: number
}

const SingleProjectCard = ({ project, index }: SingleProjectCardProps) => {
  return (
    <div className={`lg:flex justify-center items-center lg:gap-10 mb-[15vh] text-main-dark tracking-tighter `}>
      <div className={`lg:basis-2/5 ${(index + 1) % 2 === 0 ? 'order-1 lg:pr-[10vw]' : 'order-0 lg:pl-[10vw]'}`}>
        <h3 className="text-7xl uppercase font-bold text-main-dark/20">AS</h3>

        <div className="py-[2vh]">
          <p className="text-base lg:text-xl font-bold text-main-dark/70">Date: <span className="text-main-dark/30  font-semibold text-lg lg:text-2xl">{project.date}</span></p>
          <p className="text-base lg:text-xl font-bold text-main-dark/70">Location: <span className="text-main-dark/30  font-semibold text-lg lg:text-2xl">{project.location}</span></p>
        </div>

        <div className="py-[2vh] text-main-dark/70">
          <p className="pb-[2vh] font-bold text-base lg:text-xl tracking-tighter">About</p>

          {project.desc1 && (
            <p className="font-normal w-[90%] text-md lg:text-lg mb-4 text-main-dark/40">{project.desc1}</p>
          )}

          {project.desc2 && (
            <p className="font-normal w-[90%] text-md lg:text-lg mb-4 text-main-dark/40">{project.desc2}</p>
          )}

          {project.desc3 && (
            <p className="font-normal w-[90%] text-md lg:text-lg mb-4 text-main-dark/40">{project.desc3}</p>
          )}
        </div>
      </div>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }} className="basis-2/5 ">
        {project.gallery.map((img) => (
          <SwiperSlide
            style={{ backgroundImage: `url(${img})` }}
            key={img}
            className={`bg-cover !h-[50vh] lg:!h-[90vh] relative ${(index + 1) % 2 === 0 ? 'order-2' : 'order-1'}`}

          >
            <p className="absolute bottom-2 right-2 font-thin text-2xl tracking-widest text-white/60">VA CONCEPTS</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SingleProjectCard;
