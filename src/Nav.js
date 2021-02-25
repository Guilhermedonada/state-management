import React,{useContext} from 'react'
import {MovieContext} from './MovieContext'

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return(
    <nav className="">
      <h3>Donada</h3>
      <p>List of movies:{movies.length}</p>
    </nav>
  )
}

export default Nav