
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useStartButtonStore } from "@/app/hooks/UseStartButton";
import IntroFlowers from "./IntroFlowers";
import Gallery2 from "../Work/Gallery2";

export default function Intro() {

    const { isButtonClicked } = useStartButtonStore();

    const spanCount = 3; 
    const spans = [];

    for (let i = 0; i < spanCount; i++) {

      spans.push(
        <motion.span
            key={i}
            animate={{
                opacity: [0.3, 1, 0.3], 
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                delay: 5.1+0.35*i,
            }}
        >
          &gt;
        </motion.span>
      );
    }

    const textRefs = [
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef()
    ];

    for (let i = 0; i < textRefs.length; i++) {
        
        useEffect(() => {

            if (isButtonClicked && textRefs[i].current ) {
                const ref = textRefs[i];

                let text = ref.current.getAttribute('data-value');
                
                let iterations = 0;
    
                setTimeout(() => {
                    let interval = setInterval(() => {
    
                        ref.current.innerText = 
                            text.split("").map(
                            (letter, index) => {
                                if (index < iterations) {
                                    return letter
                                } else {
                                    return " "
                                }
                            }).join("")
            
                        iterations++;
            
                        if (iterations > text.length) {
                            clearInterval(interval)
                        }
                    }, (i > 1 ? 60 : 70))
                }, 750 + 950*i)  
            }
        }, [isButtonClicked])
    }

    return(
        <>
            <AnimatePresence>
                {isButtonClicked && (
                    <>
                        <motion.div 
                            className="intro-wrapper"
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            exit = {{
                                opacity: 0,
                                transition: {
                                    duration: 0.7
                                }
                            }}
                        >
                            <h1 
                                className="intro-text"
                            >
                                <span
                                    className="new-line"
                                    ref = {textRefs[0]}
                                    data-value = "What?"
                                >
                                </span> 
                                <span 
                                    className="new-line"
                                    data-value = "Where?"
                                    ref = {textRefs[1]}
                                >
                                </span> 
                                <span 
                                    className="new-line"
                                    data-value="Who the fuck is"
                                    ref = {textRefs[2]}
                                > 
                                </span> 
                                <span 
                                    className="new-line"
                                    data-value = "Luigi Simiani?"
                                    ref = {textRefs[3]}
                                >  
                                    
                                </span>
                            </h1>
                            <motion.h2
                                className="start-scroll"
                                initial = {{
                                    opacity: 0,
                                }}
                                animate = {{
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 1.3,
                                    ease: "easeIn",
                                    delay: 5
                                }}
                            > 
                                    <span 
                                        className="down"
                                    >
                                        {spans}
                                    </span> 
                                        <motion.span
                                             initial={{
                                                y: 5,
                                            }}
                                            animate={{
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                ease: "easeIn",
                                                delay: 5.1
                                            }}
                                            onClick={() => {}}
                                        >
                                            scroll down 
                                        </motion.span>
                                    <span 
                                        className="down">
                                        {spans}
                                    </span>
                            </motion.h2>
                            <div className="div1">
                                <Gallery2 />
                            </div>
                            
                            <div className="div2">
                                <div className="text-wrapper">
                                    <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                                    et quasi architecto beatae vitae dicta sunt explicabo. 
                                    </p>

                                    <p>
                                    Nemo enim ipsam voluptatem quia 
                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                                    ratione voluptatem sequi nesciunt. 
                                    </p>

                                    <p> Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
                                    amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                                    dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
                                    ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                                    </p>

                                    <p>   
                                    Quis autem vel eum 
                                    iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
                                    dolorem eum fugiat quo voluptas nulla pariatur?
                                    </p>
                                </div>
                            </div>
                            <IntroFlowers />
                        </motion.div>
                        
                    </>
                )}
            </AnimatePresence>
           
        </>
    )
}