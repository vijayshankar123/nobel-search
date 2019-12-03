import {
  SEARCH_NOBEL,
  GET_NOBEL,
  NOBEL_ERROR,
  GET_NOBEL_LAUREATES
} from "../actions/types";

const initialState = {
  nobels: null,

  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOBEL:
      return {
        ...state,
        nobels: action.payload,
        loading: false
      };

    case SEARCH_NOBEL:
      return {
        ...state,
        nobels: action.payload
      };
    case NOBEL_ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
};
