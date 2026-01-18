"use client"

import RollingButton from "../RollingButton"
import { useFormStatus } from 'react-dom'
import Loader from "./Loader"
import { fadeInScaleAnimationProps } from "./animation"
import { AnimatePresence, motion } from "framer-motion"

export default function ContactFormFooter({ message, error }) {
  const { pending } = useFormStatus();

  return (
    <div className="flex items-center gap-4 mt-4 flex-wrap">
      <RollingButton
        className={pending ? "opacity-50 cursor-not-allowed" : ""}
        type="submit"
        disabled={pending}
        text={"SEND"}
      />
      <AnimatePresence>
      {message && (
          <motion.div {...fadeInScaleAnimationProps} className="ml-auto">
          <h2 className="text-sm text-[#ffd700]">{message}</h2>
          </motion.div>
      )}
      </AnimatePresence>
      <AnimatePresence>
        {error && (
          <motion.div {...fadeInScaleAnimationProps} className="ml-auto">
            <h2 className="text-sm text-red-400">{error}</h2>
          </motion.div>
        )}
      </AnimatePresence>
      {pending && <Loader />}
    </div>
  )
}
