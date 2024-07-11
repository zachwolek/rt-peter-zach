import Card from './Card'
import './Movies.css'
import PropTypes from 'prop-types'
export default function Movies({movies, toggleOpen, updateSingleMovie}) {
    const allMovies = movies.map(({id, poster_path, release_date,title, average_rating}) => {
    return <Card
    key={id}
    id={id}
    img={poster_path}
    release_date={release_date}
    title={title}
    average_rating={average_rating}
    toggleOpen={toggleOpen}
    updateSingleMovie={updateSingleMovie}
    />
  })
  return (
    <div className='movies-wrapper'>
    {allMovies}
    </div>
  )
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  updateSingleMovie: PropTypes.func.isRequired
}
//const [viewstate, setViewstate] = useState(false)
//When "View Movie Details button is clicked"
  //viewstate === true && id gets passed to 'find' 
//{viewstate && <div>Movie Details</div>}
//Go back button sets viewstate as false 