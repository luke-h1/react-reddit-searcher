import React, { useReducer } from "react";
import RedditContext from "./redditContext";
import RedditReducer from "./RedditReducer";

import { SEARCH_TERM } from "../types";

const RedditState = (props) => {
  const initialState = {
    results: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(RedditReducer, initialState);

  const searchReddit = async (query) => {
    // setLoading()
    const BASE_URL = `https://www.reddit.com/search.json?q=${query}`;
    const res = await fetch(`${BASE_URL}`);
    dispatch({
      type: SEARCH_TERM,
      payload: res.data.data.children,
    });
    console.log(res.data.data.children);
  };

  return (
    <RedditContext.Provider
      value={{
        results: state.results,
        loading: state.loading,
      }}
    >
      {props.children}
    </RedditContext.Provider>
  );
};
export default RedditState;
