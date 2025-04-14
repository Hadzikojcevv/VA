import TypingEffect from "@/app/Components/Common/TypingEffect";
import React from "react";

const ProductSourcingPage = () => {
  return (
    <main className="pt-[60px] h-[100dvh] flex justify-center items-center ">
      <video
        autoPlay
        // loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/common/productsHeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <TypingEffect
        className="text-white/90"
          words={[
            "Coming Soon!",
            "Ellegant...",
            "Modern & Stylish",
            "4000+ Products",
          ]}
        />
      </div>
    </main>
  );
};

export default ProductSourcingPage;
