import React from "react";

import Link from "next/link";
import Image from 'next/image'
export default function index() {
  return (
    <>
        <div className=" p-4 mb-5 ">
          <span className=" h-full w-full">
            <Image src="https://preview.colorlib.com/theme/magazine/img/sidebar-ads.jpg" className="w-full"
            height="100" 
            width="100" 
            alt=""
            title=""
            />
          </span>
        </div>
    </>
  );
}
