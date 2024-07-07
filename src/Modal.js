import './Modal.css'
import './App.css'
import PropTypes from 'prop-types'
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

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    average_rating: PropTypes.number.isRequired,
    setShowModal: PropTypes.func.isRequired
}