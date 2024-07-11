import './Header.css'
import PropTypes from 'prop-types';

export default function Header({movies, updateMovies}) {
    function handleFilter(input) {
        const matchingMovies = movies.map(movie => {
           return movie.title.toLowerCase().includes(input) ? {...movie} : {}
        })
    const filteredMovies = matchingMovies.filter(movie => Object.keys(movie).length !== 0)
    updateMovies(filteredMovies)
    }

    return (
        <nav>
            <h1 className='app-title'>Rancid Tomatillos</h1>
            <div className='search-wrapper'>
                <input placeholder='Search By Title'className='search' onChange={(e) => handleFilter(e.target.value)
                }></input>
                <button>Search</button>
            </div>
        </nav>
    )
}

// genreValue on submit ("action")
//filteredByGenre = []
//
// For each movie in movies array
//do a GET request in getSingleMovie(movie.id)
//if singleMovie.genre.includes(genreValue)
//push the movie id into filteredByGenre
//filter movies by array of ids by genre
//setMovies state to array of [ids]

//const allIds = [
//     436270,  724495, 1013860, 505642,
//     934641,  829799,  972313, 882598,
//     830784,  982620,  663712, 985939,
//     551271, 1037858,  979924,  49046,
//     899112,  676701,  829280, 760204,
//     361743,  844396,  897192, 593643,
//     632856,  820067,  916605, 560052,
//     848058,  807356,  635302, 315162,
//     566466,  955644,  900667, 664469,
//    1001835,  924482,  877269, 760104
//  ]
// .map over data to get ids
// for each id, make a network request to get single movie details
// for each single movie details, create array of objects that has title with genres
// [{title: ['action','science fiction']},]
// action




Header.propTypes = {
    updateMovies: PropTypes.func.isRequired,
    movies: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        average_rating: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired
    })
}