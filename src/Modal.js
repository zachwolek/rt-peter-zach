import './Modal.css'
import './App.css'
export default function Modal({singleMovieDetails,setShowModal}){
    console.log("SINGLE MOVIE DETAILS: ",singleMovieDetails)
    const {title, backdrop_path, release_date, overview ,genres, budget, revenue, runtime, average_rating} = singleMovieDetails
    console.log("GENRES DECONSTRUCTED: ", genres)
    console.log("TITLE DECONSTRUCTED: ", title)
    const allGenres = genres.map(genre => {
        return (
            <div className='genre'>{genre}</div>
        )
    })
    return (
        <dialog data-modal class="modal" open>
            <img src={backdrop_path}/>
            <div className='title-genre-wrapper'>
                <h2>{title}</h2>
                <div className="genres">
                    {allGenres}
                </div>
            </div>
            <div className='movie-cards-button-wrapper'>
                <div className="movie-info-wrapper">
                <div className='movie-card-info'>
                        revenue: {revenue}
                    </div>
                    <div className='movie-card-info'>
                        budget: {budget}
                    </div>
                    <div className='movie-card-info'>
                        runtime: {runtime}
                    </div>
                    <div className='movie-card-info'>
                        average rating: {average_rating}/10
                    </div>
                </div>
            <button className='button-close' data-close modal formmethod='dialog' onClick={()=>setShowModal(false)}>Close</button>
            </div>
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