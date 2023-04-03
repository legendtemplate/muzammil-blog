import React from 'react'
import Image from 'next/image'
export default function index() {
  return (
    <div className='container mx-auto px-2 '>
        <Image 
        src="https://i.ytimg.com/vi/5S_W1oK5IEs/maxresdefault.jpg" 
        className='rounded py-4 h-96 w-full' 
        height={90}
        width={90}
        alt=""
        title=""
         />
    </div>
  )
}
