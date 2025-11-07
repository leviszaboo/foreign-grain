import { memo } from "react";
import { motion } from "framer-motion";

import { descriptionAnimationProps } from "./animation";

function DescriptionBlock({ title, subtitle, description }) {
  return (
    <motion.div
      className="block description-block"
      {...descriptionAnimationProps}
    >
      <div className="image-title-wrapper">
        {title !== "" && (
          <div className="image-title">
            <h3>{title}</h3>
          </div>
        )}
        {subtitle !== "" && (
          <div className="image-subtitle">
            <h3>{subtitle}</h3>
          </div>
        )}
      </div>
      {description !== "" && (
        <div className="image-description">
          <h4>{description}</h4>
        </div>
      )}
    </motion.div>
  );
}

export default memo(DescriptionBlock);
