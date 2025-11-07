"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContentSwitcher() {
  const [activeLink, setActiveLink] = useState(null);
  const currentPathname = usePathname();

  useEffect(() => {
    setActiveLink(currentPathname);
  }, [currentPathname]);

  const regex = /^\/digital.*$/;

  return (
    <h1 className="content-switcher">
      <Link
        href="/gallery"
        className={activeLink == "/gallery" ? "active-switch" : ""}
      >
        GALLERY
      </Link>
      <span>/</span>
      <Link
        href="/digital"
        className={regex.test(activeLink) ? "active-switch" : ""}
      >
        PORTFOLIO
      </Link>
    </h1>
  );
}
