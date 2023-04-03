import React from 'react'
import Link from 'next/link'
import {FaCalendarAlt, FaUserGraduate, FaChevronRight} from 'react-icons/fa'

interface data {
  link: string
  title: string
  authorLink: string
  authorname: string
  date: string
  overview: string
  taglink: string
  tag: string
}

export default function index(props: data) {
  return (
    <div className="content bg-teal-50 px-4 py-2">
      <Link href={'/categories/' + props.taglink + '/' + props.link}>
        <h3 className="text-black text-2xl font-bold pt-2">{props.title}</h3>
        <ul className="meta flex text-black py-4">
          <li>
            <Link href={'/author/' + props.authorLink} className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaUserGraduate />
              </span>
              {props.authorname}
            </Link>
          </li>
          <li className="pl-5 flex items-center">
            <span className="pr-1 text-red-500">
              <FaCalendarAlt />
            </span>
            <span>{props.date}</span>
          </li>
        </ul>
        <p>{props.overview}</p>
        <div className="meta flex justify-between text-black py-4">
          <span className="flex items-center">
            Read More
            <span className="pl-2 text-red-500">
              <FaChevronRight />
            </span>
          </span>
          <span className="pl-5">
            <Link href={'/categories/' + props.taglink} className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaCalendarAlt />
              </span>
              {props.tag}
            </Link>
          </span>
        </div>
      </Link>
    </div>
  )
}
