import React from 'react'
import type {SanityDocument} from '@sanity/client'
import Heading from '@/components/card/blog/write/head'
import Poster from '@/components/card/blog/write/poster'

export default function catCard({movies}: {movies: SanityDocument[]}) {
  return (
    <>
      
          {movies.map((movie) => (
                    <>
                     <Poster poster={movie.poster} title={movie.title} />
                     <div className="context pl-2">
                       <Heading
                          date={movie.publishedAt}
                          cat={movie.category.title}
                          catlink={movie.category.slug}
                          title={movie.title} 
                          authorLink={movie.author.slug} 
                          author={movie.author.name}                         
                          />
                     </div>
                    </>
          ))}

    </>
  )
}
