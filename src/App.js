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
  const [moviesWithGenres, setMoviesWithGenres] = useState([])
  const [allGenres, setAllGenres] = useState([])
  const [error, setError] = useState('')
  const movieIDs = [];
 
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
    const allTitlesGenres = {};
    const genres = [];
    const moviePromises = getMovieDetails(movieIDs)
    Promise.all(moviePromises)
    .then(data => {
      data.forEach(movie => { 
        if (!allTitlesGenres[movie.title]) {
          allTitlesGenres[movie.title] = [];
        }
        movie.genres.forEach(genre => {
        if (!genres.includes(genre)) {
            genres.push(genre)
        }
        if (!allTitlesGenres[movie.title].includes(genre)) {
          allTitlesGenres[movie.title].push(genre)
        }
       })
      })
      setMoviesWithGenres(allTitlesGenres)
      setAllGenres(genres)
    }
  )
  .catch(error => setError(error.message))
}


  function filterMoviesByGenre(input) {
    const genreMovies = [];
    Object.keys(moviesWithGenres).forEach(movie => {
      if (moviesWithGenres[movie].includes(input)) {
        genreMovies.push(movie)
      }
    })
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
            <Header movies={filteredMovies} updateMovies={updateMovies} filterMoviesByGenre={filterMoviesByGenre} allGenres={allGenres}/>
            {error && <h2>{error}</h2>}
            <Movies movies={movies} updateSingleMovie={updateSingleMovie}/>
            {movies.length === 0 && <h2 className='no-movies'>No movies matched your selected title or genre..</h2>}
          </>}>
        </Route>
        <Route path='/:movie_id' element={<Modal singleMovieDetails={singleMovieDetails}/>}></Route>
      </Routes>
    </>
  )
}

export default App

