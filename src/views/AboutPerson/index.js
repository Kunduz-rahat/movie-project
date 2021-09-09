import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, Link} from "react-router-dom";
import Spinner from "../../components/Spinner";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const AboutPerson = () => {
  const [actor, setActor] = useState({})
  const [films, setFilms] = useState([])
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isFilmsLoading, setFilmsLoading] = useState(true)

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/person/${params.id}?&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data}) => {
        setActor(data)
        setIsLoading(false)
      })
  }, [params.id])
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/person/${params.id}/movie_credits?&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data}) => {
        setFilms(data.cast)
        setFilmsLoading(false)
      })
  }, [params.id])
  if (isLoading && isFilmsLoading) {
    return <div className='d-flex justify-content-center'>
      <Spinner/>
    </div>
  }

  return (
    <div className='row'>
      <div className='col-md-3'>
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${actor.profile_path}`} alt=""/>
      </div>
      <div className='col-md-9'>
        <h1>{actor.name}</h1>
        <div>{actor.biography ? `Biography: ${actor.biography}` : `We do not have a biography about ${actor.name} :((`}</div>
        <OwlCarousel className='owl-theme' loop margin={10} dots={false} nav>

          {
            films.sort((a, b) => b.vote_count - a.vote_count).slice(0, 10).map(movie =>
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`} alt=""/>
                  <p>{movie.title}</p>
                </Link>
              </div>
            )
          }
        </OwlCarousel>
      </div>

    </div>
  )
}
export default AboutPerson