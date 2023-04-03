import React from 'react'
import {client} from '../../../libs/sanity.clients'
import {urlFor} from '../../../libs/image.builder'
import Image from 'next/image'

interface data {
  bio: string
  date: string
  author: string
  poster: string
}

export default function author(props: data) {
  return (
    <>
      <div className="author grid lg:grid-cols-3 gird-cols-1 gap-4 py-4 ">
        <div className="image">
          <Image
            src={urlFor(props.poster).width(500).height(300).url()}
            alt={props.author}
            title={props.author}
            height="300"
            width="300"
          />
        </div>
        <div className="text col-span-2">
          <span className="text-2xl font-bolb">{props.author}</span>
          <p className="py-5">{props.bio}</p>
          <p className="py-5">{props.date}</p>
        </div>
      </div>
    </>
  )
}
