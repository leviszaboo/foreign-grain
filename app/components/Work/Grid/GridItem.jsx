import FadeIn from "../../FadeIn";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GridItem({ doc }) {
  return (
    <FadeIn>
      <motion.div
        key={doc.id}
        className="project-grid-item group"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <div className="project-grid-img-wrapper">
          <motion.div
            className="hover-line"
            variants={{
              rest: {
                scaleY: 0,
                originY: 0.5,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
              },
              hover: {
                scaleY: 1,
                originY: 0.5,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
              },
            }}
          />
          <div className="project-grid-img-container">
            <Image
              src={doc.coverPhoto}
              alt="project"
              className="project-grid-img"
              width={960}
              height={540}
              priority={true}
            />
          </div>
        </div>
        <div className="project-grid-item-content">
          <h3>{doc.title}</h3>
          <p>{doc.subTitle}</p>
        </div>
      </motion.div>
    </FadeIn>
  );
}
