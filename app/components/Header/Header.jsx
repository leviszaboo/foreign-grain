"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { headerAnimation } from "@/app/lib/animations";
import { cn } from "@/app/lib/cn";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuButton from "../Menu/MenuButton/MenuButton";

export default function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const currentPathname = usePathname();

  useEffect(() => {
    setActiveLink(currentPathname);
  }, [currentPathname]);

  const regex = /^\/gallery.*$/;

  return (
    <>
      <MenuButton />
      <motion.header
        className="fixed h-22 w-screen z-[10000] flex"
        {...headerAnimation}
      >
        {/* Logo */}
        <div className="flex items-center justify-center mr-auto ml-8 max-md:mr-4 max-md:ml-auto">
          <Link
            href="/"
            className="text-white text-sm uppercase tracking-[0.2em] no-underline hover:text-[#ffd700] transition-colors font-bold"
          >
            Luigi Simiani
          </Link>
        </div>

        {/* Navigation */}
        <nav className="mr-8 gap-4 ml-auto flex items-center justify-center max-md:hidden">
          <h2>
            <Link
              href="/gallery"
              className={cn(
                "text-white font-semibold py-4 no-underline hover:underline hover:underline-offset-4",
                regex.test(activeLink) && "underline underline-offset-4"
              )}
            >
              WORK
            </Link>
          </h2>
          <h2>
            <Link
              href="/about-me"
              className={cn(
                "text-white font-semibold py-4 no-underline hover:underline hover:underline-offset-4",
                activeLink === "/about-me" && "underline underline-offset-4"
              )}
            >
              ABOUT
            </Link>
          </h2>
          <h2>
            <Link
              href="/contact"
              className={cn(
                "text-white font-semibold py-4 no-underline hover:underline hover:underline-offset-4",
                activeLink === "/contact" && "underline underline-offset-4"
              )}
            >
              CONTACT
            </Link>
          </h2>
        </nav>
      </motion.header>
    </>
  );
}
