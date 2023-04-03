import {SanityDocument} from '@sanity/client'
import {GetStaticPaths, GetStaticProps} from 'next'
import {groq} from 'next-sanity'
import {client} from '../../../libs/sanity.clients'
import Left from '@/components/blog/left'
import {PortableText} from '@portabletext/react'
import Head from 'next/head'
import Link from 'next/link'
import Poster from '@/components/card/blog/write/poster'
import Heading from '@/components/card/blog/write/head'
import Author from '@/components/blog/write/author'
import Banner from '@/components/category/coding/banner'
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);
const query = groq`*[_type == "css" && slug.current == $slug][0]{
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "css" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  )

  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryParams = {slug: params?.slug ?? ``}

  const post = await client.fetch(query, queryParams)

  return {
    props: {
      post,
    },
  }
}
type TagList = {
  title: string
  slug: string
}
type PageProps = {
  post: {
    tag: Array<TagList>
    body: []
    publishedAt: string
    author: any
    category: any
    overview: string
    title: string
    poster: string
    slug: string
    movie: SanityDocument
  }
}
const DOMAIN = 'https://muzammil-blog.vercel.app/'
const canonical = DOMAIN

export default function Page({post}: PageProps) {
  const {title = 'title', category, author, publishedAt, tag, poster, body = []} = post
  return (
    <>
     {/* content=*/}
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.overview} />
        <meta key="og_title" property="og:title" content={post.title} />
        <meta key="og_description" property="og:description" content={post.overview} />
        <meta key="og_url" property="og:url" 
        // content={canonical ?? DOMAIN}  
        // {`${title} | ${siteName}`} 
        content={post.slug} 
        />
        <meta key="og_image" property="og:image" 
        // content={post.poster} 
         content={builder.image(post.poster).url()}
        />
        <meta key="og_image:alt" property="og:image:alt" content={post.title} />

        <meta name="robots" content="index,follow" />
        <meta key="twitter:title" property="twitter:title" content={post.title} />
        <meta key="twitter:description" property="twitter:description" content={post.overview} />
        <link rel="canonical" href={canonical ?? DOMAIN} />

      </Head>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 md:p-4 p-1">
        <div className="col-span-3">
          <main className="bg-white md:p-3 p-1">
            <Poster poster={poster} title={title} />
            <div className="context pl-2">
              <Heading
                date={publishedAt}
                author={author.name}
                authorLink={author.slug}
                cat={category.title}
                catlink={category.slug}
                title={title}                 />
            </div>
            <div className="p-4  leading-10 tracking-wider">
              <p>
                <PortableText value={body} />
              </p>
            </div>
            <div className="tag pb-6">
              <ul className="flex">
                {tag && (
                  <>
                    {tag.map((tags: any) => (
                      <li key={tags}>
                        <Link href={tags.slug} className='bg-red-400 px-3 mr-4 rounded text-white py-2'>{tags.title}</Link>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </main>
        </div>
        {/* <div>
          <Left />
        </div> */}
      </div>
    </>
  )
}

interface data {
  title: string
  slug: string
}



