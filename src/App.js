import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Reddit Nature Search</h1>
      </header>
      <form class="form">
        <input type="text" class="input-text" />
        <input type="submit" class="input-submit" />
      </form>
      <div className="container">
        <div className="grid-container">
          <div className="card">
            <img src="/test.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
