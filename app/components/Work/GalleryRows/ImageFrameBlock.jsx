import { memo } from "react";
import { motion } from "framer-motion";
import { frameAnimationProps } from "./animation";
import Image from "../../Image";

function ImageFrameBlock({ src, base64 = "", vertical = false }) {
  return (
    <motion.div className="block" {...frameAnimationProps}>
      <Image
        src={src}
        width={vertical ? 4160 : 5616}
        height={vertical ? 5200 : 3744}
        alt=""
        loading="lazy"
        placeholder="blur"
        blurDataURL={base64}
      />
    </motion.div>
  );
}

export default memo(ImageFrameBlock);
