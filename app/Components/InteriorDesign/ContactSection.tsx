import React from "react";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

const ContactSection = async () => {
  const t = await getTranslations();

  return (
    <section className="defPadding flex justify-center items-center">
      <div className="w-[90%] md:w-[70%] lg:w-[60%]">
        <h2 className="text-center text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-[2vh]">
          {t("contactSection.title")}
        </h2>
        <p className="text-center lg:text-xl w-[70%] m-auto tracking-tighter li font-semibold">
          {t("contactSection.subtitle")}
        </p>

        <div className="flex justify-center items-center pb-[15vh] mt-4 lg:mt-6">
          <Link
            href={"/contact"}
            className="bg-main-dark text-white text-xl tracking-tighter py-4 px-6 m-auto font-titles font-bold uppercase hover:scale-105 transition ease-in-out drop-shadow-lg"
          >
            {t("contactSection.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
