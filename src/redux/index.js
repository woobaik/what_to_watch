import { combineReducers } from 'redux'
import movieReducer from './movieRedux/movieReducers'
import tvReducer from './tvRedux/tvReducer'

const rootReducer = combineReducers({
    movies: movieReducer,
    tvs: tvReducer,
})

export default rootReducer