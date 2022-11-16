import './App.css';
import React, {useState, useEffect} from "react";
import { tarotData } from "./tarotData";



function App() {

  const [tarotNum, setTarotNum] = useState(1);
  const [tarotID, setTarotID] = useState(1);

  function randomizeTarot(){
    setTarotNum(Math.floor((Math.random() * 78)))
    // setTarotID((Math.floor((Math.random() * 11)))+'.jpg')
    console.log(tarotNum)
    console.log(tarotData[tarotNum])
    console.log(tarotID)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <button onClick={randomizeTarot} class="readingbutton"> Generate </button>
      <p>{tarotNum}</p>
      <p>{tarotData[tarotNum].name}</p>
      {/* <img src={`/images/${tarotID}`} alt="tarot card"></img> */}
      <img class="tarotImage" src={`/images/${tarotNum}.jpg`}></img>
    </div>
  );
}

export default App;
