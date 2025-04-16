"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NavItem } from "@/app/Types/Types";
import Image from "next/image";
import Close from "../Icons/Close";
import Bars from "../Icons/Bars";
import { usePathname } from "next/navigation";

const navItems: NavItem[] = [
  { label: "Stretch Ceilings", href: "/ceilings" },
  { label: "Product Sourcing", href: "/product-sourcing" },
  {
    label: "Projects",
    href: "/design-projects",
    // dropdown: [
    //   { label: 'Stretch Ceilings', href: '/stretch-ceilings' },
    //   { label: 'Product Sourcing', href: '/products' },
    //   { label: 'Projects', href: '/projects' },
    // ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {

  const pathname = usePathname()

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  console.log(pathname)

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="w-[95%] m-auto px-4 lg:px-0 py-2 flex justify-between items-center">
        <Link href="/interior-design" className="text-xl font-bold flex items-center gap-4 tracking-tighter uppercase">
          <Image
            src={"/common/VA_logo.png"}
            alt="VA Concepts"
            width={50}
            height={50}
          />
          <p className="font-thin tracking-wider">VA Concepts</p>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="font-medium  transition">
                  {item.label}
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-50"
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="font-medium hover:underline hover:scale-105 ease-in-out underline-offset-4 transition"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {/* Hamburger Icon */}
          {mobileOpen ? <Close /> : <Bars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 h-screen"
          >
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div
                  key={index}
                  className="space-y-2"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <button className="w-full text-left py-2 font-medium">
                    {item.label}
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="pl-4 space-y-2"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block py-2"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={index} href={item.href} className="block py-2">
                  {item.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
