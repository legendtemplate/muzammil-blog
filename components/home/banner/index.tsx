import React from 'react'

export default function index() {
  return (
    <div className='bg-red-400 py-5'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
        <div className="icon">
          <span className='bg-white p-4 rounded-full'>hel</span>
        </div>
        <div className='flex flex-col ml-4'>
          <h4 className='text-white font-semibold text-2xl'>Next Courses: Seo (Search Enginie Optiization)</h4>
          <ul>
            <li className='text-lg text-gray-500'>
              23:00 to 24: 00
            </li>
          </ul>
        </div>
        </div>
        <div>
          <div className='flex'>
            <div className='flex flex-col justify-center px-10 border-r-2 border-solid border-gray-500'>
            <span className='text-center text-3xl text-white'>00</span>
            <span className='text-lg'>Days</span>
            </div>
            <div className='flex flex-col justify-center px-10 border-r-2 border-solid border-gray-500'>
            <span className='text-center text-3xl text-white'>00</span>
            <span className='text-lg'>Days</span>
            </div>
            <div className='flex flex-col justify-center px-10 border-r-2 border-solid border-gray-500'>
            <span className='text-center text-3xl text-white'>00</span>
            <span className='text-lg'>Days</span>
            </div>
            <div className='flex flex-col justify-center px-10 border-solid border-gray-500'>
            <span className='text-center text-3xl text-white'>00</span>
            <span className='text-lg'>Days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
