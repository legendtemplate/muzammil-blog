import Content from '@/components/category/css/content'
import ContentData from '@/components/category/css/padding'
import {lazy} from 'react'
import {groq} from 'next-sanity'
import type {SanityDocument} from '@sanity/client'
import {client} from '../../../libs/sanity.clients'
import {PreviewSuspense} from 'next-sanity/preview'
import Link from 'next/link'
const PreviewMovies = lazy(() => import('@/components/PreviewMovies'))

const query1 = groq`*[_type == "css" && title == "padding" && defined(slug.current)]{
  _id,
  title, 
  description,
  body,
  poster,
  publishedAt,
  "slug":slug.current,
  category->{title,"slug": slug.current},  
  author->{name,bio,poster,"slug":slug.current,},  
  "tag": tag[]->{title,"slug": slug.current},
}`

export const getStaticProps = async ({preview = false}) => {
  if (preview) {
    return {props: {preview}}
  }
  const data1 = await client.fetch(query1)

  return {props: {preview, data1}}
}

export default function padding({preview, data1}: {preview: Boolean; data1: SanityDocument[]}) {
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
              <h1 className="text-3xl text-black font-medium text-start py-2">Blog Website</h1>
            </div>
            <div>
              <ul className="flex">
                <li>
                  <Link href="/">
                    Home <span className="mx-2">/</span>{' '}
                  </Link>
                </li>
                <li>
                  <Link href="/categories/coding">
                    Coding <span className="mx-2">/</span>{' '}
                  </Link>
                </li>
                <li>css</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 md:p-4 p-1 container mx-auto">
        <div className="col-span-3">
          <Content movies={data1} />
          <ContentData />
        </div>
        {/* <div>
          <Left />
        </div> */}
      </div>
    </>
  )
}
