import React, {useState, createContext} from 'react' 
import Nav from './Nav'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
  
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 23124
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 23125
    },
    {
      name: 'Inception',
      price: '$10',
      id: 23126
    }
  ])

    // isso aqui serve pra disponiblizar todas as informacoes que estao no state para os filhos desse componente
  return(
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}