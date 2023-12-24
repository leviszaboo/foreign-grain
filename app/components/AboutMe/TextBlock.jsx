"use client"

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Word from './Word';

export default function TextBlock({ text }) {

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.85', 'start 0.35']
  })

  const words = text.split(" ")

  return (
    <motion.div className="aboutme-textblock" >
      <motion.p 
        ref={element}
      >
        {
          words.map((word, i) => {
            const start = i / ( words.length );
            const end = start + (1 / ( words.length ))

            return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
          })
        }
      </motion.p>
    </motion.div>
  )
}


