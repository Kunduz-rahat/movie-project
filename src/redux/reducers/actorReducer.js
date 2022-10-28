import { ACTOR_FAILED, ACTOR_REQUEST, ACTOR_SUCCESS } from "../utils/consts"

const initialState = {
  actor:{},
  isLoading: true,
  new: false
}


export const actorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTOR_REQUEST:
      return {...state, isLoading: true}
    case ACTOR_SUCCESS:
      return {...state, actor: action.payload, isLoading: false, new: true}
    case ACTOR_FAILED:
      return {...state, isLoading: false, error: action.payload}
    default:
      return state
  }
}