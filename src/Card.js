import './Card.css'
import moment from 'moment'
export default function Card({id, img, release_date, title, average_rating, toggleOpen, updateSingleMovie}) {
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