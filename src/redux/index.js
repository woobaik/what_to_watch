import { combineReducers } from "redux"
import movieReducer from "./movieRedux/movieReducers"
import tvReducer from "./tvRedux/tvReducer"
import PeopleReducer from "./peopleRedux/peopleReducers"
import SearchReducer from "./searchRedux/searchReducers"

const rootReducer = combineReducers({
  movies: movieReducer,
  tvs: tvReducer,
  person: PeopleReducer,
  search: SearchReducer
})

export default rootReducer
