import {
  FETCH_TV_VIDEOS_SUCCESS,
  CLEAN_UP_MOVIE,
  FETCH_MOVIE_KEYWORD_SUCCESS,
  FETCH_CAST_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_RECOMMENDATION_SUCCESS,
  FETCH_MOVIE_EXTERNAL_ID_SUCCESS
} from "./movieActionTypes"
import axios from "axios"

const fetchMovieRequest = () => {
  return {
    type: FETCH_MOVIE_REQUEST
  }
}

const fetchMovieListSuccess = movies => {
  return {
    type: FETCH_MOVIE_LIST_SUCCESS,
    payload: movies
  }
}

const fetchMovieSuccess = movie => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movie
  }
}

const fetchMovieKeyword = keywords => {
  return {
    type: FETCH_MOVIE_KEYWORD_SUCCESS,
    payload: keywords
  }
}

const fetchCastSuccess = cast => {
  return {
    type: FETCH_CAST_SUCCESS,
    payload: cast
  }
}

const fetchMovieError = error => {
  return {
    type: FETCH_MOVIE_ERROR,
    payload: error
  }
}

const fetchMovieVideos = videos => {
  return {
    type: FETCH_TV_VIDEOS_SUCCESS,
    payload: videos
  }
}

export const cleanUpMovie = () => {
  return {
    type: CLEAN_UP_MOVIE
  }
}

const fetchMovieRecommationSuccess = recomm => {
  return {
    type: FETCH_MOVIE_RECOMMENDATION_SUCCESS,
    payload: recomm
  }
}

const fetchMovieExternalSuccess = ids => {
  return {
    type: FETCH_MOVIE_EXTERNAL_ID_SUCCESS,
    payload: ids
  }
}
export const fetchMovieList = (query = "popular") => {
  return function(dispatch) {
    dispatch(fetchMovieRequest())

    // now_playing, popular, top_rated, upcoming
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then(response => {
        const movieList = response.data.results
        dispatch(fetchMovieListSuccess(movieList))
      })
      .catch(error => {
        dispatch(fetchMovieError(error))
      })
  }
}

export const fetchMovie = movieId => {
  return dispatch => {
    dispatch(fetchMovieRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(response => {
        dispatch(fetchMovieSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchMovieError(error))
      })
  }
}

export const fetchCast = movieId => {
  return dispatch => {
    dispatch(fetchMovieRequest)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(response => {
        dispatch(fetchCastSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchMovieError(error))
      })
  }
}

export const fetchMovieKeywords = movieId => {
  return dispatch => {
    dispatch(fetchMovieRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(response => {
        dispatch(fetchMovieKeyword(response.data))
      })
      .catch(error => {
        dispatch(fetchMovieError(error))
      })
  }
}

export const fetchMovieVideo = movieId => {
  return dispatch => {
    dispatch(fetchMovieRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(response => {
        dispatch(fetchMovieVideos(response.data))
      })
      .catch(error => {
        dispatch(fetchMovieError(error))
      })
  }
}

export const fetchMovieRecommendation = movieId => {
  return dispatch => {
    dispatch(fetchMovieRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then(response => {
        dispatch(fetchMovieRecommationSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchMovieError(error))
      })
  }
}

export const fetchMovieExternalId = movieId => {
  return dispatch => {
    dispatch(fetchMovieRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/external_ids?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(response => {
        dispatch(fetchMovieExternalSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchMovieError(error))
      })
  }
}
