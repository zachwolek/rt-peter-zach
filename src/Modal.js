import './Modal.css'
import './App.css'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Modal({singleMovieDetails}){
    const {movie_id} = useParams()
    if (!singleMovieDetails) {
        return;
    }

    const {title, backdrop_path, release_date, overview ,genres, budget, revenue, runtime, average_rating} = singleMovieDetails
    const shortRevenue = revenue.toString().slice(0,3)
    const shortBudget = budget.toString().slice(0,3)
    const altText = 'Poster of ' + title
    const allGenres = genres.map(genre => {
        return (
            <div className='genre'>{genre}</div>
        )
    })
    return (
        <dialog key={movie_id} data-modal class="modal" open>
            <div className='image-button-wrapper'>
                <img src={backdrop_path} alt={altText}/>
                <Link to='/'>
                    <button className='button-close' data-close modal formmethod='dialog' autofocus>X</button>
                </Link>
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
}