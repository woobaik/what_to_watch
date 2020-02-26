import { FETCH_TV_REQUEST, FETCH_TV_LIST_SUCCESS, FETCH_TV_SUCCESS, FETCH_TV_ERROR } from './tvActionTypes'
import axios from 'axios'

const fetchTvRequest = () => {
    return {
        type: FETCH_TV_REQUEST,
        loading: true
    }
}

const fetchTvListSuccess = (tvList) => {
    return {
        type: FETCH_TV_LIST_SUCCESS,
        payload: tvList,
        loading: false
    }
}

const fetchTvSuccess = (tv) => {
    return {
        type: FETCH_TV_SUCCESS,
        payload: tv,
        loading: false

    }
}

const fetchTvError = (error) => {
    return {
        type: FETCH_TV_ERROR,
        payload: error,
        loading: false
    }
}

export const fetchTvList = (query = 'popular') => {
    console.log('START FETCHING')

    return (dispatch) => {
        dispatch(fetchTvRequest())
        axios.get(`https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1
        `)
            .then((response) => {
                console.log('FETCHING SUCCESS')
                console.log('reponsr', response)
                const tv = response.data.results
                dispatch(fetchTvListSuccess(tv))
            })
            .catch(error => {
                console.log('FETCHING FAIL')
                console.log(error)
                dispatch(fetchTvError(error))
            })
    }
}

