import React, {useState} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import BingoBoard from './components/BingoBoard.component.js';
import GenerateForm from './components/GenerateForm.component.js';

import YakuList from "./yaku.json";

// Ref: https://www.nxworld.net/tips/js-array-shuffle.html
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const App = () => {

  const [bingo, setBingo] = useState([...Array(16).fill("???")]);

  const generateBingo = (isCoincidence, isYakuman, isWYakuman) => {
    let yakus = YakuList["normal"];
    if (isCoincidence) yakus = yakus.concat(YakuList["coincidence"])
    if (isYakuman) yakus = yakus.concat(YakuList["yakuman"])
    if (isWYakuman) yakus = yakus.concat(YakuList["w-yakuman"])
    yakus = shuffle(yakus)
    setBingo(yakus.slice(0, 16));
  };

  return (
      <div className="container">
        <h1>麻雀 BINGO</h1>
        <BingoBoard bingo={bingo}/>
        <GenerateForm onSubmit={generateBingo} />
      </div>
    );
}

export default App;
