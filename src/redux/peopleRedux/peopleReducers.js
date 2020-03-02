import {
  FETCH_PEOPLE_LIST_SUCCESS,
  FETCH_PERSON_DETAIL_SUCCESS,
  FETCH_PERSON_ERROR,
  FETCH_PERSON_REQUEST,
  FETCH_PERSON_CREDITS
} from "./peopleActionTypes"

const initialState = {
  loading: false,
  person: [],
  personCredit: [],
  error: undefined,
  peopleList: []
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

    case FETCH_PEOPLE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        peopleList: action.payload
      }

    case FETCH_PERSON_CREDITS:
      return {
        ...state,
        loading: false,
        personCredit: action.payload
      }
    default:
      return { ...state }
  }
}

export default PeopleReducer
