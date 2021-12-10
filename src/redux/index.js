import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {actorReducer} from "./reducers/actorReducer";
import {actorFilmsReducer} from "./reducers/actorFilmsReducer";


const rootReducer = combineReducers({
  actor: actorReducer,
  films: actorFilmsReducer

})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )