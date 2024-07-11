import './Header.css'
import  PropTypes from 'prop-types';

export default function Header({filteredMovies, updateFilteredMovies}) {
    function handleFilter(input) {
        const matchingMovies = filteredMovies.map(movie => {
           return movie.title.toLowerCase().includes(input) ? {...movie} : {}
    })
    const allFilteredMovies = matchingMovies.filter(movie => Object.keys(movie).length !== 0)
    updateFilteredMovies(allFilteredMovies)
    }

    return (
        <nav>
            <h1 className='app-title'>Rancid Tomatillos</h1>
            <div className='forms'>
                <input placeholder='Search By Title'className='search' onChange={(e) => handleFilter(e.target.value)
                }></input>
                <button>Search</button>
            </div>
        </nav>
    )
}

Header.propTypes = {
    updateFilteredMovies: PropTypes.func.isRequired,
    filteredMovies: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        average_rating: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired
    })
}