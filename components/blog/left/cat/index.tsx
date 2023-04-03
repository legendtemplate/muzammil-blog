import React from "react";
import { FcCheckmark } from "react-icons/fc";
import Link from "next/link";
import Image from 'next/image'
export default function index() {
  return (
    <>
      <div className="bg-white">
        <span className="py-2 px-3 font-normal mb-3 text-lg bg-red-500 block w-full text-white">
          Categories:
        </span>
        <div className=" p-3 mb-5 ">
          <ul className="category flex flex-col">
            <li><Link href="#" className="flex justify-between items-center hover:text-red-500 transition-all border-b-2 border-solid border-gray-200 py-1"><span className="text-lg py-1 font-normal flex justify-center items-center"><FcCheckmark className="mr-2" /> Blog</span><span className="text-base py-1 font-normal">2</span></Link></li>
            <li><Link href="#" className="flex justify-between items-center hover:text-red-500 transition-all border-b-2 border-solid border-gray-200 py-1"><span className="text-lg py-1 font-normal flex justify-center items-center"><FcCheckmark className="mr-2" /> Blog</span><span className="text-base py-1 font-normal">4</span></Link></li>
            <li><Link href="#" className="flex justify-between items-center hover:text-red-500 transition-all border-b-2 border-solid border-gray-200 py-1"><span className="text-lg py-1 font-normal flex justify-center items-center"><FcCheckmark className="mr-2" /> Blog</span><span className="text-base py-1 font-normal">6</span></Link></li>
            <li><Link href="#" className="flex justify-between items-center hover:text-red-500 transition-all border-b-2 border-solid border-gray-200 py-1"><span className="text-lg py-1 font-normal flex justify-center items-center"><FcCheckmark className="mr-2" /> Blog</span><span className="text-base py-1 font-normal">8</span></Link></li>
            <li><Link href="#" className="flex justify-between items-center hover:text-red-500 transition-all border-b-2 border-solid border-gray-200 py-1"><span className="text-lg py-1 font-normal flex justify-center items-center"><FcCheckmark className="mr-2" /> Blog</span><span className="text-base py-1 font-normal">10</span></Link></li>
            <li><Link href="#" className="flex justify-between items-center hover:text-red-500 transition-all border-b-2 border-solid border-gray-200 py-1"><span className="text-lg py-1 font-normal flex justify-center items-center"><FcCheckmark className="mr-2" /> Blog</span><span className="text-base py-1 font-normal">12</span></Link></li>
            <li><Link href="#" className="flex justify-between items-center hover:text-red-500 transition-all border-b-2 border-solid border-gray-200 py-1"><span className="text-lg py-1 font-normal flex justify-center items-center"><FcCheckmark className="mr-2" /> Blog</span><span className="text-base py-1 font-normal">14</span></Link></li>
            <li><Link href="#" className="flex justify-between items-center hover:text-red-500 transition-all border-b-2 border-solid border-gray-200 py-1"><span className="text-lg py-1 font-normal flex justify-center items-center"><FcCheckmark className="mr-2" /> Blog</span><span className="text-base py-1 font-normal">16</span></Link></li>
            <li><Link href="#" className="flex justify-between items-center hover:text-red-500 transition-all border-b-2 border-solid border-gray-200 py-1"><span className="text-lg py-1 font-normal flex justify-center items-center"><FcCheckmark className="mr-2" /> Blog</span><span className="text-base py-1 font-normal">18</span></Link></li>
            <li><Link href="#" className="flex justify-between items-center hover:text-red-500 transition-all"><span className="text-lg py-1 font-normal flex justify-center items-center"><FcCheckmark className="mr-2" /> Blog</span><span className="text-base py-1 font-normal">20</span></Link></li>
           
          </ul>
          </div>
      </div>
    </>
  );
}
