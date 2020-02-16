import { FETCH_MOVIE_REQUEST, FETCH_MOIVE_SUCCESS, FETCH_MOIVE_ERROR } from './movieActionTypes'
import axios from 'axios'

const fetchMovieRequest = () => {
    return {
        type: FETCH_MOVIE_REQUEST,
    }
}

const fetchMovieSuccess = (movie) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: movies
    }
}

const fetchMovieError = (error) => {
    return {
        type: FETCH_MOIVE_ERROR,
        payload: error
    }
}

const fetchMovie = () => {
    return function () {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => console.log(response))
    }
}