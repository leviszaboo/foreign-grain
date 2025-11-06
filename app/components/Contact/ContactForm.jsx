"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions/sendEmail";
import { contactFormAnimationProps } from "./animation";
import ContactFormFooter from "./ContactFormFooter";
import { contactFormSchema } from "@/app/schema/contactFormSchema";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (error || message) {
      const timeout = setTimeout(() => {
        setError(null);
        setMessage(null);
      }, 3500);

      return () => clearTimeout(timeout);
    }
  }, [error, message]);

  async function onSubmit(formData) {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const data = Object.fromEntries(formData);
      contactFormSchema.parse(data);

      const res = await sendEmail(formData);

      if (!res.success) {
        setError(res.error || "Something went wrong.");
      } else {
        setMessage("Talk to you soon!");
        // Reset form on success
        const form = document.querySelector(".contact-form");
        if (form) form.reset();
      }
    } catch (err) {
      if (err.name === "ZodError") {
        const firstError = err.errors[0];
        setError(firstError?.message || "Invalid form inputs.");
      } else {
        setError("Invalid form inputs.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div {...contactFormAnimationProps}>
      <div className="form-wrapper">
        <form className="contact-form" action={onSubmit}>
          <label className="form-label">NAME</label>
          <input
            className="form-input"
            placeholder="ENTER YOUR NAME"
            name="name"
            type="text"
            required
            disabled={loading}
            minLength={2}
            maxLength={100}
          />
          <label className="form-label">EMAIL</label>
          <input
            className="form-input"
            placeholder="ENTER YOUR EMAIL"
            name="email"
            type="email"
            required
            disabled={loading}
            maxLength={255}
          />
          <label className="form-label">MESSAGE</label>
          <textarea
            className="form-input"
            placeholder="ENTER YOUR MESSAGE"
            name="message"
            required
            disabled={loading}
            minLength={10}
            maxLength={5000}
            rows={6}
          />
          {/* Honeypot field - hidden from users, catches bots */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
            }}
            aria-hidden="true"
          />
          <ContactFormFooter
            message={message}
            error={error}
            loading={loading}
          />
        </form>
      </div>
    </motion.div>
  );
}
