import axios from "axios";
import { ACTOR_FILMS_FAILED,ACTOR_FILMS_REQUEST,  ACTOR_FILMS_SUCCESS } from "../utils/consts";
export const getActorFilms = (id) => {
  return (dispatch) => {
    dispatch({type: ACTOR_FILMS_REQUEST})
    axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data}) => {
        dispatch({type: ACTOR_FILMS_SUCCESS, payload: data})
      }).catch((error) => {
      dispatch({type: ACTOR_FILMS_FAILED})
    })
  }
}