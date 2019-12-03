import {
  SEARCH_NOBEL,
  GET_NOBEL,
  NOBEL_ERROR,
  GET_NOBEL_LAUREATES
} from "./types";
//get nobel
export const getNobel = () => {
  return async dispatch => {
    //const id = uuid.v4();
    try {
      const res = await fetch("/prizes");
      const data = await res.json();

      dispatch({
        type: GET_NOBEL,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: NOBEL_ERROR
      });
    }
  };
};

//search nobel
export const searchNobel = text => {
  return async dispatch => {
    try {
      const res = await fetch("/prizes?q=" + text);
      const data = await res.json();

      dispatch({
        type: SEARCH_NOBEL,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: NOBEL_ERROR
      });
    }
  };
};
