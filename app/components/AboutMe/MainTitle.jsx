import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollSign from '../Home/Intro/ScrollSign'

export default function MainTitle() {
  const ref = useRef(null)
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 7000], [0, -2500]);
  const y2 = useTransform(scrollY, [0, 7000], [0, -4500]);


  return (
    <div className='aboutme-title'>
      <motion.div ref={ref} style={{y: y1, width: "100%", height: "50%", position: "relative"}}>
        <h1> 
          About <span>Me</span>
        </h1>
      </motion.div>
      <motion.div style={{y: y2, width: "100%", height: "50%"}}>
        <ScrollSign delay1={0.2} delay2={0.3} />
      </motion.div>
    </div>
  )
}
