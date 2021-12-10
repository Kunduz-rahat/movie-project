import React, {useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../components/Spinner";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {getInfoActor} from "../../redux/actions/actorActions";
import {getActorFilms} from "../../redux/actions/actorFilmsActions";

const AboutPerson = () => {
  const dispatch = useDispatch()
  const {actor, isLoading} = useSelector(s => s.actor)
  const {films, isLoadingFilms} = useSelector(s => s.films)
  const {id} = useParams()

  useEffect(() => dispatch(getInfoActor(id)), [id])
  useEffect(() => dispatch(getActorFilms(id)), [id])

  if (isLoading && isLoadingFilms) {
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