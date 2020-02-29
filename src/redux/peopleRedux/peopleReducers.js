import {
  FETCH_PERSON_DETAIL_SUCCESS,
  FETCH_PERSON_ERROR,
  FETCH_PERSON_REQUEST
} from "./peopleActionTypes"

const initialState = {
  loading: false,
  person: [],
  personCredit: [],
  error: undefined
}

const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSON_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_PERSON_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        person: action.payload
      }

    case FETCH_PERSON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return { ...state }
  }
}

export default PeopleReducer
