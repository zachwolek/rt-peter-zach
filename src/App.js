import './App.css'
import './Variables.css'
import {movieData, singleMovieData} from './movieData'
import { useState, useEffect } from 'react'
import Movies from './Movies'
import Header from './Header'
import Modal from './Modal'
import makeAPICall from './APICalls'

function App() {
  const mockMovies = movieData.movies
  const singleMovieDetails = singleMovieData.movie
  const [movies, setMovies] = useState([])
  const [showModal, setShowModal] = useState(false)
  function toggleOpen(){
    setShowModal(!showModal)
  }

  useEffect(() => {
    makeAPICall()
      .then(data => {console.log("TEST API CALL: ", data.movies)
        setMovies(data.movies)
      })
  }, [])

  return (
    <div>
        <Header />
        {movies.length === 0 && <h2>Couldn't display movies..</h2>}
        {!showModal ? <Movies movies={movies} toggleOpen={toggleOpen}/> : <Modal singleMovieDetails={singleMovieDetails} setShowModal={toggleOpen}/>}
    </div>
  )
}

export default App

