import Image from "next/image";
import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import SectionTitle from "../Common/SectionTitle";

export default async function BecomeAPartner() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isGreek = locale === "el";
  
  const whatsappNumber = isGreek ? "+306988993838" : "+38971333086";
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const emailAddress = isGreek ? "vaconcepts.gr@gmail.com" : "office@conceptsva.com";
  const emailHref = `mailto:${emailAddress}`;

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="w-[92%] max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-14">
          <SectionTitle text={t("ceilingsPage.becomePartnerTitle")} />
          <p className="mt-6 text-center font-normal text-main-dark/80 tracking-tighter text-lg lg:text-xl leading-[125%] max-w-3xl mx-auto">
            {t("ceilingsPage.becomePartnerDesc")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12 lg:mb-16">
          {/* WhatsApp/Phone */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center gap-4 text-main-dark hover:text-main-dark/80 transition-colors"
          >
            <Image 
              src="/common/whatsApp.png" 
              alt="WhatsApp" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <span className="text-lg md:text-xl font-semibold tracking-tighter">
              {whatsappNumber}
            </span>
          </a>

          {/* Email */}
          <a
            href={emailHref}
            aria-label="Email"
            className="flex items-center gap-4 text-main-dark hover:text-main-dark/80 transition-colors"
          >
            <Image 
              src="/common/mail.png" 
              alt="Email" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <span className="text-lg md:text-xl font-semibold tracking-tighter">
              {emailAddress}
            </span>
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Image 
            src="/common/VA_logo.png" 
            alt="VA Concepts Logo" 
            width={200} 
            height={160} 
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
