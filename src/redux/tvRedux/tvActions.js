import { FETCH_TV_REQUEST, FETCH_TV_LIST_SUCCESS, FETCH_TV_SUCCESS, FETCH_TV_ERROR } from './tvActionTypes'
import axios from 'axios'

const fetchTvRequest = () => {
    return {
        type: FETCH_TV_REQUEST
    }
}

const fetchTvListSuccess = (tvList) => {
    return {
        type: FETCH_TV_LIST_SUCCESS,
        payload: tvList
    }
}

const fetchTvSuccess = (tv) => {
    return {
        type: FETCH_TV_SUCCESS,
        payload: tv
    }
}

const fetchTvError = (error) => {
    return {
        type: FETCH_TV_ERROR,
        payload: error
    }
}

export const fetchTvList = () => {
    return (dispatch) => {
        dispatch(fetchTvRequest())
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1
        `)
            .then((response) => {
                console.log('THISIS RESPONSE!!!', response)
                const tv = response.data.results
                dispatch(fetchTvSuccess(tv))
            })
            .catch(error => {
                dispatch(fetchTvError(error))
            })
    }
}

