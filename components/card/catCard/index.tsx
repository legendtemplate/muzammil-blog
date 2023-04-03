import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {client} from '../../../libs/sanity.clients'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)

interface data {
  title: string
  description: string
  poster: string
  slug: string
}

export default function index(props: data) {
  return (
    <>
      <li className="cards_item flex p-4">
        <div className="card bg-white rounded-lg flex flex-col overflow-hidden">
          <div className="card_image">
            <Image
              src={builder.image(props.poster).url()}
              alt={props.title}
              title={props.title}
              height="999"
              width="999"
            />
          </div>
          <div className="card_content p-4">
            <h2 className="card_title text-white m-0 capitalize text-lg font-bold">
              {props.title}
            </h2>
            <p className="card_text text-white mb-5 text-sm leading-6 font-normal">
              {props.description}
            </p>
            <a href={props.slug} className="btn card_btn">
              Read More
            </a>
          </div>
        </div>
      </li>
    </>
  )
}
