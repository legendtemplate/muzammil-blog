import React from 'react'
import Left from '@/components/blog/left'
import Right from '@/components/blog/right'

function index() {
  return (
    <div className='container mx-auto grid lg:grid-cols-3 gird-cols-1 gap-4  pt-4'>
      <div className='col-span-2'><Right /></div>
      <div><Left /></div>
    </div>
  )
}

export default index