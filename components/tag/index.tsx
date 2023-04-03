/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {client} from '../../libs/sanity.clients'
import type {SanityDocument} from '@sanity/client'
import {urlFor} from '../../libs/image.builder'


export default function tag({movies}: {movies: SanityDocument[]}) {
  return (
    <>
        {movies.map((movie) => (
          // eslint-disable-next-line react/jsx-key
          <div className="row pt-4" key={movie._id}>
            <figure className="snip1527">
              <div className="image">
                <img
            src={urlFor(movie.poster).width(500).height(300).url()}
                  alt={movie.title}
                />
              </div>
              <figcaption>
                <div className="date">
                  <span className="day"> {movie.date}</span>
                  <span className="month"> {movie.month}</span>
                </div>
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
              </figcaption>
              <a href={ '/categories/' + movie.slug}></a>
            </figure>
       
          </div>
        ))}
    </>
  )
}
