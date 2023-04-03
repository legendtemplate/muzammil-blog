import { Button, HStack, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {
  FaComment,
  FaCalendarAlt,
  FaUserGraduate,
  FaCloudDownloadAlt,
} from "react-icons/fa";

export default function index() {
  return (
    <>
      <span className="py-3 mt-5 px-6 font-bold text-lg bg-red-500 block w-full text-white">
        Technology
      </span>
      <div className="grid lg:grid-cols-2 gird-cols-1 gap-4 bg-white">
        <div className=" p-5">
          <div className="img">
            <Image

              className="w-full"
              src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg"
                  alt=""
        title=""
        height="999"
        width="999"
            />
          </div>
          <div className="content bg-teal-50 p-6">
            <Link href="image-post.html">
              <h3 className="text-black text-2xl font-bold pt-4">
                A Discount Toner Cartridge Is Better Than Ever.
              </h3>
            </Link>
            <ul className="meta flex text-black py-4">
              <li>
                <Link href="#" className="flex items-center">
                  <span className="pr-1 text-red-500">
                    <FaUserGraduate />
                  </span>
                  Mark wiens
                </Link>
              </li>
              <li className="pl-5">
                <Link href="#" className="flex items-center">
                  <span className="pr-1 text-red-500">
                    <FaCalendarAlt />
                  </span>
                  03 April, 2018
                </Link>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem odit eaque iusto est asperiores. Nostrum vitae
              accusantium sint ad rem?
            </p>
            <div className="meta flex justify-between text-black py-4">
              <span>
                <Link href="#" className="flex items-center">
                  <span className="pr-1 text-red-500">
                    <FaUserGraduate />
                  </span>
                  Read More
                </Link>
              </span>
              <span className="pl-5">
                <Link href="#" className="flex items-center">
                  <span className="pr-1 text-red-500">
                    <FaCalendarAlt />
                  </span>
                  Folder
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className=" p-5">
          <div className="img">
            <Image
              className="w-full"
              src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg"
              alt=""
              title=""
              height="999"
              width="999"
            />
          </div>
          <div className="content bg-teal-50 p-6">
            <Link href="image-post.html">
              <h3 className="text-black text-2xl font-bold pt-4">
                A Discount Toner Cartridge Is Better Than Ever.
              </h3>
            </Link>
            <ul className="meta flex text-black py-4">
              <li>
                <Link href="#" className="flex items-center">
                  <span className="pr-1 text-red-500">
                    <FaUserGraduate />
                  </span>
                  Mark wiens
                </Link>
              </li>
              <li className="pl-5">
                <Link href="#" className="flex items-center">
                  <span className="pr-1 text-red-500">
                    <FaCalendarAlt />
                  </span>
                  03 April, 2018
                </Link>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem odit eaque iusto est asperiores. Nostrum vitae
              accusantium sint ad rem?
            </p>
            <div className="meta flex justify-between text-black py-4">
              <span>
                <Link href="#" className="flex items-center">
                  <span className="pr-1 text-red-500">
                    <FaUserGraduate />
                  </span>
                  Read More
                </Link>
              </span>
              <span className="pl-5">
                <Link href="#" className="flex items-center">
                  <span className="pr-1 text-red-500">
                    <FaCalendarAlt />
                  </span>
                  Folder
                </Link>
              </span>
            </div>
          </div>
        </div>

        <HStack className="flex justify-center item-center mb-4 mx-auto">
          <Button colorScheme="facebook" leftIcon={<FaCloudDownloadAlt />}>
            Load More
          </Button>
        </HStack>
      </div>
    </>
  );
}
