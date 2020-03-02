import {
  FETCH_TV_CREDIT,
  FETCH_TV_KEYWORDS,
  FETCH_TV_REQUEST,
  FETCH_TV_LIST_SUCCESS,
  FETCH_TV_SUCCESS,
  FETCH_TV_ERROR
} from "./tvActionTypes"
import axios from "axios"

const fetchTvRequest = () => {
  return {
    type: FETCH_TV_REQUEST
  }
}

const fetchTvListSuccess = tvList => {
  return {
    type: FETCH_TV_LIST_SUCCESS,
    payload: tvList
  }
}

const fetchTvSuccess = tv => {
  return {
    type: FETCH_TV_SUCCESS,
    payload: tv
  }
}

const fetchTvError = error => {
  return {
    type: FETCH_TV_ERROR,
    payload: error
  }
}

const fetchTvKeywords = tv => {
  return {
    type: FETCH_TV_KEYWORDS,
    payload: tv
  }
}

const fetchTvCreditSuccess = credits => {
  return {
    type: FETCH_TV_CREDIT,
    payload: credits
  }
}

export const fetchTvList = (query = "popular") => {
  return dispatch => {
    dispatch(fetchTvRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1
        `
      )
      .then(response => {
        const tvList = response.data.results
        dispatch(fetchTvListSuccess(tvList))
      })
      .catch(error => {
        dispatch(fetchTvError(error))
      })
  }
}

export const fetchTvData = query => {
  return dispatch => {
    dispatch(fetchTvRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(response => {
        const tv = response.data
        dispatch(fetchTvSuccess(tv))
      })
      .catch(error => {
        dispatch(fetchTvError(error))
      })
  }
}

export const fechTvKeyWords = tvId => {
  return dispatch => {
    dispatch(fetchTvRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${tvId}/keywords?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(response => {
        dispatch(fetchTvKeywords(response.data))
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchTvError(error))
      })
  }
}

export const fetchTVcredit = tvId => {
  return dispatch => {
    dispatch(fetchTvRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(response => {
        dispatch(fetchTvCreditSuccess(response.data.cast))
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchTvError("FETCHTVCREDIT ERROR", error))
      })
  }
}
