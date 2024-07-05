import './Modal.css'
export default function Modal({backdrop_path, release_date, overview ,genres, budget, revenue, runtime}) {
    const allGenres = genres.map(genre => {
        return (
            <p>{genre}</p>
        )
    })
    return (
        <dialog data-modal class="modal">
            <img src={backdrop_path}/>
            <div className="genres">
                {allGenres}
            </div>
            <div className="movie-info-wrapper">
                <div className='movie-card-info'>
                    {budget}
                </div>
                <div className='movie-card-info'>
                    {revenue}
                </div>
                <div className='movie-card-info'>
                    {runtime}
                </div>
            </div>
            <button data-close modal formmethod='dialog'>Close</button>
        </dialog>
    )
}

// const singleMovieData = {
//   "movie": {id: 1, title: "Fake Movie Title", 
//     poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
//     backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
//     release_date: "2019-12-04", 
//     overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
//     average_rating: 6, 
//     genres: ["Drama"], 
//     budget:63000000, 
//     revenue:100853753, 
//     runtime:139, 
//     tagline: "It's a movie!" }
// }