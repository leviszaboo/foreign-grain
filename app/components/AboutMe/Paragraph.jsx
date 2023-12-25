"use client"

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Word from './Word';

export default function Paragraph({ text }) {

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.90', 'start 0.42']
  })

  const words = text.text.split(" ")

  return (
    <motion.div className="aboutme-textblock" >
      <motion.p 
        ref={element}
      >
        {
          words.map((word, i) => {
            const start = i / ( words.length );
            const end = start + (1 / ( words.length ))

            return <Word key={i} range={[start, end]} progress={scrollYProgress} color={text.color}>{word}</Word>
          })
        }
      </motion.p>
    </motion.div>
  )
}


