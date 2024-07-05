import './Card.css'

export default function Card({id, img, release_date, title, average_rating}) {
    return (
        <div className='card' key={id}>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>{release_date}</p>
            <p>`{average_rating.toFixed(1)}/10`</p>
            <button onClick={()=>displayMovieDetails(id)}>See Movie Details</button>
        </div>
    )
}

