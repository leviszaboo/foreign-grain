"use client";

import ArcadeText from "./ArcadeText";
import { ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import { useWindowSize } from "rooks";
import { useStartButtonStore } from "@/app/hooks/useStartButtonStore";

export default function IntroAnalogPanel() {
  const { setButtonClicked } = useStartButtonStore();
  const { innerWidth } = useWindowSize();
  const offset = innerWidth < 650 ? 1.03 : 1.025;

  return (
    <div className="panel-wrapper analog-panel">
      <ParallaxLayer speed={1.25} offset={offset}>
        <Link
          href={"/analog"}
          className="panel-img-wrapper"
          onClick={() => setButtonClicked(false)}
        >
          <img src="/Media/intro/analog.jpg" alt="" />
        </Link>
        <Link href={"/analog"} onClick={() => setButtonClicked(false)}>
          <ArcadeText text={"analog work"} className={"intro-link"} />
        </Link>
      </ParallaxLayer>
    </div>
  );
}
