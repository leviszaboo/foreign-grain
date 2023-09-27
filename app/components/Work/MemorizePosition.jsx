"use client"

import { useState, useEffect } from "react";
import { useMenuStore } from "@/app/hooks/useMenuStore";

export default function MemorizePosition({ children }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const { isMenuVisible } = useMenuStore()
  
    useEffect(() => {
      if (isMenuVisible) {
        setScrollPosition(window.scrollY);
      } else {
        window.scrollTo(0, scrollPosition);
      }
    }, [isMenuVisible, scrollPosition]);
  
    return(
      <>
        {children}
      </> 
    )
  }
