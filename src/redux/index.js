import { combineReducers } from "redux"
import movieReducer from "./movieRedux/movieReducers"
import tvReducer from "./tvRedux/tvReducer"
import PeopleReducer from "./peopleRedux/peopleReducers"

const rootReducer = combineReducers({
  movies: movieReducer,
  tvs: tvReducer,
  person: PeopleReducer
})

export default rootReducer
