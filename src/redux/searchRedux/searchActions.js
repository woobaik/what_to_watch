import {
  MAYBE_UPDATE_SUGGESTIONS,
  LOAD_SUGGESTIONS_BEGIN,
  CLEAR_SUGGESTIONS,
  UPDATE_INPUT_VALUE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_ERROR
} from "./searchActionTypes"

import axios from "axios"

// UPDATE_INPUT_VALUE

// CLEAR_SUGGESTIONS

// LOAD_SUGGESTIONS_BEGIN

//MAYBE_UPDATE_SUGGESTIONS

const fetchSearchRequest = () => {
  return {
    type: FETCH_SEARCH_REQUEST
  }
}

const maybeUpdateSuggestions = suggestions => {
  return {
    type: MAYBE_UPDATE_SUGGESTIONS,
    payload: suggestions
  }
}

const fetchSearchError = error => {
  return {
    type: FETCH_SEARCH_ERROR,
    payload: error
  }
}

export const updateInputValue = value => {
  return {
    type: UPDATE_INPUT_VALUE,
    payload: value
  }
}

export const clearSuggestions = () => {
  return {
    type: CLEAR_SUGGESTIONS
  }
}

export const loadSuggestions = value => {
  return dispatch => {
    dispatch(fetchSearchRequest())
    axios
      .get(
        `
        https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false
        `
      )
      .then(response => {
        console.log("c8 axios", response)
        dispatch(maybeUpdateSuggestions(response.data.results))
      })
      .catch(error => {
        console.log("c8 axios fail", error)
        dispatch(fetchSearchError(error))
      })
  }
}
