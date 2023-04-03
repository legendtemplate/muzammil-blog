import React from "react";
import {
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image'
export default function index() {
  return (
    <>
      {" "}
      <div className="bg-white">
        <span className="py-2 px-3 font-normal mb-3 text-lg bg-red-500 block w-full text-white">
          Popular Post: 
        </span>
        <div className=" p-2 mb-5 flex ">
         <div className="img"> <Image 
         src="https://preview.colorlib.com/theme/magazine/img/sidebar-ads.jpg" 
         className="h-20 w-24"
         height={20}
         width={40}
         alt=""
         title=""
          /></div>
         <div className="text flex flex-col ml-5">
          <div><h4 className="text-base font-semibold">How we download vscode for windows?</h4></div>
          <div className="flex items-center">
            <span className="flex mr-4 justify-center items-center"><FaUserGraduate className="mr-2"/> fdnf</span>
            <span className="flex justify-center items-center"><FaCalendarAlt className="mr-2"/> fdnf</span>
          </div>
         </div>
        </div>
        <div className=" p-2 mb-5 flex ">
         <div className="img"> <Image 
         src="https://preview.colorlib.com/theme/magazine/img/sidebar-ads.jpg" 
         className="h-20 w-24"
         height={20}
         width={40}
         alt=""
         title=""
          /></div>
         <div className="text flex flex-col ml-5">
          <div><h4 className="text-base font-semibold">How we download vscode for windows?</h4></div>
          <div className="flex items-center">
            <span className="flex mr-4 justify-center items-center"><FaUserGraduate className="mr-2"/> fdnf</span>
            <span className="flex justify-center items-center"><FaCalendarAlt className="mr-2"/> fdnf</span>
          </div>
         </div>
        </div>
        <div className=" p-2 mb-5 flex ">
         <div className="img"> <Image 
         src="https://preview.colorlib.com/theme/magazine/img/sidebar-ads.jpg" 
         className="h-20 w-24"
         height={20}
         width={40}
         alt=""
         title=""
          /></div>
         <div className="text flex flex-col ml-5">
          <div><h4 className="text-base font-semibold">How we download vscode for windows?</h4></div>
          <div className="flex items-center">
            <span className="flex mr-4 justify-center items-center"><FaUserGraduate className="mr-2"/> fdnf</span>
            <span className="flex justify-center items-center"><FaCalendarAlt className="mr-2"/> fdnf</span>
          </div>
         </div>
        </div>
        <div className=" p-2 mb-5 flex ">
         <div className="img"> <Image 
         src="https://preview.colorlib.com/theme/magazine/img/sidebar-ads.jpg" 
         className="h-20 w-24"
         height={20}
         width={40}
         alt=""
         title=""
          /></div>
         <div className="text flex flex-col ml-5">
          <div><h4 className="text-base font-semibold">How we download vscode for windows?</h4></div>
          <div className="flex items-center">
            <span className="flex mr-4 justify-center items-center"><FaUserGraduate className="mr-2"/> fdnf</span>
            <span className="flex justify-center items-center"><FaCalendarAlt className="mr-2"/> fdnf</span>
          </div>
         </div>
        </div>
        <div className=" p-2 mb-5 flex ">
         <div className="img"> <Image 
         src="https://preview.colorlib.com/theme/magazine/img/sidebar-ads.jpg" 
         className="h-20 w-24"
         height={20}
         width={40}
         alt=""
         title=""
          /></div>
         <div className="text flex flex-col ml-5">
          <div><h4 className="text-base font-semibold">How we download vscode for windows?</h4></div>
          <div className="flex items-center">
            <span className="flex mr-4 justify-center items-center"><FaUserGraduate className="mr-2"/> fdnf</span>
            <span className="flex justify-center items-center"><FaCalendarAlt className="mr-2"/> fdnf</span>
          </div>
         </div>
        </div>
       
      </div>
    </>
  );
}
