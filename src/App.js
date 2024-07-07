import './App.css'
import './Variables.css'
import { useState, useEffect } from 'react'
import Movies from './Movies'
import Header from './Header'
import Modal from './Modal'
import {getAllMovies, getSingleMovie} from './APICalls'

function App() {

  const [movies, setMovies] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [singleMovieDetails, setSingleMovieDetails] = useState([])
  const [error, setError] = useState('')
  function updateSingleMovie(id) {
    getSingleMovie(id)
    .then(response => response.json())
    .then(data => {
      console.log("data.movie: ", data.movie)
      setSingleMovieDetails(data.movie)
      toggleOpen()})
    .catch(error => setError(error.message))
}
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
        {!showModal ? <Movies movies={movies} toggleOpen={toggleOpen} updateSingleMovie={updateSingleMovie}/> : <Modal singleMovieDetails={singleMovieDetails} setShowModal={toggleOpen}/>}
        {error && <h2>{error} could not load page</h2>}
    </div>
  )
}

export default App

