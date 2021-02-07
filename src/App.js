import React, { useState } from 'react'
import './App.css';
import Quote from './Components/Quote.js'
import QuoteFive from './Components/QuoteFive.js'
import House from './Components/House.js';

function App() {

  const [check, setCheck] = useState("");
  function show(e) {
    e.preventDefault();

    if (e.target.value === "random") {
      setCheck("random")

    } else if (e.target.value === "randomx5") {
      setCheck("randomx5")
    } else if (e.target.value === "house") {
      setCheck("house")
    }
    else {
      setCheck("")
    }

  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Thrones Quotes</h1>
      </header>
      <div className="btn-group" role="group" >
        {check === "random" ? null : <button style={{ width: "7rem" }} className="btn btn-primary" value="random" onClick={show}>Random</button>}
        {check === "randomx5" ? null : <button style={{ width: "7rem" }} className="btn btn-primary" value="randomx5" onClick={show}>Random*5</button>}
        {check === "house" ? null : <button style={{ width: "7rem" }} className="btn btn-primary" value="house" onClick={show}>Houses</button>}
      </div>
      <div>
        <hr />
        <hr />
        {check === "random" ? <Quote /> : null}
        {check === "randomx5" ? <QuoteFive /> : null}
        {check === "house" ? <House /> : null}
      </div>
    </div>
  );
}

export default App;
