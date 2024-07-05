import movieData from './movieData'
import Movies from './Movies'
import Header from './Header'
import { useState } from 'react'
import './App.css'

function App() {
  const mockMovies = movieData.movies
  const [movies, setMovies] = useState(mockMovies)

  function displayMovieDetails(){
    
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