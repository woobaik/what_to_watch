import { FETCH_TV_KEYWORDS, FETCH_TV_REQUEST, FETCH_TV_LIST_SUCCESS, FETCH_TV_SUCCESS, FETCH_TV_ERROR } from './tvActionTypes'
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

const fetchTvKeywords = (tv) => {
    return {
        type: FETCH_TV_KEYWORDS,
        payload: tv,
        loading: false
    }
}

export const fetchTvList = (query = 'popular') => {
    return (dispatch) => {
        dispatch(fetchTvRequest())
        axios.get(`https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1
        `)
            .then((response) => {
                const tvList = response.data.results
                dispatch(fetchTvListSuccess(tvList))
            })
            .catch(error => {

                console.log(error)
                dispatch(fetchTvError(error))
            })
    }
}


export const fetchTvData = (query) => {
    return (dispatch) => {
        dispatch(fetchTvRequest())
        axios.get(`https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then(response => {
                console.log('RESPONSE TVDATE', response)
                const tv = response.data
                console.log('ilbe', tv)
                dispatch(fetchTvSuccess(tv))
            })
            .catch(error => {
                console.log(error)
                dispatch(fetchTvError(error))
            })
    }
}

export const fechTvKeyWords = (tvId) => {
    return (dispatch) => {
        dispatch(fetchTvRequest())
        axios.get(`https://api.themoviedb.org/3/tv/${tvId}/keywords?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                console.log('FETCH TV KEYWORDS', response)
                dispatch(fetchTvKeywords(response.data))
            })
            .catch((error) => {
                console.log(error)
                dispatch(fetchTvError(error))
            })

    }
}