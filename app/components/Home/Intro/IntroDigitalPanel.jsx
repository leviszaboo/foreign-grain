"use client"

import ArcadeText from './ArcadeText'
import { ParallaxLayer } from '@react-spring/parallax'
import Link from 'next/link';
import { useWindowSize } from 'rooks';
import { useStartButtonStore } from '@/app/hooks/useStartButtonStore';

export default function IntroDigitalPanel() {
  const { setButtonClicked } = useStartButtonStore();
  const { innerWidth } = useWindowSize();
  const offset = innerWidth < 650 ? 0.77 : 0.94;

  return (
    <div className="panel-wrapper">
      <ParallaxLayer speed={1.2} offset={offset}>
        <Link href={"/digital"} onClick={() => setButtonClicked(false)}>
          <ArcadeText text={"digital work"} />
        </Link>
      </ParallaxLayer>
    </div>
  )
}
