"use client";

import Link from 'next/link'
import { useMenuStore } from '../hooks/UseMenu';
import { motion, AnimatePresence, delay } from 'framer-motion';

export default function Menu() {

    const { characterIndex, isMenuVisible, toggleMenu } = useMenuStore();

    const characters = [
        "/Media/graphic/teddy-1.png",
        "/Media/graphic/luigi-1.png",
        "/Media/graphic/luigi-3.png"
    ]

    return(
        <>
            <AnimatePresence>
                {isMenuVisible && (
                    <div>
                        <motion.div 
                            className="menu-backdrop"
                            initial={{ 
                                opacity: 0, 
                                scale: 0.8}}
                            animate={{ 
                                opacity: 1, 
                                scale: 1}}
                            exit={{ 
                                opacity: 0, 
                                transition: { 
                                    duration: 0.5 } }}
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
                                duration: 0.2}}
                        >
                            <motion.li 
                                className="home"
                                exit={{
                                    scale: 0.6, 
                                    origin: "37%",
                                    opacity:0, 
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.15
                                    }
                                    }}
                            >
                                <Link href="/" onClick = {toggleMenu}>
                                    
                                        Home 
                                   
                                </Link>
                            </motion.li>
                            <motion.li 
                                className="work"
                                exit={{
                                    scale: 0.6, 
                                    origin: "37%",
                                    opacity: 0, 
                                    transition: {
                                        duration: 0.5, 
                                        delay: 0.1}}}
                            >
                                <Link href="/work" onClick = {toggleMenu}>
                                    
                                    Work
                                   
                                </Link>
                            </motion.li>
                            <motion.li 
                                className="info"
                                exit={{
                                    scale: 0.6, 
                                    origin: "37%",
                                    opacity: 0, 
                                    transition: {
                                        duration: 0.55, 
                                        delay: 0.2, 
                                        ease: "easeOut"}
                                    }}
                            >
                                <a href="#">
                                   
                                        About me 
                                    
                                </a>
                            </motion.li>
                            <motion.li 
                                className="contact"
                                exit={{
                                    scale: 0.6, 
                                    origin: "37%",
                                    opacity: 0, 
                                    transition: {
                                        duration: 0.4, 
                                        delay: 0.2,
                                        ease: "easeOut"}}}
                            >
                                <a href="#">
                                    
                                        Contact 
                                   
                                </a>
                            </motion.li>
                        </motion.ul>
                        <motion.div 
                            className="flower-container-5" 
                            initial={{
                                scale: 0.65,
                                opacity: 0
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            exit={{
                                scale: 0.65, 
                                opacity: 0,
                                transition: {
                                    duration: 0.3,
                                    ease: "easeInOut" 
                                }
                            }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut"}}
                        >   
                            <img 
                                className="flower flower-5" 
                                id="1" 
                                src="/Media/flowers/flower-2.png"
                            />
                        </motion.div>
                        <motion.div 
                            className="flower-container-6"
                            initial={{
                                scale: 0.65,
                                opacity: 0
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            exit={{
                                scale: 0.5, 
                                opacity: 0, 
                                transition: {
                                    duration: 0.25,
                                    delay: 0.1,
                                    ease: "easeInOut" 
                                }
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15,
                                ease: "easeOut"
                            }}
                        >
                            <img 
                                className="flower flower-6" 
                                id="2" 
                                src="/Media/flowers/flower-3.png"
                            />
                        </motion.div>
                        <motion.div 
                            className="flower-container-7"
                            initial={{
                                scale: 0.65,
                                opacity: 0
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            exit={{
                                scale: 0.5, 
                                opacity: 0, 
                                transition: {
                                    duration: 0.3,
                                    delay: 0.2,
                                    ease: "easeInOut" 
                                }
                            }}
                            transition={{
                                duration: 0.55,
                                delay: 0.25,
                                ease: "easeOut"
                            }}
                        >
                            <img 
                                className="flower flower-7" 
                                id="1" 
                                src="/Media/flowers/flower-2.png"
                            />
                        </motion.div>
                        <motion.div 
                            className="divider"
                            initial={{
                                height: 0
                            }}
                            animate={{
                                height: '60vh'
                            }}
                            exit={{
                                height: 0,
                                opacity: 0,
                                transition: {
                                    duration: 0.4
                                }
                            }}
                            transition={{
                                duration: 0.55,
                                ease: "easeOut"
                            }}
                        >
                        </motion.div>
                        <motion.div 
                            className="character-container"
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{ 
                                
                                opacity: 0, 
                                transition: {
                                    duration: 0.25,
                                    delay: 0.1,
                                    ease: "easeInOut" 
                                }
                            }}
                            transition={{
                                duration: 1.2,
                                ease: "easeInOut"
                            }}
                        >
                            <img 
                                className="character" 
                                src={characters[characterIndex]}
                            />
                        </motion.div>
                    </div>   
                )}
            </AnimatePresence>
        </>
    )
}