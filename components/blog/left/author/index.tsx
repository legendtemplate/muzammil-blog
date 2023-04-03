import React from "react";

import Image from 'next/image'
export default function index() {
  return (
    <>
      <div className="bg-white">
        <div className=" p-4 mb-5 flex justify-center items-center flex-col">
          <div className=" author">
            <Image
              src="https://preview.colorlib.com/theme/magazine/img/sidebar-ads.jpg"
              className="rounded-full h-20 w-20"
              alt=""
              height={20}
              width={20}
              title=""
            />
          </div>
          <div className="text-center">
            <h6 className="font-semibold text-2xl pt-2">Lorem, ipsum.</h6>
            <span className="font-bold text-lg py-6">Profesoinal</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus excepturi dolor perspiciatis dolores harum assumenda
              voluptatem accusantium amet sapiente optio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
