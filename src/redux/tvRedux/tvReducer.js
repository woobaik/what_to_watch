import { FETCH_TV_REQUEST, FETCH_TV_SUCCESS, FETCH_TV_ERROR, FETCH_TV_LIST_SUCCESS } from "./tvActionTypes"

const initialState = {
    tvList: [],
    tv: [],
    loading: false,
    error: null
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
                laoding: false,
                tvList: action.payload
            }

        default: return state

    }
}

export default tvReducer