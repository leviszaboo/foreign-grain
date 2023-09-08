"use client";

import { useMenuStore } from '../../hooks/UseMenu';
import { motion, AnimatePresence } from 'framer-motion';

import MenuItem from './MenuItem';
import Divider from './Divider';
import CharacterContainer from './CharacterContainer';
import MenuFlowers from './Flowers/MenuFlowers';

export default function Menu() {
  const { isMenuVisible, toggleMenu } = useMenuStore();

  return(
    <>
      <AnimatePresence>
        {isMenuVisible && (
          <>
            <motion.div 
              className="menu-backdrop"
              initial={{ 
                opacity: 0, 
                scale: 0.8
              }}
              animate={{ 
                opacity: 1, 
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                transition: { 
                    duration: 0.5 
                  } 
                }}
              transition = {{
                duration: 0.5}}
              onClick = {toggleMenu}
            >
            </motion.div>
              <motion.ul 
                className="popup-menu"
                initial={{ 
                  opacity: 0,   
                }}
                animate={{ 
                    opacity: 1,
                }}
                transition = {{
                  duration: 0.2
                }}
              >
              <MenuItem
                className="home"
                href="/"
                label="Home"
                toggleMenu={toggleMenu}
                transition={{ duration: 0.5, delay: 0.15 }}
              />
              <MenuItem
                className="work"
                href="/work"
                label="Work"
                toggleMenu={toggleMenu}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <MenuItem
                className="info"
                href="#"
                label="About me"
                toggleMenu={toggleMenu}
                transition={{ duration: 0.55, delay: 0.2 }}
              />
              <MenuItem
                className="contact"
                href="#"
                label="Contact"
                toggleMenu={toggleMenu}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
            </motion.ul>
            <MenuFlowers />
            <Divider />
            <CharacterContainer />
          </>
        )}
      </AnimatePresence>
    </>
  )
}