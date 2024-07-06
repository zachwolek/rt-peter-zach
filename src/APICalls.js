function getAllMovies() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)

    //if response.ok then 
        //return data => data
    //else 
        //return .catch
}
function getSingleMovie(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
}
//   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

export {
    getAllMovies,
    getSingleMovie
}