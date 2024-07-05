import './Card.css'

export default function Card({key, img, release_date, title, average_rating}) {
    return (
        <div className='card' key={key}>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>{release_date}</p>
            <p>`{average_rating.toFixed(1)}/10`</p>
        </div>
    )
}

