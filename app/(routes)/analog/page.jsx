"use client";

import '@/app/styles/work.css'

import { useState, useEffect } from 'react';

import Menu from "../../components/Menu/Menu/Menu"
import AnalogGallery from '../../components/Work/AnalogGallery/AnalogGallery';

import { useMenuStore } from '../../hooks/useMenuStore';
import DigitalGallery from '@/app/components/Work/DigitalGallery/DigitalGallery';


export default function AnalogWork() {
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
      <DigitalGallery />
      <Menu />
    </>
  )
}