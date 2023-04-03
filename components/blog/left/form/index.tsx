import React from "react";
import { FaCalendarAlt, FaUserGraduate } from "react-icons/fa";
export default function index() {
  return (
    <div className="bg-white">
      <span className="py-2 px-3 font-normal mb-3 text-lg bg-red-500 block w-full text-white">
        Form:
      </span>
      <div className=" py-4 mb-5 px-6 flex justify-center flex-col">
        <input
          type="text"
          className="px-4 py-2 bg-gray-100 outline-none border-none w-full mb-4"
          placeholder="Enter Your Name"
        />
        <input
          type="text"
          className="px-4 py-2 bg-gray-100 outline-none border-none w-full mb-4"
          placeholder="Enter Your Email"
        />
        <textarea
          className="px-4 py-2 bg-gray-100 outline-none border-none w-full mb-4 h-32"
          placeholder="Enter Your Details"
        />
        <button className="bg-red-200 px-3 py-2">Submit</button>

        
      </div>
    </div>
  );
}
