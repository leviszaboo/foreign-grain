"use client"
import { useEffect, useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sendEmail } from "@/app/actions/sendEmail";
import { contactFormAnimationProps } from "./animation";
import RollingButton from "../RollingButton";
import Loader from "./Loader";
import { fadeInScaleAnimationProps } from "./animation";
import ContactFormFooter from "./ContactFormFooter";
import { contactFormSchema } from "@/app/schema/contactFormSchema";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (error || message) {
      setTimeout(() => {
        setError(null);
        setMessage(null);
      }, 3500)
    }
  }, [error, message])

  async function onSubmit(formData) {
    try {
      const data = Object.fromEntries(formData);
      console.log(data)
      contactFormSchema.parse(data)
      const res = await sendEmail(formData)

      if (!res.success) {
        setError("Something went wrong."); 
      } else {
        setMessage("talk to you soon!");
      }

    } catch (err) {
      setError("Invalid form inputs.")
    }
          
  }

  return (
    <motion.div {...contactFormAnimationProps}>
      <div className="form-wrapper">
        <form className="contact-form" action={onSubmit}>
          <label className="form-label">
            NAME
          </label>
          <input 
            className="form-input" 
            placeholder="ENTER YOUR NAME" 
            name="name"
            required
          />
          <label className="form-label">
            EMAIL
          </label>
          <input 
            className="form-input" 
            placeholder="ENTER YOUR EMAIL" 
            name="email"
            required
          />
          <label className="form-label">
            MESSAGE
          </label>
          <textarea 
            className="form-input" 
            placeholder="ENTER YOUR MESSAGE"
            name="message"
            required
          />
          <ContactFormFooter message={message} error={error} />
        </form>
      </div>
    </motion.div>
  )
}
