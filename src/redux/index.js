import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {actorReducer} from "./reducers/actorReducer";


const rootReducer = combineReducers({
  actor: actorReducer,

})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )