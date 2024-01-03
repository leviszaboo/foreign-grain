"use client"

import RollingButton from "../RollingButton"
import { useFormStatus } from 'react-dom'
import Loader from "./Loader"
import { fadeInScaleAnimationProps } from "./animation"
import { AnimatePresence, motion } from "framer-motion"

export default function ContactFormFooter({ message, error }) {
  const { pending } = useFormStatus();
  
  return (
    <div className="contact-form-footer">
      <RollingButton className={`send-button ${pending ? "email-loading" : null}`} type="submit" disabled={pending} text={"SEND"} />
      <AnimatePresence>
      {message && (
          <motion.div {...fadeInScaleAnimationProps} style={{marginLeft: "auto"}}>
          <h2 className="form-response">{message}</h2>
          </motion.div>
      )}
      </AnimatePresence>
      <AnimatePresence>
        {error && (
          <motion.div {...fadeInScaleAnimationProps} style={{marginLeft: "auto"}}>
            <h2 className="form-response">{error}</h2>
          </motion.div>
        )}
      </AnimatePresence>
      {pending && <Loader />}
    </div>
  )
}
