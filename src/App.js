import React, { useState, useCallback, Fragment } from "react";
import "./App.css";
import getImages from "./components/api";
function App() {
  const [title] = useState("Reddit Nature Search");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const formSubbmited = useCallback(
    async (e) => {
      e.preventDefault();
      setImages([]);
      setLoading(true);
      const images = await getImages(searchTerm);
      setImages(images);
      setLoading(false);
    },
    [searchTerm]
  );

  const onSearchTermChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <Fragment>
      <header className="header">
        <h1>{title}</h1>
      </header>
      <form className="form" onSubmit={formSubbmited}>
        <input
          type="text"
          className="input-text"
          placeholder="Search Reddit!"
          value={searchTerm}
          onChange={onSearchTermChange}
        />
        <input type="submit" className="input-submit" />
      </form>
      {loading && (
        <img
          alt="loading"
          className="loading"
          src="https://media.giphy.com/media/17mNCcKU1mJlrbXodo/giphy.gif"
        />
      )}
      <div className="container">
        <div class="grid-container">
          <div className="card"> 
          {images.map((thumbnail) => (
              <img
                key={Math.floor(Math.random(100) * 12321321)}
                src={thumbnail}
                alt=""
              />
            ))}
        </div>
        </div> 
      </div>
    </Fragment>
  );
}

export default App;
