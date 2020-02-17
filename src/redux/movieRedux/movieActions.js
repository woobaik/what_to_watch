import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOIVE_ERROR, FETCH_MOVIE_LIST_SUCCESS } from './movieActionTypes'
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

const fetchMovieError = (error) => {
    return {
        type: FETCH_MOIVE_ERROR,
        payload: error
    }
}



const fetchMovieList = () => {
    return function (dispatch) {

        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
}