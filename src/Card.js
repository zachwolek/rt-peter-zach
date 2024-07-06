import './Card.css'

export default function Card({id, img, release_date, title, average_rating, toggleOpen}) {
    return (
        <div className='card' key={id}>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>Released: {release_date}</p>
            <p>Rating: {average_rating.toFixed(1)}/10</p>
            <button onClick={()=>toggleOpen()}>See Movie Details</button>
        </div>
    )
}