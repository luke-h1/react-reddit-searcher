import React, { Fragment, useState, useContext } from "react";
import RedditContext from "../reddit/redditContext";

const Form = () => {
  const redditContext = useContext(RedditContext);

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      // TODO: put alert context here
    } else {
      RedditContext.searchReddit(text);
      setText("");
    }
  };

  return (
    <Fragment>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Search Reddit!"
          value={text}
          onChange={onChange}
        />
        <input type="submit" className="input-submit" />
      </form>
    </Fragment>
  );
};

export default Form;
