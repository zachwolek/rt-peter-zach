import Card from './Card'

export default function Movies({movies}) {
    const allMovies = movieData.movies.map(({id, poster_path, release_date,title, average_rating}) => {
    return <Card
    key={id}
    img={poster_path}
    release_date={release_date}
    title={title}
    average_rating={average_rating}
    />
  })
  return (
    <div className='movies-wrapper'>
    {allMovies}
    </div>
  )
}

