import { FETCH_MOVIE_KEYWORD_SUCCESS, FETCH_CAST_SUCCESS, FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR, FETCH_MOVIE_LIST_SUCCESS } from './movieActionTypes'
import axios from 'axios'

const fetchMovieRequest = () => {
    return {
        type: FETCH_MOVIE_REQUEST,
    }
}

const fetchMovieListSuccess = (movies) => {
    return {
        type: FETCH_MOVIE_LIST_SUCCESS,
        payload: movies
    }
}

const fetchMovieSuccess = (movie) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: movie
    }
}

const fetchMovieKeyword = (keywords) => {
    return {
        type: FETCH_MOVIE_KEYWORD_SUCCESS,
        payload: keywords
    }
}

const fetchCastSuccess = (cast) => {
    return {
        type: FETCH_CAST_SUCCESS,
        payload: cast
    }
}

const fetchMovieError = (error) => {
    return {
        type: FETCH_MOVIE_ERROR,
        payload: error
    }
}



export const fetchMovieList = (query = 'popular') => {
    console.log('fetchMOVIELIST', query)
    return function (dispatch) {
        dispatch(fetchMovieRequest())

        // now_playing, popular, top_rated, upcoming
        axios.get(`https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then(response => {
                const movieList = response.data.results

                dispatch(fetchMovieListSuccess(movieList))

            })
            .catch(error => {
                dispatch(fetchMovieError(error))
                console.log('axios fail', error)
            })
    }
}



export const fetchMovie = (movieId) => {
    return (dispatch) => {
        dispatch(fetchMovieRequest)

        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then(response => {
                dispatch(fetchMovieSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchMovieError(error))
                console.log('axios fail', error)
            })
    }
}

export const fetchCast = (movieId) => {
    return (dispatch) => {
        dispatch(fetchMovieRequest)
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {

                dispatch(fetchCastSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchMovieError(error))
            })
    }

}

export const fetchMovieKeywords = (movieId) => {
    return (dispatch) => {
        dispatch(fetchMovieRequest)
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                console.log('AXIOS FETCH', response)
                dispatch(fetchMovieKeyword(response.data))
            }).catch(error => {
                dispatch(fetchMovieError(error))
            })
    }

}