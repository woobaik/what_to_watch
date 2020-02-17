import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from './movieActionTypes'

const initialState = {
    movies: [],
    movie: [],
    loading: false,
    error: null
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                movie: action.payload,
                loading: false
            }

        case FETCH_MOVIE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state
    }

}

export default movieReducer