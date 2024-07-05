import movieData from './movieData'
import Movies from './Movies'
import './App.css'

function App() {
  const movies = movieData.movies
  return (
    <div>
        <Movies movies={movies}/>
    </div>
  )
}

export default App