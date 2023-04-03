import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <>
      <div className="bg-white">
        <span className="py-2 px-3 font-normal mb-3 text-lg bg-red-500 block w-full text-white">
          Tags: 
        </span>
        <div className=" p-4 mb-5 ">
        <ul >
          <li className="inline-block ml-3 mb-4"><Link href="" className="px-3 py-1 border-2 border-solid border-gray-100 font-semibold hover:border-red-500 text-red-500 bg-gray-100 hover:text-white hover:bg-red-500 transition-all">Home</Link></li>
          <li className="inline-block ml-3 mb-4"><Link href="" className="px-3 py-1 border-2 border-solid border-gray-100 font-semibold hover:border-red-500 text-red-500 bg-gray-100 hover:text-white hover:bg-red-500 transition-all">Home</Link></li>
          <li className="inline-block ml-3 mb-4"><Link href="" className="px-3 py-1 border-2 border-solid border-gray-100 font-semibold hover:border-red-500 text-red-500 bg-gray-100 hover:text-white hover:bg-red-500 transition-all">Home</Link></li>
          <li className="inline-block ml-3 mb-4"><Link href="" className="px-3 py-1 border-2 border-solid border-gray-100 font-semibold hover:border-red-500 text-red-500 bg-gray-100 hover:text-white hover:bg-red-500 transition-all">Home</Link></li>
          <li className="inline-block ml-3 mb-4"><Link href="" className="px-3 py-1 border-2 border-solid border-gray-100 font-semibold hover:border-red-500 text-red-500 bg-gray-100 hover:text-white hover:bg-red-500 transition-all">Home</Link></li>
          <li className="inline-block ml-3 mb-4"><Link href="" className="px-3 py-1 border-2 border-solid border-gray-100 font-semibold hover:border-red-500 text-red-500 bg-gray-100 hover:text-white hover:bg-red-500 transition-all">Home</Link></li>
          <li className="inline-block ml-3 mb-4"><Link href="" className="px-3 py-1 border-2 border-solid border-gray-100 font-semibold hover:border-red-500 text-red-500 bg-gray-100 hover:text-white hover:bg-red-500 transition-all">Home</Link></li>
          <li className="inline-block ml-3 mb-4"><Link href="" className="px-3 py-1 border-2 border-solid border-gray-100 font-semibold hover:border-red-500 text-red-500 bg-gray-100 hover:text-white hover:bg-red-500 transition-all">Home</Link></li>
          <li className="inline-block ml-3 mb-4"><Link href="" className="px-3 py-1 border-2 border-solid border-gray-100 font-semibold hover:border-red-500 text-red-500 bg-gray-100 hover:text-white hover:bg-red-500 transition-all">Home</Link></li>
        </ul>
        </div>
      </div>
    </>
  );
}
