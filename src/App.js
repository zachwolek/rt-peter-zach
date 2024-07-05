import movieData from './movieData'
import Movies from './Movies'
import Header from './Header'
import './App.css'

function App() {
  const movies = movieData.movies
  return (
    <div>
        <Header />
        <Movies movies={movies}/>
    </div>
  )
}

export default App