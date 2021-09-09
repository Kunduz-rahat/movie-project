import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";




const Rating = () => {
  const params = useParams()
  const [movie, setMovie] = useState({})
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${params.id}?&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data}) => setMovie(data))
  }, [params.id])
  return (
    <div className='rating'>
      <i className={movie.vote_average <= 1 ? 'far fa-star' : 'fas fa-star'}/>
      <i className={movie.vote_average <= 2 ? 'far fa-star' : 'fas fa-star'}/>
      <i className={movie.vote_average <= 3 ? 'far fa-star' : 'fas fa-star'}/>
      <i className={movie.vote_average <= 4 ? 'far fa-star' : 'fas fa-star'}/>
      <i className={movie.vote_average <= 5 ? 'far fa-star' : 'fas fa-star'}/>
      <i className={movie.vote_average <= 6 ? 'far fa-star' : 'fas fa-star'}/>
      <i className={movie.vote_average <= 7 ? 'far fa-star' : 'fas fa-star'}/>
      <i className={movie.vote_average <= 8 ? 'far fa-star' : 'fas fa-star'}/>
      <i className={movie.vote_average <= 9 ? 'far fa-star' : 'fas fa-star'}/>
      <i className={movie.vote_average <= 10 ? 'far fa-star' : 'fas fa-star'}/>
    </div>
  )
}
export default Rating
