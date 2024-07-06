import './App.css'
import './Variables.css'
import {movieData, singleMovieData} from './movieData'
import { useState, useEffect } from 'react'
import Movies from './Movies'
import Header from './Header'
import Modal from './Modal'
import {getAllMovies, getSingleMovie} from './APICalls'

function App() {
  const singleMovie = singleMovieData.movie
  const [movies, setMovies] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [singleMovieDetails, setSingleMovieDetails] = useState([])
  const [error, setError] = useState('')
  function toggleOpen(){
    setShowModal(!showModal)
  }
  useEffect(() => {
    getAllMovies()
    .then((response) => {
      if(!response.ok) {
        throw new Error('could not fetch')
      }
      return response.json()})
      .then(data => {
        console.log(data.movies)
        setMovies(data.movies)
      })
      .catch(error => {
        setError(error.message)})
  }, [])

  return (
    <div>
        <Header />
        {(!error && movies.length === 0) && <h2>Loading...</h2>}
        {!showModal ? <Movies movies={movies} toggleOpen={toggleOpen} getSingleMovie={getSingleMovie}/> : <Modal singleMovieDetails={singleMovie} setShowModal={toggleOpen}/>}
        {error && <h2>{error} could not load page</h2>}
    </div>
  )
}

export default App

