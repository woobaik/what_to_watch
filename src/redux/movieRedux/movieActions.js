import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR, FETCH_MOVIE_LIST_SUCCESS } from './movieActionTypes'
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

const fetchMovieError = (error) => {
    return {
        type: FETCH_MOVIE_ERROR,
        payload: error
    }
}



export const fetchMovieList = (query = 'popular') => {
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



// export const fetchMovie = () => {
//     return (dispatch) => {
//         dispatch(fetchMovieRequest)
//         axios.get(`${MOVIE_ADDRESS}`)
//             .then(response => {
//                 dispatch(fetchMovieListSuccess(response))
//                 console.log('axios success', response)
//             })
//             .then(error => {
//                 dispatch(fetchMovieError(error))
//                 console.log('axios fail', error)
//             })
//     }
// }