import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import Rating from "../../components/Rating";
import Spinner from "../../components/Spinner";
import ActorsList from "../../components/Actors";


const MovieDetails = () => {
  const params = useParams()
  const [movie, setMovie] = useState({})
  const [actors, setActors] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${params.id}?&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data}) => {
        setMovie(data)
        setIsLoading(false)
      })
  }, [params.id])
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${params.id}/credits?&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data}) => setActors(data.cast))

  }, [params.id])

  if (isLoading) {
    return <div className='d-flex justify-content-center'>
      <Spinner/>
    </div>


  }
  return (
    <div>
      <div className='row'>
        <div className='col-md-4'>
          <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`} alt=""/>
        </div>
        <div className='col-md-8'>
          <h1> {movie.original_title}</h1>
          <div> {movie.overview}</div>
          <div className='rating_info'>{movie.vote_average} <Rating/></div>
          <div>{movie.budget ? `Budget: ${movie.budget.toLocaleString()}$` : ''}</div>
          <h4>Country:</h4>
          <div>{
            movie.production_countries.map(item =>
              <div>
                <div key={item.id}>{item.name}</div>

              </div>)
          }</div>
          <h4>Production companies:</h4>
          <div>{
            movie.production_companies.map(item =>
              <div>
                <div key={item.id}>{item.name}</div>

              </div>)
          }</div>
          <div>{movie.runtime}</div>
        </div>
      </div>


     <ActorsList actors = {actors}/>
    </div>
  )
}
export default MovieDetails