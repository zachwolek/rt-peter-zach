import './Header.css'
import PropTypes from 'prop-types';
export default function Header({movies, updateMovies, filterMoviesByGenre}) {
    function handleFilter(input) {
        const matchingMovies = movies.map(movie => {
           return movie.title.toLowerCase().includes(input) ? {...movie} : {}
        })

    const filteredMovies = matchingMovies.filter(movie => Object.keys(movie).length !== 0)
    updateMovies(filteredMovies)
    }
    function handleGenreFilter(selection) {
        console.log("SELECTION: ", selection)
        //Currently showing up and working ^^
        const genreMovies = filterMoviesByGenre(selection)
        console.log(genreMovies, 'line14')
        //Currently not showing up
    }
    return (
        <nav>
            <h1 className='app-title'>Rancid Tomatillos</h1>
            <div className='search-wrapper'>
                <input placeholder='Search By Title'className='search' onChange={(e) => handleFilter(e.target.value)
                }></input>
            </div>
            <div className='genre-wrapper'>
                <label for="genres">Choose a genre:</label>
                <select id="genres" name="genres" onChange={(e) => handleGenreFilter(e.target.value)}>
                    {/* {allGenres} */}
                    
                    <option value="Action">Action</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Drama">Drama</option>
                    <option value="History">History</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Crime">Crime</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Horror">Horror</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Family">Family</option>
                    <option value="Music">Music</option>
                    <option value="Animation">Animation</option>
                    <option value="War">War</option>
                    <option value="Romance">Romance</option>
                </select>
            </div>
     </nav>
    )
}

// const allGenres = genres.map(genre => {
//     return (
//         <option value={genre}>{genre}</option>
//     )
// })
// console.log(genres)


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