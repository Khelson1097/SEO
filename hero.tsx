"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Michael Yunson</h1>
          <p className="text-xl md:text-2xl mb-8">
            Virtual Assistant | SEO Specialist | Web Designer | Lead Generation Expert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      <nav className="bg-gray-800 py-4 sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base">
            <li>
              <a href="#about" className="text-white hover:text-blue-300 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-white hover:text-blue-300 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#tools" className="text-white hover:text-blue-300 transition-colors">
                Tools
              </a>
            </li>
            <li>
              <a href="#experience" className="text-white hover:text-blue-300 transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-white hover:text-blue-300 transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-blue-300 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
