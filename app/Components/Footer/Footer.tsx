import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterLink {
  link?: string;
  label: string;
}

interface FooterList {
  title: string;
  links: FooterLink[];
}

const footerLists: FooterList[] = [
  {
    title: "About",
    links: [
      {
        link: "/about-us",
        label: "Our Story",
      },
      {
        link: "/ceilings",
        label: "Stretch Ceilings",
      },
      {
        link: "/product-sourcing",
        label: "Product Sourcing",
      },
      {
        link: "/contact",
        label: "Contact",
      },
    ],
  },
  {
    title: "Social Media",
    links: [
      {
        link: "/instagram",
        label: "Instagram",
      },
      {
        link: "/facebook",
        label: "Facebook",
      },
      {
        link: "/LinkedIn",
        label: "LinkedIn",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "Tel: +3897712345632",
      },
      {
        label: "Marshal Tito 101",
      },
      {
        label: "Gevgelija, North Macedonia",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-main-dark text-white defPadding !pb-[5vh]">
      <div className="w-[95%] m-auto">
        <div className="flex justify-center lg:justify-between mb-[10vh]">
          <div className="basis-[90%] lg:basis-1/2 ">
            <p className="text-[40px] lg:text-[80px] 4xl:text-[100px] font-black uppercase tracking-tight mb-0">
              Freshen up{" "}
            </p>
            <p className="text-[40px] lg:text-[80px] 4xl:text-[100px] font-black uppercase tracking-tight lg:ml-[15%] -mt-[7%] sm:-mt-[4%] md:-mt-[4%] lg:-mt-[7.5%] 2xl:-mt-[6%]">
              Your Living
            </p>

            <p className="tracking-tighter w-full lg:w-[70%] text-gray-200 text-base lg:text-xl mb-4">
              In a global world based on communication we at VA Concepts are
              always ready to go beyond our borders and are always open up to a
              new experience.
            </p>
            <p className="tracking-tighter w-[70%] text-gray-200 text-base lg:text-xl">
              We dare to be different!
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

                <div className="flex flex-col">
                  {list.links.map((link) =>
                    link.link ? (
                      <Link key={link.link} href={link.link} className="text-base hover:scale-105 transition ease-in-out">
                        {link.label}
                      </Link>
                    ) : (
                      <p key={link.label}>{link.label}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[90%] m-auto flex lg:justify-end items-center gap-6 basis-1/2">
            <p className="text-4xl font-bold tracking-tighter order-2 lg:order-1">VA CONCEPTS</p>
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
