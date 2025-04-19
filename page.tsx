import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Tools } from "@/components/tools"
import { Experience } from "@/components/experience"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Tools />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
