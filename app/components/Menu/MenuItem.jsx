import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuItem({ className, href, label, toggleMenu, transition }) {
  return (
    <motion.li
      className={className}
      exit={{
        scale: 0.6,
        origin: "37%",
        opacity: 0,
        ...transition
      }}
    >
      <Link href={href} onClick={toggleMenu}>
        {label}
      </Link>
    </motion.li>
  );
}
