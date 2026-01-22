"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import React from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useTranslations } from "next-intl";

type DesignsProps = {
  images: string[];
};

export default function Designs({ images }: DesignsProps) {
  const t = useTranslations();

  const getTitleFromImage = (imagePath: string): string => {
    // Extract filename from path
    const filename = imagePath.split("/").pop() || "";
    // Remove file extension
    const withoutExt = filename.replace(/\.(webp|jpg|jpeg|png)$/i, "");
    // Remove dimension pattern (e.g., _2100x, _1728x, _1296x)
    const withoutDimensions = withoutExt.replace(/_\d+x$/i, "");
    // Replace underscores with spaces and capitalize words
    return withoutDimensions
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="w-[92%] max-w-7xl mx-auto mb-10 lg:mb-14">
        <SectionTitle text={t("ceilingsPage.designsTitle")} />
        <p className="mt-6 text-center font-normal text-main-dark/80 tracking-tighter text-lg lg:text-xl leading-[125%] max-w-3xl mx-auto">
          {t("ceilingsPage.designsDesc")}
        </p>
      </div>

      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          className="designs-swiper !px-4 md:!px-6 lg:!px-8"
        >
          {images.map((image, index) => {
            const title = getTitleFromImage(image);
            return (
              <SwiperSlide key={index} className="relative">
                <div className="relative w-full aspect-[4/3] overflow-hidden shadow-lg">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2">
                    <h3 className="text-white font-bold text-sm md:text-base tracking-tighter">
                      {title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
