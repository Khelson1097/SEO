"use server"
import nodemailer from "nodemailer"

export async function sendInquiry(formData: FormData) {
  try {
    // Get form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "Please fill in all fields",
      }
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "michaeljabonitejyunson@gmail.com",
        pass: process.env.EMAIL_PASSWORD, // You'll need to set this up in your environment variables
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "michaeljabonitejyunson@gmail.com",
      to: "michaeljabonitejyunson@gmail.com",
      subject: `Portfolio Inquiry: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Inquiry from Your Portfolio Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    }

    // For development/demo purposes, we'll just log the email content
    // In production, uncomment the following code to actually send the email
    //console.log("Email would be sent with:", mailOptions)

    // Send email
    try {
      await transporter.sendMail(mailOptions)
      return {
        success: true,
        message: "Message sent successfully!",
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError)
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}
