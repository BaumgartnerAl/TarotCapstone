import './App.css';
import React, {useState, useEffect} from "react";
import { tarotData } from "./tarotData";

let tarotNum = 0;


function App() {

  const [tarotNum, setTarotNum] = useState(1);

  function randomizeTarot(){
    setTarotNum(Math.floor((Math.random() * 11)))
    console.log(tarotNum)
    console.log(tarotData[tarotNum])
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <button onClick={randomizeTarot} class="readingbutton"> Generate </button>
      <p>{tarotNum}</p>
      <p>{tarotData[tarotNum].name}</p>
    </div>
  );
}

export default App;
