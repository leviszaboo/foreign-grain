"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useMenuStore } from "../../../hooks/useMenuStore";
import { useStartButtonStore } from "@/app/hooks/useStartButtonStore"
import { buttonAnimationProps } from "./animation";
import RollingButton from "../../RollingButton";


export default function Startbutton() {

  const { isMenuVisible } = useMenuStore();
  const {
    setButtonClicked
  } = useStartButtonStore();

  function handleClick() {
    setButtonClicked(true)
  }

  return (
    <>
      <AnimatePresence>
        {!isMenuVisible && (
           <motion.div className="button-wrapper" {...buttonAnimationProps}>
            <RollingButton text={"START!"} className={"start"} handleClick={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}