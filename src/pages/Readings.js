import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { tarotData } from "../tarotData";


// function RandomizeTarot2() {
//   const [tarotNum, setTarotNum] = useState(1);

//   setTarotNum(Math.floor((Math.random() * 78)))
// //   // setTarotID((Math.floor((Math.random() * 11)))+'.jpg')
//   console.log(tarotNum)
//   console.log(tarotData[tarotNum])
//   return(
//     <button onClick={setTarotNum} />
//   )
// }


const Readings = () => {
  const [tarotNum, setTarotNum] = useState(1);
  useEffect(()=>{
    setTarotNum(Math.floor((Math.random() * 78)))
  },[]);
  
    return (
      <div>
        <h1>
            Get a Reading
        </h1>
        <div class="meaningDiv">
          <h4>
            There are a number of different ways to read tarot cards. <br></br>First, formulate a question definitely. Make your mind as blank as possible, and try to remove any bias from your thoughts.
          </h4>
        </div>
        <div class="buttonDiv">
          <button onClick={() => setTarotNum(Math.floor((Math.random() * 78)))} class="readingbutton">Get a Reading</button>
        </div>
        <div className="cardDiv">
         <img class="tarotImage" src={`/images/${tarotNum}.jpg`}></img>
         <img class="tarotImage" src='images/card-back.jpg' />
        </div>
        <div className="meaningDiv">
          <p>{tarotData[tarotNum].meaning}</p>
        </div>
      </div>
    )
}

export default Readings;