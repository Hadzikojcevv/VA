import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <section className="defPadding flex justify-center items-center">
      <div className="w-[90%] md:w-[70%] lg:w-[60%]">
        <h2 className="text-center text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-[2vh]">
          Get you quote now!
        </h2>
        <p className="text-center lg:text-xl w-[70%] m-auto tracking-tighter li font-semibold">
          Contact VA Concepts now and we’ll get in touch as soon as posible!
        </p>

        <div className="flex justify-center items-center pb-[15vh] mt-4 lg:mt-6">
          <Link
            href={"/contact"}
            className="bg-main-dark text-white text-xl tracking-tighter py-4 px-6 m-auto font-titles font-bold uppercase hover:scale-105 transition ease-in-out drop-shadow-lg"
          >
            Contact Us Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
