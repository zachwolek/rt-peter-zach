import './App.css'
import './Variables.css'
import { useState, useEffect } from 'react'
import Movies from './Movies'
import Header from './Header'
import Modal from './Modal'
import {getAllMovies, getSingleMovie} from './APICalls'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([])
  const [singleMovieDetails, setSingleMovieDetails] = useState(null)
  const [error, setError] = useState('')
  function updateSingleMovie(id) {
    getSingleMovie(id)
    .then(response => response.json())
    .then(data => {
      setSingleMovieDetails(data.movie)
      })
    .catch(error => setError(error.message))
}

  useEffect(() => {
    getAllMovies()
    .then((response) => {
      if(!response.ok) {
        throw new Error(`HTTP Status Code ${response.status}: ${response.statusText}`)
      }
      return response.json()})
      .then(data => {
        setMovies(data.movies)
      })
      .catch(error => {
        setError(error.message)})
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            {error && <h2>{error}</h2>}
            <Movies movies={movies} updateSingleMovie={updateSingleMovie}/>
          </>}>
        </Route>
        <Route path='/:movie_id' element={<Modal singleMovieDetails={singleMovieDetails}/>}></Route>
      </Routes>
    </>
  )
}

export default App

