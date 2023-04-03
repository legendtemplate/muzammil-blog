import React from 'react'
import {FaCalendarAlt, FaUserGraduate} from 'react-icons/fa'
import Link from 'next/link'
import {BlogCardWrite} from '@/types/index'


export default function head(props: BlogCardWrite ) {
  return (
    <>
      <Link
        href={'/categories/' + props.catlink}
        className="bg-red-400 text-white px-2 py-1 rounded"
      >
        {props.cat}
      </Link>
      <div className="heading">
        <h1 className="text-3xl font-bold py-2 text-left flex justify-start pt-4">
          <strong>{props.title}</strong>
        </h1>
      </div>
      <ul className="flex">
        <li className="mr-4 ">
          <Link href={'/author/' + props.authorLink} className="flex justify-center items-center">
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
