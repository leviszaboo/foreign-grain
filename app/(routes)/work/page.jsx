"use client";

import '@/app/styles/work.css'

import { AnimatePresence, motion } from 'framer-motion'

import Header from "../../components/Header"
import Menu from "../../components/Menu/Menu/Menu"
import Footer from '../../components/Footer';
import HomeFlowers from '../../components/Home/Flowers/HomeFlowers';
import Gallery from '../../components/Work/Gallery/Gallery';

import { useMenuStore } from '../../hooks/useMenu';
import MenuButton from '../../components/Menu/MenuButton/MenuButton';
import WorkHeader from '../../components/Work/WorkHeader';


export default function Work() {

  const { isMenuVisible } = useMenuStore()

  return(
    <>
      <AnimatePresence>
        <WorkHeader/>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: {
              duration: 1
            }
          }}
          transition = {{duration: 1}}
        >
          <Gallery />
        </motion.div>
        <Menu />
      </AnimatePresence>
    </>
  )
}