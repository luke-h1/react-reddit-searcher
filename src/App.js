import React from "react";
import "./App.css";
import Form from "./components/Layout/Form";
import Header from './components/Layout/Header'
import Results from './components/Layout/Results'
function App() {
  return (
    <div className="App"> 
    <Header />
    <Form />
    <Results /> 
    </div>
  );
}
export default App;
