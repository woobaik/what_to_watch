import {
  CLEAN_UP_MOVIE,
  FETCH_MOVIE_KEYWORD_SUCCESS,
  FETCH_CAST_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_TV_VIDEOS_SUCCESS
} from "./movieActionTypes"

const initialState = {
  movies: [],
  movie: [],
  loading: true,
  error: null,
  cast: {},
  keywords: [],
  media: []
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        loading: false
      }

    case FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false
      }
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case FETCH_CAST_SUCCESS:
      return {
        ...state,
        loading: false,
        cast: action.payload
      }

    case FETCH_MOVIE_KEYWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        keywords: action.payload
      }

    case CLEAN_UP_MOVIE:
      return {
        ...state,
        movie: []
      }

    case FETCH_TV_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        meida: action.payload
      }

    default:
      return state
  }
}

export default movieReducer
