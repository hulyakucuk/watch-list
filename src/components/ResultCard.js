import React from 'react'

const ResultCard = ({movie}) => {
console.log(movie);

  return (
   
     <div className='result-card'>
        <div className='poster-wrapper'>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.poster_path}`}></img>
        </div>
     </div>

  )
}

export default ResultCard
