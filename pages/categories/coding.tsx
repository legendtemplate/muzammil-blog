import Coding from '@/components/category/coding/blogCard'
import {lazy} from 'react'
import {groq} from 'next-sanity'
import type {SanityDocument} from '@sanity/client'
import {client} from '../../libs/sanity.clients'
import {PreviewSuspense} from 'next-sanity/preview'
import Head from 'next/head'
import Card from '@/components/category/coding/catCard'
import Link from 'next/link'

const PreviewMovies = lazy(() => import('../../components/PreviewMovies'))

const query1 = groq`*[_type == "category" && filter == "coding"  && defined(slug.current)]{
  _id,
  title, 
  description,
  poster,
  "slug":slug.current,
}`
const query2 = groq`*[_type == "posts" && filter == "coding"  && defined(slug.current)]{
  _id,
  title, 
  overview,
  poster,
  publishedAt,
  author->{name,bio,image,slug},
  category->{title,slug},
  slug
}[0...9]`
export const getStaticProps = async ({preview = false}) => {
  if (preview) {
    return {props: {preview}}
  }
  const data1 = await client.fetch(query1)
  const data2 = await client.fetch(query2)

  return {props: {preview, data1, data2}}
}

export default function Home({
  preview,
  data1,
  data2,
}: {
  preview: Boolean
  data1: SanityDocument[]
  data2: SanityDocument[]
}) {
  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <PreviewMovies query={query1} />
    </PreviewSuspense>
  ) : (
    <>
      <div className="bg-gray-100 h-40">
        <div className="container mx-auto">
          <div className="flex py-10 flex-col">
            <div>
              <h1 className="text-3xl text-black font-medium text-start py-2">
                <strong>Coding</strong>
              </h1>
            </div>
            <div>
              <ul className="flex">
                <li>
                  <Link href="/">
                    Home <span className="mx-2">/</span>
                  </Link>
                </li>
                <li>Coding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Card movies={data1} />
      <div className="col-span-2 bg-white">
        <span className="py-3 px-6 font-bold text-lg bg-red-500 block w-full text-white">
          Coding
        </span>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
          <Coding movies={data2} />
        </div>
      </div>
    </>
  )
}
