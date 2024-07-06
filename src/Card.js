import './Card.css'

export default function Card({id, img, release_date, title, average_rating, toggleOpen, getSingleMovie}) {
    return (
        <div className='card' key={id}>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>Released: {release_date}</p>
            <p>Rating: {average_rating.toFixed(1)}/10</p>
            <button onClick={()=> {
                console.log("ID CLICK", id)
                getSingleMovie(id).then(response => {
                    console.log(response)
                    return response.json()
                })
                .then(data => console.log(data))
                toggleOpen()}}>See Movie Details</button>
        </div>
    )
}