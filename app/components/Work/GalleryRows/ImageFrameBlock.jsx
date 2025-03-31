import { motion } from "framer-motion";
import { frameAnimationProps } from "./animation";
import Image from "../../Image";

export default function ImageFrameBlock({
  src,
  base64 = "",
  vertical = false,
}) {
  return (
    <motion.div className="block" {...frameAnimationProps}>
      <Image
        src={src}
        width={vertical ? 4266 : 5833}
        height={vertical ? 5328 : 3620}
        alt=""
        loading="eager"
        placeholder="blur"
        blurDataURL={base64}
      />
    </motion.div>
  );
}
