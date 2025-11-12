"use client";

import ArcadeText from "./ArcadeText";
import { ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useWindowSize } from "rooks";
import { useStartButtonStore } from "@/app/hooks/useStartButtonStore";
import Image from "../../Image";
import { BREAKPOINTS } from "@/app/utils/constants";
import { fetchDoc } from "@/app/service/fetchDocs";

const PANEL_CONFIG = {
  analog: {
    href: "/gallery",
    text: "gallery",
    speed: 1.25,
    getOffset: (innerWidth) => (innerWidth < BREAKPOINTS.MOBILE ? 1.03 : 1.025),
    imagePath: "analog-cover/analog-cover",
    className: "panel-wrapper analog-panel",
  },
  digital: {
    href: "/digital",
    text: "portfolio",
    speed: 1.2,
    getOffset: () => 1,
    imagePath: "digital-cover/digital-cover",
    className: "panel-wrapper",
  },
};

export default function IntroPanel({ type = "analog" }) {
  const [digitalVersion, setDigitalVersion] = useState(0);
  const [analogVersion, setAnalogVersion] = useState(0);

  useEffect(() => {
    const docRef = `${process.env.NEXT_PUBLIC_USER_UID}/coverVersions`;
    fetchDoc(docRef).then((data) => {
      if (data.digitalCoverVersion) {
        setDigitalVersion(data.digitalCoverVersion);
      }
      if (data.analogCoverVersion) {
        setAnalogVersion(data.analogCoverVersion);
      }
    });
  }, [setAnalogVersion, setDigitalVersion]);

  const { setButtonClicked } = useStartButtonStore();
  const { innerWidth } = useWindowSize();

  const config = PANEL_CONFIG[type];
  const offset = config.getOffset(innerWidth);

  return (
    <div className={config.className}>
      <ParallaxLayer speed={config.speed} offset={offset}>
        <Link
          href={config.href}
          className="panel-img-wrapper"
          onClick={() => setButtonClicked(false)}
        >
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT +
              "/" +
              process.env.NEXT_PUBLIC_USER_UID +
              "/" +
              config.imagePath +
              `?v${type === "analog" ? analogVersion : digitalVersion}`
            }
            alt={type}
            width={1080}
            height={620}
            loading="eager"
          />
        </Link>
        <Link href={config.href} onClick={() => setButtonClicked(false)}>
          <ArcadeText text={config.text} className={"intro-link"} />
        </Link>
      </ParallaxLayer>
    </div>
  );
}
