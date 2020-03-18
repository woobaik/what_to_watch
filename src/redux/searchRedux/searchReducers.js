import {
  LOAD_SUGGESTIONS_BEGIN,
  CLEAR_SUGGESTIONS,
  UPDATE_INPUT_VALUE,
  MAYBE_UPDATE_SUGGESTIONS,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_ERROR
} from "./searchActionTypes"

const initialState = {
  searchResults: [],
  loading: false,
  inputValue: "",
  error: ""
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        value: action.payload
      }

    case CLEAR_SUGGESTIONS: {
      return {
        ...state,
        searchResults: []
      }
    }

    case FETCH_SEARCH_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }

    case FETCH_SEARCH_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case MAYBE_UPDATE_SUGGESTIONS: {
      //   if (action.payload !== state.InputValue)
      //     return {
      //       ...state,
      //       loading: false
      //     }

      return {
        ...state,
        searchResults: action.payload,
        Loading: false
      }
    }

    default:
      return {
        ...state
      }
  }
}

export default SearchReducer
