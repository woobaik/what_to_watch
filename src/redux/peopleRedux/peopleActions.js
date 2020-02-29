import {
  FETCH_PERSON_DETAIL_SUCCESS,
  FETCH_PERSON_ERROR,
  FETCH_PERSON_REQUEST
} from "./peopleActionTypes"
import axios from "axios"

const fetchPersonRequest = () => {
  return {
    type: FETCH_PERSON_REQUEST
  }
}

const fetchPersonDetailSuccess = person => {
  return {
    type: FETCH_PERSON_DETAIL_SUCCESS,
    payload: person
  }
}

const fetchPersonError = error => {
  return {
    type: FETCH_PERSON_ERROR,
    payload: error
  }
}

export const fetchPersonDetail = personId => {
  return dispatch => {
    dispatch(fetchPersonRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(response => {
        console.log(response)
        dispatch(fetchPersonDetailSuccess(response.data))
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchPersonError(error))
      })
  }
}
