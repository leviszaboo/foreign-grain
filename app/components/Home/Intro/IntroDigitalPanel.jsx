"use client";

import ArcadeText from "./ArcadeText";
import { ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import { useWindowSize } from "rooks";
import { useStartButtonStore } from "@/app/hooks/useStartButtonStore";
import Image from "../../Image";

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
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT +
              "/" +
              process.env.NEXT_PUBLIC_USER_UID +
              "/digital-cover/digital-cover"
            }
            alt="analog"
            width={1080}
            height={620}
            loading="eager"
          />
        </Link>
        <Link href={"/digital"} onClick={() => setButtonClicked(false)}>
          <ArcadeText text={"portfolio"} className={"intro-link"} />
        </Link>
      </ParallaxLayer>
    </div>
  );
}
