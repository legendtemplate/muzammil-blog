import Image from 'next/image';
import React from 'react'
import { 
  FaComment, 
  FaCalendarAlt, 
  FaUserGraduate 
} from "react-icons/fa";
export default function index() {
  return (
    <div  className="single-top-post relative w-full">
    <div className="image-thumb relative overflow-hidden">
      <div className="overlay overlay-bg"></div>
      <Image
        className="img-fluid-2 w-full img-fluid"
        src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg"
        alt=""
        title=""
      />
    </div>
    <div className="top-post-details absolute bottom-5 left-5">
      <div className="tags">
        <a href="#" className="md:px-5 px-3 text-white py-2 bg-red-500">
          Food Habit
        </a>
      </div>
      <a href="image-post.html">
        <h3 className="text-white md:text-2xl text-lg font-bold md:py-4 py-2">
          A Discount Toner Cartridge Is Better Than Ever.
        </h3>
      </a>
      <ul className="meta flex text-white">
        <li className="pl-1">
          <a href="#" className="flex items-center">
            <span className="pr-1">
              <FaUserGraduate />
            </span>
            Mark wiens
          </a>
        </li>
        <li className="pl-5">
          <a href="#" className="flex items-center">
            <span className="pr-1">
              <FaCalendarAlt />
            </span>
            03 April, 2018
          </a>
        </li>
        <li className="pl-5">
          <a href="#" className="flex items-center">
            <span className="pr-1">
              <FaComment />
            </span>
            06 Comments
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}
