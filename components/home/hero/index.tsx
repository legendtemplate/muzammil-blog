import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import Image from "next/image"


export default function index() {
  return (
    <>
    <div className="hero grid grid-cols-2 container mx-auto">
        <div className="left py-28">
            <h1 className='text-5xl py-10 font-bold leading-snug'>I am freelacer this website for helps</h1>
            <div>
            <input type="text" className='w-full h-12 pl-5 rounded outline-blue-200' placeholder='Enter your Tutorials'/>
            <span className='relative -top-8 right-5 flex justify-end'><SearchIcon /></span>
            </div>
            <div className="link">
                <ul className='flex'>
                    <li className='pr-5'>Tutorials<span></span></li>
                    <li className='pr-5'>Reference<span></span></li>
                    <li className='pr-5'>Vedio Tutorials<span></span></li>
                </ul>
            </div>
            <div className="button mt-4 flex">
                <a href="" className='px-3 mr-5 py-2 bg-red-500 text-white font-semibold rounded'>Download Now</a>
                <a href="" className='px-3  py-2 bg-red-500 text-white font-semibold rounded'>Download Now</a>
            </div>
        </div>
        <div className="right">
        <Image
        src="/hero/muzammil.webp"
        height="50"
        width="999"
        className="h-120 w-full"
        alt="muzammil safdar"
        title="muzammil safdar"
        loading="eager"
      />
        </div>
    </div>
    </>
  )
}
