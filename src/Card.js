import './Card.css'

export default function Card({id, img, release_date, title, average_rating, toggleOpen, updateSingleMovie}) {
    return (
        <div className='card' key={id}>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>Released: {release_date}</p>
            <p>Rating: {average_rating.toFixed(1)}/10</p>
            <button onClick={()=> {
                console.log("ID CLICK", id)
                updateSingleMovie(id)
                setTimeout(() => {
                    toggleOpen()
                },2000)
               }}>See Movie Details</button>
        </div>
    )
}