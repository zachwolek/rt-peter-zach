import './App.css'
import './Variables.css'
import { useState, useEffect } from 'react'
import Movies from './Movies'
import Header from './Header'
import Modal from './Modal'
import {getAllMovies, getSingleMovie, getMovieDetails} from './APICalls'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [singleMovieDetails, setSingleMovieDetails] = useState(null)
  const [error, setError] = useState('')
  const movieIDs = [];
  const searchedMovies = [];
  const filteredByGenre = [];
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
        getAllMovieIds(data.movies)
        getSingleMovieDetails()
      })
      .catch(error => {
        setError(error.message)})
    }, [])
  
  function getAllMovieIds(movies) {
    movies.forEach(movie => {
      movieIDs.push(movie.id)
    })
    return movieIDs
  }

  function getSingleMovieDetails() {
    const moviePromises = getMovieDetails(movieIDs)
    Promise.all(moviePromises)
    .then(data => {
      data.forEach(movie => {
        searchedMovies.push({[movie.title]:[]})
        movie.genres.forEach(genre => {
        if (!filteredByGenre.includes(genre)) {
            filteredByGenre.push(genre)
        }
       })
      })
      data.forEach(movie => {
        movie.genres.forEach(genre => {
          searchedMovies.forEach(movieName => {
          if (!movieName[movie.title].includes(genre)) {
            movieName[movie.title].push(genre)
          }
        })
        })
      })
      console.log("SEARCHED MOVIES: ", searchedMovies)
    }
    )
  .catch(error => setError(error.message))
}

  function filterMoviesByGenre(genre) {
    // console.log("GENRE CALLBACK FUNCTION: ", genre)
    console.log("SEARCHED MOVIES CALLBACK: ", searchedMovies)
    const genreMovies = [];
    // filteredMovies.forEach(movie => {
    //   if (movie.includes(genre)) {
    //     genreMovies.push(movie)
    //   }
    // })
    return genreMovies
  }
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
            <Header movies={filteredMovies} updateMovies={updateMovies} filterMoviesByGenre={filterMoviesByGenre}/>
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

