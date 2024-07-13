import './Header.css'
import PropTypes from 'prop-types';
export default function Header({movies, updateMovies, filterMoviesByGenre, allGenres}) {
    const selectionGenres = allGenres.map(genre => {
        return (
            <option value={genre}>{genre}</option>
        )
    })
    function handleFilter(input) {
        const matchingMovies = movies.map(movie => {
           return movie.title.toLowerCase().includes(input) ? {...movie} : {}
        })
        const filteredMovies = matchingMovies.filter(movie => Object.keys(movie).length !== 0)
        updateMovies(filteredMovies)
    }
   
    function handleGenreFilter(selection) {
        const filteredMovies = [];
        const matchingGenreMovieTitles = filterMoviesByGenre(selection)
        matchingGenreMovieTitles.forEach(movieTitle => {
            movies.forEach(movie => {
                if (movie.title === movieTitle) {
                    filteredMovies.push(movie)
                }
            })
        })
        updateMovies(filteredMovies)
    }
    return (
        <nav>
            <h1 className='app-title'>Rancid Tomatillos</h1>
            <div className='search-wrapper'>Search By Title: 
                <input placeholder='Search'className='search' onChange={(e) => handleFilter(e.target.value)
                }></input>
            </div>
            <div className='genre-wrapper'>
                <label for="genres">Search By Genre:</label>
                <select id="genres" name="genres" onChange={(e) => handleGenreFilter(e.target.value)}>
                    {selectionGenres}
                </select>
            </div>
     </nav>
    )
}

Header.propTypes = {
    updateMovies: PropTypes.func.isRequired,
    movies: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        average_rating: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired
    }),
}