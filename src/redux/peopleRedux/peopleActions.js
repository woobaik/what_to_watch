import {
  FETCH_PERSON_DETAIL_SUCCESS,
  FETCH_PERSON_ERROR,
  FETCH_PERSON_REQUEST,
  FETCH_PEOPLE_LIST_SUCCESS
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

const fectPeopleListSuccess = list => {
  console.log("c8 nom", list)
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
        console.log(response)
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
        console.log("FETCH PEOPLE LIST AT ACTIONS AT RESPONSE", response)
        dispatch(fectPeopleListSuccess(response.data.results))
      })
      .catch(error => {
        console.log("FETCH PEOPLE LIST AT ACTIONS ERROR".error)
        dispatch(fetchPersonError(error))
      })
  }
}
