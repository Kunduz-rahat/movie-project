import axios from "axios";
import { ACTOR_REQUEST, ACTOR_SUCCESS, ACTOR_FAILED } from "../utils/consts";
export const getInfoActor = (id) => {
  return (dispatch) => {
    dispatch({type: ACTOR_REQUEST})
    axios(`https://api.themoviedb.org/3/person/${id}?&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data}) => {
        dispatch({type: ACTOR_SUCCESS, payload: data})
      }).catch((error) => {
      dispatch({type: ACTOR_FAILED})
    })
  }
}

