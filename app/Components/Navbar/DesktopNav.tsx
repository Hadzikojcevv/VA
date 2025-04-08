import { NavLinkType } from "@/app/Types/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const navLinks: NavLinkType[] = [
  {
    label: "Product Sourcing",
    link: "/product-sourcing",
  },
  {
    label: "Stretch Ceilings",
    link: "/stretch-ceilings",
  },
  {
    label: "Projects",
    link: "/design-projects",
  },
];

const DesktopNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-10">
      <div className="w-[95%] m-auto py-2 flex justify-between items-center">
        <Link href={'/interior-design'}>
        <Image
          src={"/common/VA_logo.png"}
          alt="VA Concepts"
          width={50}
          height={50}
        />
        </Link>
        <nav className="flex justify-end items-center gap-4">
          {navLinks.map((link) => (
            <Link key={link.link} href={link.link} className="font-semibold text-lg">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default DesktopNav;
