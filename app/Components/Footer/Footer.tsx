import Image from "next/image";
import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

interface FooterLink {
  link?: string;
  label: React.ReactNode;
  external?: boolean;
}

interface FooterList {
  title: string;
  links: FooterLink[];
}

const Footer = async () => {
  const t = await getTranslations();
  const locale = await getLocale();
  const isGreek = locale === "el";
  const whatsappNumber = isGreek ? "+306988993838" : "+38971333086";
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const emailAddress = isGreek ? "vaconcepts.gr@gmail.com" : "office@conceptsva.com";
  const emailHref = `mailto:${emailAddress}`;

  // Locale-aware social media links
  const instagramLink = locale === "el" 
    ? "https://www.instagram.com/vaconcepts.gr/" 
    : locale === "mk"
    ? "https://www.instagram.com/vaconcepts.mk/"
    : "https://www.instagram.com/vaconcepts.mk/";
  
  const facebookLink = locale === "el"
    ? "https://www.facebook.com/profile.php?id=61581507848379" // Update with actual Greek Facebook URL if different
    : locale === "mk"
    ? "https://www.facebook.com/profile.php?id=61574902241239" // Update with actual Macedonian Facebook URL if different
    : "https://www.facebook.com/profile.php?id=61574902241239"; // Update with actual English Facebook URL if different

  const footerLists: FooterList[] = [
    {
      title: t("footer.about"),
      links: [
        { link: "/ceilings", label: t("nav.stretchCeilings") },
        { link: "/contact", label: t("nav.contact") }
      ]
    },
    {
      title: t("footer.socialMedia"),
      links: [
        {
          link: instagramLink,
          label: (
            <Image
              src="/common/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          ),
          external: true
        },
        {
          link: facebookLink,
          label: (
            <Image
              src="/common/fb.png"
              alt="Facebook"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          ),
          external: true
        }
      ]
    },
    {
      title: t("footer.contact"),
      links: [
        {
          label: (
            <div className="flex items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center text-white/90 hover:text-white transition"
              >
                <Image src={"/common/whatsApp.png"} alt="Phone" width={20} height={20} />
              </a>
              <span>{t("common.tel")}</span>

            </div>
          )
        },
        {
          label: (
            <div className="flex items-center gap-3">
              <a
                href={emailHref}
                aria-label="Email"
                className="inline-flex items-center justify-center text-white/90 hover:text-white transition"
              >
                <Image src={"/common/mail.png"} alt="Email" width={20} height={20} />
              </a>
              <a href={emailHref} className="text-white/90 hover:text-white transition">
                {emailAddress}
              </a>
            </div>
          )
        },
        ...(isGreek ? [] : [{ label: "Marshal Tito 101" }, { label: "Gevgelija, North Macedonia" }])
      ]
    }
  ];

  return (
    <footer className="bg-main-dark text-white defPadding !pb-[5vh]">
      <div className="w-[95%] m-auto">
        <div className="flex justify-center lg:justify-between mb-[10vh]">
          <div className="basis-[90%] lg:basis-1/2 ">
            <p className="text-[40px] lg:text-[80px] 4xl:text-[100px] font-black uppercase tracking-tight mb-0">
              {t("footer.freshenUp")}{" "}
            </p>
            <p className="text-[40px] lg:text-[80px] 4xl:text-[100px] font-black uppercase tracking-tight lg:ml-[15%] -mt-[7%] sm:-mt-[4%] md:-mt-[4%] lg:-mt-[7.5%] 2xl:-mt-[6%]">
              {t("footer.yourLiving")}
            </p>

            <p className="tracking-tighter w-full lg:w-[70%] text-gray-200 text-base lg:text-xl mb-4">
              {t("footer.p1")}
            </p>
            <p className="tracking-tighter w-[70%] text-gray-200 text-base lg:text-xl">
              {t("footer.p2")}
            </p>
          </div>
          <Image
            src={"/common/STAN IMG5.jpg"}
            alt="Image"
            width={600}
            height={400}
            className="drop-shadow-sm drop-shadow-amber-50 hidden 2xl:block"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-18 w-[90%] m-auto">
            {footerLists.map((list) => (
              <div key={list.title} className="">
                <p className="text-3xl font-bold tracking-tighter mb-4">{list.title}</p>

                <div className={list.title === t("footer.socialMedia") ? "flex flex-row gap-4" : "flex flex-col"}>
                  {list.links.map((link, index) =>
                    link.link ? (
                      link.external ? (
                        <a
                          key={link.link}
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={list.title === t("footer.socialMedia") ? "hover:scale-110 transition ease-in-out" : "text-base hover:scale-105 transition ease-in-out"}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link key={link.link} href={link.link} className="text-base hover:scale-105 transition ease-in-out">
                          {link.label}
                        </Link>
                      )
                    ) : (
                      <p key={typeof link.label === "string" ? link.label : `non-link-${index}`}>{link.label}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[90%] m-auto flex lg:justify-end items-center gap-6 basis-1/2">
            <p className="text-4xl font-bold tracking-tighter order-2 lg:order-1">{t("footer.brand")}</p>
            <Image
              src={"/common/VA_logo.png"}
              alt="Logo"
              width={100}
              height={300}
              className="order-1 lg:order-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
