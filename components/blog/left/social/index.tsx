import React from "react";
import Link from 'next/link';
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
export default function index() {
  return (
    <>
      <div className="bg-white">
        <span className="py-2 px-3 font-normal mb-3 text-lg bg-red-500 block w-full text-white">
          Social Links: 
        </span>
        <div className=" p-4 mb-5 ">
        <div className='social flex items-center justify-center '>
       <Link href="" className='mr-5 border-2 border-red-500 border-dotted p-4 rounded-full'>
       <FaFacebookF />
       </Link>
       <Link href="" className='mr-5 border-2 border-red-500 border-dotted p-4 rounded-full'>
       <FaYoutube />
       </Link>
       <Link href="" className='mr-5 border-2 border-red-500 border-dotted p-4 rounded-full'>
       <FaLinkedin />
       </Link>
       <Link href="" className='mr-5 border-2 border-red-500 border-dotted p-4 rounded-full'>
       <FaInstagram />
       </Link>
    </div>
        </div>
      </div>
    </>
  );
}
