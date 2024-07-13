function getAllMovies() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
}

function getSingleMovie(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
}

function getMovieDetails(movieIDs) {
    const moviePromises = movieIDs.map(id => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(resp => resp.json())
    .then(data => data.movie)
    })
    return moviePromises
  }
function getMovieTrailer(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(resp => resp.json())
}
export {
    getAllMovies,
    getSingleMovie,
    getMovieDetails,
    getMovieTrailer
}