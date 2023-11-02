"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function sendEmail(formData) {
  try {
    const name = formData.get("name")
    const email = formData.get("email");
    const message = formData.get("message");
  
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: process.env.NEXT_PUBLIC_USER_EMAIL,
      subject: "Contact Form",
      text: message,
      reply_to: email
    })

    return {
      success: true,
      error: null
    }
  } catch(err) {
    console.log(err)
    return {
      success: false,
      error: err.message
    }
  }
}
