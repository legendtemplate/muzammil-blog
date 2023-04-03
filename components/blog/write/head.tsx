import React from 'react'
import {client} from '../../../libs/sanity.clients'
import imageUrlBuilder from '@sanity/image-url'
import {FaCalendarAlt, FaUserGraduate} from 'react-icons/fa'
import Link from 'next/link'
const builder = imageUrlBuilder(client)

interface data {
  authorlink: string
  date: string
  author: string
  title: string
  cat: string
  catlink: string
}

export default function head(props: data) {
  return (
    <>
      <Link
        href={'/categories/' + props.catlink}
        className="bg-red-400 text-white px-2 py-1 rounded"
      >
        {props.cat}
      </Link>
      <div className="heading">
        <h1 className="text-3xl font-bold py-2  pt-4">
          <strong>{props.title}</strong>
        </h1>
      </div>
      <ul className="flex">
        <li className="mr-4 ">
          <Link href={'/author/' + props.authorlink} className="flex justify-center items-center">
            <span className="mr-2">
              <FaUserGraduate />
            </span>
            {props.author}
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <span className="mr-2">
            <FaCalendarAlt />
          </span>
          {props.date}
        </li>
      </ul>
    </>
  )
}
