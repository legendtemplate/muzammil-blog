import Coding from '@/components/category/coding/blogCard'
import Left from '@/components/blog/left'
import {lazy} from 'react'
import {groq} from 'next-sanity'
import type {SanityDocument} from '@sanity/client'
import {client} from '../libs/sanity.clients'
import {PreviewSuspense} from 'next-sanity/preview'
import Head from 'next/head'

const PreviewMovies = lazy(() => import('../components/PreviewMovies'))
const query2 = groq`*[_type == "posts" 
&& filter == "how to" 
&& defined(slug.current)]{
  _id,
  title, 
  overview,
  poster,
  publishedAt,
  author->{name,bio,image,slug},
  category->{title,slug},
  slug
}[0...2]`
const query1 = groq`*[_type == "posts" && filter == "coding"  && defined(slug.current)]{
  _id,
  title, 
  overview,
  poster,
  publishedAt,
  author->{name,bio,image,slug},
  category->{title,slug},
  slug
}[0...2]`

export const getStaticProps = async ({preview = false}) => {
  if (preview) {
    return {props: {preview}}
  }
  const data1 = await client.fetch(query1)
  const data2 = await client.fetch(query2)

  return {props: {preview, data2, data1}}
}

const DOMAIN = 'https://www.jimraptis.com'
const DEFAULT_OG_IMAGE = '/share.jpg'
const title = 'Home - Blog website'
const description = 'Home - Blog website'
const siteName = 'Blog website'
const canonical = DOMAIN
const ogImage = DEFAULT_OG_IMAGE
const ogType = 'website'
const twitterHandle = '@d__raptis'

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
      <Head>
        <title key="title">{`${title} – ${siteName}`}</title>
        <meta name="description" content={description} />
        <meta key="og_type" property="og:type" content={ogType} />
        <meta key="og_title" property="og:title" content={title} />
        <meta key="og_description" property="og:description" content={description} />
        <meta key="og_locale" property="og:locale" content="en_IE" />
        <meta key="og_site_name" property="og:site_name" content={siteName} />
        <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
        <meta key="og_site_name" property="og:site_name" content={siteName} />
        <meta key="og_image" property="og:image" content={ogImage ?? DEFAULT_OG_IMAGE} />
        <meta key="og_image:alt" property="og:image:alt" content={`${title} | ${siteName}`} />
        <meta key="og_image:width" property="og:image:width" content="1200" />
        <meta key="og_image:height" property="og:image:height" content="630" />

        <meta name="robots" content="index,follow" />

        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
        <meta key="twitter:creator" name="twitter:creator" content={twitterHandle} />
        <meta key="twitter:title" property="twitter:title" content={title} />
        <meta key="twitter:description" property="twitter:description" content={description} />

        <link rel="canonical" href={canonical ?? DOMAIN} />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto grid lg:grid-cols-3 gird-cols-1 gap-4  pt-4">
        <div className="col-span-2">
          <div className="col-span-2 bg-white">
            <span className="py-3 px-6 font-bold text-lg bg-red-500 block w-full text-white">
              Coding
            </span>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
              <Coding movies={data1} />
            </div>
          </div>
          <div className="col-span-2 bg-white mt-3">
            <span className="py-3 px-6 font-bold text-lg bg-red-500 block w-full text-white">
              How To
            </span>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
              <Coding movies={data2} />
            </div>
          </div>
        </div>
        <div>
          <Left />
        </div>
      </div>
    </>
  )
}
