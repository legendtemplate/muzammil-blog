import React from 'react'
interface data {
    title:string
}
export default function index(props:data) {
  return (
    <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto flex justify-between items-center bg-[url('/newletter-bg.webp')] imgc bg-fixed">
        <div className="w-full mt-4 text-white relative z-0 flex justify-center items-center flex-col py-40">
            <h1 className="mb-4 font-normal md:text-6xl text-3xl">{props.title}</h1>
        </div>
    </div>
  )
}
