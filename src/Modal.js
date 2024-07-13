import './Modal.css'
import './App.css'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState, useEffect} from 'react'
import { getMovieTrailer } from './APICalls'
export default function Modal({singleMovieDetails}){
    const [modal, setModal] = useState(false)
    const [trailerURL, setTrailerURL] = useState('')
    useEffect(() => {
        if (modal) {
          ref.current?.showModal();
        } else {
          ref.current?.close();
        }
      }, [modal]);
    useEffect(() => {
        getMovieTrailer(movie_id)
        .then(data => setTrailerURL(`https://www.youtube.com/embed/${data.videos[0].key}`))
    },[])
    const ref = useRef();
    const {movie_id} = useParams()
    if (!singleMovieDetails) {
        return;
    }
    function closeModal() {
        setModal(false)
    }
    function openModal() {
        setModal(true)
    }
    const {title, backdrop_path, release_date, overview ,genres, budget, revenue, runtime, average_rating} = singleMovieDetails
    const shortRevenue = revenue.toString().slice(0,3)
    const shortBudget = budget.toString().slice(0,3)
    const altText = 'Poster of ' + title
    const allGenres = genres.map(genre => {
        let uniqueID = uuidv4();
        return (
            <div key={uniqueID} className='genre'>{genre}</div>
        )
    })
    return (
        <dialog  data-modal className="modal" open>
            <div className='image-button-wrapper'>
                <img src={backdrop_path} alt={altText}/>
                <Link to='/'>
                    <button className='button-close' formMethod='dialog' autoFocus>Return to Main</button>
                </Link>
            </div>
            <div className='title-genre-wrapper'>
                <h2>{title}</h2>
                <div className="genres">
                    {allGenres}
                </div>
            </div>
            <div className='info-container'>
                <div className='movie-cards-wrapper'>
                    <div className="movie-info-wrapper">
                        <div className='movie-card-info' id='movie-trailer'>
                            <button className='trailer-button' onClick={openModal}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/></svg>
                            </button>
                            <dialog ref={ref} onCancel={closeModal} className='trailer-modal'>
                                <button className='trailer-close-btn' onClick={closeModal}>Close</button>
                                <iframe src={trailerURL} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder='0' allowFullScreen title={title}></iframe>
                            </dialog>
                   
                        </div>
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
            </div>
           
        </dialog>
    )
}

Modal.propTypes = {
    singleMovieDetails: PropTypes.shape({
        title: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        budget: PropTypes.number.isRequired,
        revenue: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired,
        average_rating: PropTypes.number.isRequired,
    })
    
}