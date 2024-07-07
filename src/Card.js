import './Card.css'
import moment from 'moment'
import PropTypes from 'prop-types';

export default function Card({id, img, release_date, title, average_rating, updateSingleMovie}) {
    
    return (
        <div className='card' key={id}>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>Released: {moment(release_date).format('MMM YYYY')}</p>
            <p>Rating: {average_rating.toFixed(1)}/10</p>
            <button onClick={()=> {
                console.log("ID CLICK", id)
                updateSingleMovie(id)
               }}>See Movie Details</button>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    updateSingleMovie: PropTypes.func.isRequired
}