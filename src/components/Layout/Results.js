import React, { Fragment, useState, useContext } from "react";
import RedditContext from '../reddit/redditContext'; 




const Results = () => {
  const redditContext = useContext(RedditContext)

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value); 








  return (
    <Fragment>
      <div className="container">
        <div className="grid-container">
          <div className="card">
            <img src="/test.jpeg" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Results;
