import { motion } from "framer-motion";

import { frameAnimationProps } from "./animation";
import Image from "../../Image";

export default function ImageFrameBlock({ src, vertical = false }) {
  return (
    <motion.div className="block" {...frameAnimationProps}>
      <Image
        src={src}
        width={vertical ? 4266 : 5833}
        height={vertical ? 5328 : 3620}
        alt=""
        loading="lazy"
        lqip={{ active: true, quality: 5, blur: 10 }}
      />
    </motion.div>
  );
}
