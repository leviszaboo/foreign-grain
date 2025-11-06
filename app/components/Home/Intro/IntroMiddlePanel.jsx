import { ParallaxLayer } from "@react-spring/parallax";
import { useWindowSize } from "rooks";
import Image from "../../Image";
import { BREAKPOINTS } from "@/app/utils/constants";

export default function IntroMiddlePanel({ docs }) {
  const { innerWidth } = useWindowSize();

  const marginsObject = {
    below650: {
      left: ["8%", "35%", "17%", "27%", "5%"],
      top: ["-53rem", "-28rem", "-5rem", "16rem", "36rem"],
    },
    below850: {
      left: ["12%", "50%", "20%", "57%", "5%"],
      top: ["-53rem", "-28rem", "-5rem", "16rem", "24rem"],
    },
    above850: {
      left: ["12%", "58%", "20%", "57%", "5%"],
      top: ["-53rem", "-28rem", "-5rem", "16rem", "19rem"],
    },
  };

  const offsets = [1, 1.02, 1.07, 1.15, 1.2];
  const speeds = [1.7, 1.5, 1.3, 1.1, 1];
  const leftMargins =
    innerWidth < BREAKPOINTS.MOBILE
      ? marginsObject.below650.left
      : innerWidth < 850
        ? marginsObject.below850.left
        : marginsObject.above850.left;
  const topMargins =
    innerWidth < BREAKPOINTS.MOBILE
      ? marginsObject.below650.top
      : innerWidth < 850
        ? marginsObject.below850.top
        : marginsObject.above850.top;

  return (
    <>
      {docs.map((doc, i) => (
        <ParallaxLayer speed={speeds[i]} offset={offsets[i]} key={i}>
          <div className="middle-panel-img-wrapper">
            <Image
              width={1000}
              height={1000 / doc.aspectRatio}
              src={doc.url}
              alt=""
              loading="eager"
              placeholder="blur"
              blurDataURL={doc.base64}
              style={{ marginLeft: leftMargins[i], marginTop: topMargins[i] }}
            />
          </div>
        </ParallaxLayer>
      ))}
    </>
  );
}
