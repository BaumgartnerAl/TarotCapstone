import './App.css';
import React, {useState, useEffect} from "react";
import { tarotData } from "./tarotData";



function App() {

  const [tarotNum, setTarotNum] = useState(1);

  function randomizeTarot(){
    setTarotNum(Math.floor((Math.random() * 78)))
    // setTarotID((Math.floor((Math.random() * 11)))+'.jpg')
    console.log(tarotNum)
    console.log(tarotData[tarotNum])
  }

  return (
    <div className="maindiv">
      <header className="App-header">
      </header>
      <button onClick={randomizeTarot} class="readingbutton"> Generate </button>
      <p>{tarotNum}</p>
      <p>{tarotData[tarotNum].name}</p>
      <img class="tarotImage" src={`/images/${tarotNum}.jpg`}></img>
      <img class="tarotBackImage" src='images/card-back.jpg' />
    </div>
  );
}

export default App;
