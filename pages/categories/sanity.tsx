import React from 'react'
import Coding from '@/components/category/coding/blogCard'
import { lazy } from "react";
import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../libs/sanity.clients";
import { PreviewSuspense } from "next-sanity/preview";

const PreviewMovies = lazy(() => import("@/components/PreviewMovies"));

const query = groq`*[_type == "posts" && filter == "coding"  && defined(slug.current)]{
  _id,
  title, 
  slug,
  overview,
  poster,
  publishedAt,
  author->{name,bio,image,slug},
  category->{title,slug},
}`;

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);
  
  return { props: { preview, data } };
};

export default function sanity({preview,data,}: {
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
        Sanity
      </span>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 "> 
      
     <Coding movies={data} />
     </div>
     </div>
    </>
  );
}