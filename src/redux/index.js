import { combineReducers } from 'redux'
import movieReducer from './movieRedux/movieReducers'

const rootReducer = combineReducers({
    movies: movieReducer
})

export default rootReducer