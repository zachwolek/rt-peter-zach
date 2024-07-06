function getAllMovies() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
}

function getSingleMovie(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
}

export {
    getAllMovies,
    getSingleMovie
}