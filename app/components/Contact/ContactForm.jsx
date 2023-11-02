"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions/sendEmail";
import { contactFormAnimationProps } from "./animation";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <motion.div {...contactFormAnimationProps}>
      <div className="form-wrapper">
        <form className="contact-form" action={
          async (formData) => {
            setLoading(true);

            const res = await sendEmail(formData)

            if (!res.success) {
              setError("Something went wrong."); 
            } else {
              setMessage("talk to you soon!");
            }

            setLoading(false);
          }}>
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
          <div className="contact-form-footer">
            <button className={`send-button ${loading ? "email-loading" : null}`} type="submit" disabled={loading}>
              <h2>SEND</h2>
            </button>
            {message && <h2 className="form-response">{message}</h2>}
            {error && <h2 className="form-response">{error}</h2>}
          </div>
        </form>
      </div>
    </motion.div>
  )
}
