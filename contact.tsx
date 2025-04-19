"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendInquiry } from "@/app/actions"
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react"

export function Contact() {
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await sendInquiry(formData)
      if (result.success) {
        setFormStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form.reset()
      } else {
        setFormStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Me</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Get In Touch</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <a href="mailto:michaeljabonitejyunson@gmail.com" className="text-blue-600 hover:underline">
                    michaeljabonitejyunson@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-700">Phone</p>
                  <p>09265109203</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-700">Location</p>
                  <p>Camarin, Caloocan City</p>
                </div>
              </div>

              <div className="flex items-start">
                <Facebook className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-700">Facebook</p>
                  <a
                    href="https://www.facebook.com/michael.yunson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    facebook.com/michael.yunson
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Linkedin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-700">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/michael-yunson-706b1735b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/michael-yunson
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Send Me a Message</h3>

            <form id="contact-form" action={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input id="name" name="name" placeholder="John Doe" required className="w-full" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="How can I help you?" required className="w-full" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {formStatus.type && (
                  <div
                    className={`p-3 rounded ${
                      formStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
