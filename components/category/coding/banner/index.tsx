import Image from 'next/image'
import React from 'react'

export default function index() {
  return (
    <div className='container mx-auto p-2 '>
        <Image src="https://i.ytimg.com/vi/5S_W1oK5IEs/maxresdefault.jpg" 
        className='rounded py-4 h-96 w-full' alt="" 
        />
    </div>
  )
}
