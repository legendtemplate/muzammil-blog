import React from 'react'
// import Coding from '@/components/coding'
import Tag from '@/components/tag'
import { lazy } from "react";
import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../libs/sanity.clients";
import { PreviewSuspense } from "next-sanity/preview";

const PreviewMovies = lazy(() => import("@/components/PreviewMovies"));

const query = groq`*[_type == "tag"  && defined(slug.current)]{
  _id,
  title, 
  "slug":slug.current,
  poster,
  description,
  date,
  month,
  poster,
}`;

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);
  
  return { props: { preview, data } };
};

export default function coding({preview,data}: {
  preview: Boolean;
  data: SanityDocument[];
}) {

  return preview ? (
    
    <PreviewSuspense fallback="Loading...">
      <PreviewMovies query={query} />
    </PreviewSuspense>
  ) : (
    <>
    <div className='bg-white'>
    <span className="py-3 mt-5 px-6 font-bold text-lg bg-red-500 block w-full text-white">
    Category
      </span>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 "> 
     <Tag movies={data} />
     </div>
     </div>
    </>
  );
}