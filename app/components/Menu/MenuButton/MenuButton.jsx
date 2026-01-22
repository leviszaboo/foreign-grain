"use client";

import { motion } from "framer-motion";
import { useMenuStore } from "@/app/context/UIContext";
import { fadeIn } from "@/app/lib/animations";
import { cn } from "@/app/lib/cn";

export default function MenuButton() {
  const { isMenuVisible, buttonDisabled, toggleMenu } = useMenuStore();

  function handleClick() {
    if (buttonDisabled) return;
    toggleMenu();
  }

  return (
    <motion.div
      className={cn(
        "ml-5 hidden cursor-pointer fixed top-[26.5px] left-5 z-[10001]",
        "max-md:inline-block",
        "max-[450px]:scale-75 max-[450px]:ml-3",
        "max-[375px]:scale-[0.7] max-[375px]:ml-2.5",
        "max-[330px]:scale-[0.6] max-[330px]:ml-1.5"
      )}
      onClick={handleClick}
      {...fadeIn}
    >
      {/* Bar 1 */}
      <div
        className={cn(
          "w-[49px] h-[7px] rounded-sm bg-white my-1.5 z-[6]",
          "transition-all duration-[0.6s]",
          isMenuVisible && "rotate-45 translate-y-[9.2px] origin-center"
        )}
      />
      {/* Bar 2 */}
      <div
        className={cn(
          "w-[49px] h-[7px] rounded-sm bg-white my-1.5 z-[5]",
          "transition-all duration-[0.6s]",
          isMenuVisible && "-rotate-45 -translate-y-[9.2px] origin-center"
        )}
      />
    </motion.div>
  );
}
