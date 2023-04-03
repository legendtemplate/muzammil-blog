import React from 'react'
import type {SanityDocument} from '@sanity/client'
import Card from '@/components/card/catCard'

export default function catCard({movies}: {movies: SanityDocument[]}) {
  return (
    <>
      
      <div className="main ">
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
          {movies.map((movie) => (
            <div className=" p-5" key={movie._id}>
              <Card
                title={movie.title}
                description={movie.description}
                poster={movie.poster}
                slug={'/coding/html/' + movie.slug}
              />
            </div>
          ))}
        </ul>
      </div>

    </>
  )
}
