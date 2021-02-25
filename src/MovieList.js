import React, {useState, useContext} from 'react'
import Movie from './Movie'

import {MovieContext, MovieProvider} from './MovieContext'

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return(
    <div>
      {/* <h1>{value}</h1> */}
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id}/>
      ))}
    </div>
  )
}

export default MovieList