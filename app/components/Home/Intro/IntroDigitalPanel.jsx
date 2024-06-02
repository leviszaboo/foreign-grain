"use client";

import ArcadeText from "./ArcadeText";
import { ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import { useWindowSize } from "rooks";
import { useStartButtonStore } from "@/app/hooks/useStartButtonStore";

export default function IntroDigitalPanel() {
  const { setButtonClicked } = useStartButtonStore();
  const { innerWidth } = useWindowSize();
  const offset = innerWidth < 650 ? 1 : 1;

  return (
    <div className="panel-wrapper">
      <ParallaxLayer speed={1.2} offset={offset}>
        <Link
          href={"/digital"}
          className="panel-img-wrapper"
          onClick={() => setButtonClicked(false)}
        >
          <img src="/Media/intro/digital.jpg" alt="" />
        </Link>
        <Link href={"/digital"} onClick={() => setButtonClicked(false)}>
          <ArcadeText text={"work"} className={"intro-link"} />
        </Link>
      </ParallaxLayer>
    </div>
  );
}
