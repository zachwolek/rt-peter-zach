import './Header.css'
import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';
export default function Header({movies, updateMovies, filterMoviesByGenre, allGenres}) {
    const [searchValue, setSearchValue] = useState('');
    const [selectionValue, setSelectionValue] = useState('');
    useEffect(() => {
        handleFilter()
    },[searchValue])
    useEffect(() => {
        handleFilter()
    },[selectionValue])
    const selectionGenres = allGenres.map((genre,index) => {
        return (
            <option key={index}value={genre}>{genre}</option>
        )
    })
    function handleFilter() {
        if (!selectionValue) {
            const matchingMovies = movies.map(movie => {
                return movie.title.toLowerCase().includes(searchValue) ? {...movie} : {}
             })
            const filteredMovies = matchingMovies.filter(movie => Object.keys(movie).length !== 0)
            updateMovies(filteredMovies)
            return;
        }
        const genreMovies = [];
        const matchingGenreMovieTitles = filterMoviesByGenre(selectionValue)
        matchingGenreMovieTitles.forEach(movieTitle => {
            movies.forEach(movie => {
                if (movie.title === movieTitle) {
                    genreMovies.push(movie)
                }
            })
        })
        const matchingMovies = genreMovies.map(movie => {
            return movie.title.toLowerCase().includes(searchValue) ? {...movie} : {}
         })
         const filteredMovies = matchingMovies.filter(movie => Object.keys(movie).length !== 0)
         updateMovies(filteredMovies)
    }
    return (
        <>
        <nav>
            <h1 className='app-title'>Rancid Tomatillos</h1>
            <div className='search-wrapper'>Search By Title: 
                <input placeholder='Search'className='search' value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}></input>
            </div>
            <div className='genre-wrapper'>
                <label for="genres">Search By Genre:</label>
                <select id="genres" name="genres"  value={selectionValue} 
                onChange={(e) => setSelectionValue(e.target.value)}>
                    <option value=''>View All</option>
                    {selectionGenres}
                </select>
            </div>
        </nav>
        {(searchValue && selectionValue) && <p>Filtered by:&nbsp;&nbsp;[Genre: <strong>{selectionValue}</strong> &nbsp; Title: <strong>{searchValue}</strong>]</p>}
        {(searchValue && !selectionValue) && <p>Filtered by:&nbsp;&nbsp;[Title: <strong>{searchValue}</strong>]</p>}
        {(!searchValue && selectionValue) && <p>Filtered by:&nbsp;&nbsp;[Genre: <strong>{selectionValue}</strong>]</p>}
        </>
    )
}

Header.propTypes = {
    updateMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    filterMoviesByGenre: PropTypes.func.isRequired,
    allGenres: PropTypes.array.isRequired
}