import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import {client} from '../../../libs/sanity.clients'
import type {SanityDocument} from '@sanity/client'
import Content from '@/components/blog/content'
import Image from 'next/image'

const builder = imageUrlBuilder(client)

export default function blogCard({movies}: {movies: SanityDocument[]}) {
  return (
    <>
      {movies.map((movie) => (
        <div className=" p-5" key={movie._id}>
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
          <Content
            title={movie.title}
            overview={movie.overview}
            link={movie.slug.current}
            date={movie.publishedAt}
            authorLink={movie.author.slug.current}
            authorname={movie.author.name}
            taglink={movie.category.slug.current}
            tag={movie.category.title}
          />
        </div>
      ))}
    </>
  )
}
