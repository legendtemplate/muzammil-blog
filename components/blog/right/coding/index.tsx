/* eslint-disable react/jsx-key */
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../libs/sanity.clients";
import {
  FaComment,
  FaCalendarAlt,
  FaUserGraduate,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import type { SanityDocument } from "@sanity/client";

const builder = imageUrlBuilder(client);

export default function coding({ movies }: { movies: SanityDocument[] }) {
  return (
    <>
   
      <span className="py-3 mt-5 px-6 font-bold text-lg bg-red-500 block w-full text-white">
        Coding
      </span>
      <div className="grid lg:grid-cols-2 gird-cols-1 gap-4 bg-white">
        {movies.map((movie) => (
         <div className=" p-5">
         <div className="img">
           <Image
             className="w-full"
          src={builder.image(movie.poster).url()}
             alt={movie.title}
             title={movie.title}
height="999"
width="999"
           />
         </div>
         <div className="content bg-teal-50 p-6">
           <Link href="image-post.html">
             <h3 className="text-black text-2xl font-bold pt-4">
             {movie.title}
             </h3>
           </Link>
           <ul className="meta flex text-black py-4">
             <li>
               <Link href="#" className="flex items-center">
                 <span className="pr-1 text-red-500">
                   <FaUserGraduate />
                 </span>
                 {movie.author.name}
               </Link>
             </li>
             <li className="pl-5">
               <Link href="#" className="flex items-center">
                 <span className="pr-1 text-red-500">
                   <FaCalendarAlt />
                 </span>
                 {movie.publishedAt}
               </Link>
             </li>
           </ul>
           <p>
           {movie.overview}
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
                 {movie.category.title}
               </Link>
             </span>
           </div>
         </div>
       </div>
        ))}
      </div> 
    </>
  );
}
