import {movieData, singleMovieData} from './movieData'
import { useState } from 'react'
import Movies from './Movies'
import Header from './Header'
import Modal from './Modal'
import './App.css'
import './Variables.css'
function App() {
  const mockMovies = movieData.movies
  const singleMovieDetails = singleMovieData.movie
  const [movies, setMovies] = useState(mockMovies)
  const [showModal, setShowModal] = useState(false)
  function toggleOpen(){
    setShowModal(!showModal)
  }
  return (
    <div>
        <Header />
        {movies.length === 0 && <h2>Couldn't display movies..</h2>}
        {!showModal ? <Movies movies={movies} toggleOpen={toggleOpen}/> : <Modal singleMovieDetails={singleMovieDetails} setShowModal={toggleOpen}/>}
    </div>
  )
}

export default App

