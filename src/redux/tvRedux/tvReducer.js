import {
  FETCH_TV_CREDIT,
  FETCH_TV_KEYWORDS,
  FETCH_TV_REQUEST,
  FETCH_TV_SUCCESS,
  FETCH_TV_ERROR,
  FETCH_TV_LIST_SUCCESS,
  FETCH_TV_VIDEOS_SUCCESS,
  FETCH_TV_RECOMMENDATIONS_SUCCESS
} from "./tvActionTypes"

const initialState = {
  tvList: [],
  tv: [],
  loading: false,
  error: null,
  tvKeywords: [],
  cast: [],
  media: [],
  recomm: []
}

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TV_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_TV_SUCCESS:
      return {
        ...state,
        loading: false,
        tv: action.payload
      }

    case FETCH_TV_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case FETCH_TV_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        tvList: action.payload
      }

    case FETCH_TV_KEYWORDS: {
      return {
        ...state,
        loading: false,
        tvKeywords: action.payload
      }
    }

    case FETCH_TV_CREDIT: {
      return {
        ...state,
        cast: action.payload,
        loading: false
      }
    }

    case FETCH_TV_VIDEOS_SUCCESS: {
      return {
        ...state,
        media: action.payload,
        loading: false
      }
    }

    case FETCH_TV_RECOMMENDATIONS_SUCCESS: {
      return {
        ...state,
        recomm: action.payload,
        loading: false
      }
    }
    default:
      return state
  }
}

export default tvReducer
