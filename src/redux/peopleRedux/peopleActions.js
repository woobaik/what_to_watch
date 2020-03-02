import {
  FETCH_PERSON_DETAIL_SUCCESS,
  FETCH_PERSON_ERROR,
  FETCH_PERSON_REQUEST,
  FETCH_PEOPLE_LIST_SUCCESS,
  FETCH_PERSON_CREDITS
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

const fetchPersonCreditsSuccess = credits => {
  return {
    type: FETCH_PERSON_CREDITS,
    payload: credits
  }
}

const fectPeopleListSuccess = list => {
  return {
    type: FETCH_PEOPLE_LIST_SUCCESS,
    payload: list
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
        dispatch(fetchPersonDetailSuccess(response.data))
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchPersonError(error))
      })
  }
}

export const fetchPeopleList = dispatch => {
  return () => {
    dispatch(fetchPersonRequest())
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then(response => {
        dispatch(fectPeopleListSuccess(response.data.results))
      })
      .catch(error => {
        dispatch(fetchPersonError(error))
      })
  }
}

export const fetchPersonCredit = personId => {
  return dispatch => {
    dispatch(fetchPersonRequest())
    axios
      .get(
        `
    https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(response => {
        console.log("CREDITS!!!", response.data)
        dispatch(fetchPersonCreditsSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchPersonError(error))
      })
  }
}
