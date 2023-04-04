import React from 'react'
import Form from "@/components/contact/form"
import Map from "@/components/contact/map"
import Hero from "@/components/layout/hero"

export default function contact() {
  return (
    <>    
    <Hero title="Contact US" />
        <Form />
        <Map />
    </>
  )
}
