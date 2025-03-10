import { motion } from "framer-motion";
import { frameAnimationProps } from "./animation";
import Image from "next/image";

export default function ImageFrameBlock({
  src,
  base64 = "",
  vertical = false,
}) {
  return (
    <motion.div className="block relative" {...frameAnimationProps}>
      <Image
        src={src}
        width={vertical ? 4266 : 5833}
        height={vertical ? 5328 : 3620}
        alt=""
        loading="lazy"
        placeholder="blur"
        blurDataURL={base64}
        lqip={{ active: true, quality: 5, blur: 10 }}
      />
    </motion.div>
  );
}
