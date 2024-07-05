import {movieData, singleMovieData} from './movieData'
import { useState } from 'react'
import Movies from './Movies'
import Header from './Header'
import Modal from './Modal'
import './App.css'

function App() {
  const mockMovies = movieData.movies
  const [movies, setMovies] = useState(mockMovies)

  function displayMovieDetails(){
    const singleMovieDetails = singleMovieData.movie
    return (
      <Modal singleMovieDetails={singleMovieDetails}/>
    )
  }

  return (
    <div>
        <Header />
        {movies.length === 0 && <h2>Couldn't display movies..</h2>}
        <Movies movies={movies} displayMovieDetails={displayMovieDetails}/>
    </div>
  )
}

export default App

