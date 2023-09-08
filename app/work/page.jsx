"use client";

import '@/app/styles/work.css'

import { AnimatePresence, motion } from 'framer-motion'

import Header from "../components/Header"
import Menu2 from "../components/Menu/Menu/Menu"
import Footer from '../components/Footer';
import HomeFlowers from '../components/Home/Flowers/HomeFlowers';
import Gallery2 from '../components/Work/Gallery2';

import { useMenuStore } from '../hooks/useMenu';


export default function Work() {

  const { buttonDisabled } = useMenuStore();

  return(
    <>
      <AnimatePresence>
          
        <motion.div 
        
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition = {{duration: 1}}
        >
          <Header />
          <Menu2 />
          <Gallery2 />
          {/*<HomeFlowers /> temporary*/}
        </motion.div>
          
      </AnimatePresence>
    </>
  )
}