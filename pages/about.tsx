import React from 'react'
import About from "@/components/about/index"
import Team from "@/components/about/team"
import Hero from "@/components/layout/hero"

export default function about() {
  return (
    <>
        <Hero title="About US" />
        <About />
        <Team />
    </>
  )
}
