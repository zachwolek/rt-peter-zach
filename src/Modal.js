import './Modal.css'
import './App.css'

export default function Modal({singleMovieDetails,setShowModal}){
    console.log("SINGLE MOVIE DETAILS: ",singleMovieDetails)
    const {title, backdrop_path, release_date, overview ,genres, budget, revenue, runtime, average_rating} = singleMovieDetails
    console.log("GENRES DECONSTRUCTED: ", genres)
    console.log("TITLE DECONSTRUCTED: ", title)
    const shortRevenue = revenue.toString().slice(0,3)
    const shortBudget = budget.toString().slice(0,3)
    const altText = 'Poster of ' + title
    const allGenres = genres.map(genre => {
        return (
            <div className='genre'>{genre}</div>
        )
    })
    return (
        <dialog data-modal class="modal" open>
            <div className='image-button-wrapper'>
                <img src={backdrop_path} alt={altText}/>
                <button className='button-close' data-close modal formmethod='dialog' onClick={()=>setShowModal(false)} autofocus>X</button>
            </div>
            <div className='title-genre-wrapper'>
                <h2>{title}</h2>
                <div className="genres">
                    {allGenres}
                </div>
            </div>
            <div className='movie-cards-wrapper'>
                <div className="movie-info-wrapper">
                    <div className='movie-card-info'>
                        <h3>Revenue</h3>
                        <p className='movie-card-text'>${shortRevenue}M</p>
                    </div>
                    <div className='movie-card-info'>
                    <h3>Budget</h3>
                    <p className='movie-card-text'>${shortBudget}M</p>
                    </div>
                    <div className='movie-card-info'>
                        <h3>Runtime</h3>
                        <p className='movie-card-text'>{runtime} min</p>
                    </div>
                    <div className='movie-card-info'>
                        <h3> Rating</h3>
                        <p className='movie-card-text'>{average_rating}/10</p>
                    </div>
                </div>
                <p className='overview'>
                   Description: {overview}
                </p>
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