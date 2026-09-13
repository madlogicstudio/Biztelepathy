'use client'

import { Chatbot } from "@/components/Chatbot"
import Header from "./layouts/Header"
import Hero from "./layouts/Hero"
import Footer from "./layouts/Footer"
import Problem from "./layouts/Problem"

function page() {
  return (
    <div className="bg-[var(--background)]">

      <Chatbot />

      <Header />
      <Hero />
      <Problem />
      <Footer />

    </div>
  )
}

export default page