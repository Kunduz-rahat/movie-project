const initialState = {
  isLoadingFilms: true,
  films:[]
}


export const actorFilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTOR_FILMS_REQUEST":
      return {...state, isLoadingFilms: true}
    case "ACTOR_FILMS_SUCCESS":
      return {...state,  isLoadingFilms: false, films: action.payload.cast}
    case "ACTOR_FILMS_FAILED":
      return {...state, isLoadingFilms: false, error: action.payload}
    default:
      return state
  }
}