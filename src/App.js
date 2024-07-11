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
  const [filteredMovies, setFilteredMovies] = useState([])
  const [singleMovieDetails, setSingleMovieDetails] = useState(null)
  const [error, setError] = useState('')
  // const movieIDs = [];
  // function getAllMovieIds(movies) {
  //   movies.forEach(movie => {
  //     movieIDs.push(movie.id)
  //   })
  //   return movieIDs
  // }
  // function getMovieDetails() {
  //   const searchedMovies = []
  //   const filteredByGenre = [];
  //   movieIDs.forEach(id => {
  //     fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //         data.genres.forEach(genre => {
  //             if (!filteredByGenre.includes(genre)) {
  //                 filteredByGenre.push(genre)
  //             }
  //         })
  //         searchedMovies.push({[data.title]:data.genres})
  //     })
  //     })
  //     console.log("SearchedMovies: ", searchedMovies)
  //     console.log("FilteredByGenres: ", filteredByGenre)
  // }
  
  useEffect(() => {
    getAllMovies()
    .then((response) => {
      if(!response.ok) {
        throw new Error(`HTTP Status Code ${response.status}: ${response.statusText}`)
      }
      return response.json()})
      .then(data => {
        setMovies(data.movies)
        setFilteredMovies(data.movies)
        // getAllMovieIds(data.movies)
      })
      .catch(error => {
        setError(error.message)})
      }, [])
  function updateSingleMovie(id) {
        getSingleMovie(id)
        .then(response => response.json())
        .then(data => {
          setSingleMovieDetails(data.movie)
          })
        .catch(error => setError(error.message))
    }
  function updateMovies(filteredMovies) {
    setMovies(filteredMovies)
  }
  
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header movies={filteredMovies} updateMovies={updateMovies}/>
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

