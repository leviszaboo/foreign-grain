"use client"

import ArcadeText from './ArcadeText'
import { ParallaxLayer } from '@react-spring/parallax'
import Link from 'next/link';
import { useWindowSize } from 'rooks'
import { useStartButtonStore } from '@/app/hooks/useStartButtonStore';

export default function IntroAnalogPanel() {
  const { setButtonClicked } = useStartButtonStore();
  const { innerWidth } = useWindowSize()
  const offset = innerWidth < 650 ? 0.8 : 0.99;

  return (
 
    <div className="panel-wrapper">   
      <ParallaxLayer speed={1.25} offset={offset}>
        <Link href={"/analog"} onClick={() => setButtonClicked(false)}> 
          <ArcadeText text={"analog work"} />
        </Link>
      </ParallaxLayer>  
    </div>      
  )
}
