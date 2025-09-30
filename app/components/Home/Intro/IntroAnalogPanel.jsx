"use client";

import ArcadeText from "./ArcadeText";
import { ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import { useWindowSize } from "rooks";
import { useStartButtonStore } from "@/app/hooks/useStartButtonStore";
import Image from "../../Image";

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
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT +
              "/" +
              process.env.NEXT_PUBLIC_USER_UID +
              "/analog-cover/analog-cover"
            }
            alt="analog"
            width={1080}
            height={620}
            loading="eager"
          />
        </Link>
        <Link href={"/gallery"} onClick={() => setButtonClicked(false)}>
          <ArcadeText text={"gallery"} className={"intro-link"} />
        </Link>
      </ParallaxLayer>
    </div>
  );
}
