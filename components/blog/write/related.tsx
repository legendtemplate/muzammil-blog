import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function related() {
  return (
    <div className="related grid lg:grid-cols-3 gird-cols-1 gap-4 ">
    <div className="cards">
      <div className="image">
        <Image
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          className="h-full w-full mb-3"
          alt=""
          height="999"
          width="999"
          title=""
        />
      </div>
      <span className="bg-red-200 px-2 py-1 rounded">Design</span>
      <div className="text mt-2">
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
    </div>
    <div className="cards">
      <div className="image">
        <Image
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          className="h-full w-full mb-3"
          alt=""
          height="999"
          width="999"
          title=""
        />
      </div>
      <span className="bg-red-200 px-2 py-1 rounded">Design</span>
      <div className="text mt-2">
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
    </div>
    <div className="cards">
      <div className="image">
        <Image
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          className="h-full w-full mb-3"
          alt=""
          height="999"
          width="999"
          title=""
        />
      </div>
      <span className="bg-red-200 px-2 py-1 rounded">Design</span>
      <div className="text mt-2">
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
    </div>
   
  </div>
  )
}

export default related