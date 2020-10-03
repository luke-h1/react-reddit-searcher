import { SEARCH_TERM, SET_ALERT, REMOVE_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    default:
      return state;

    case SEARCH_TERM:
      return { ...state, results: action.payload, loading: false };
  }
};
