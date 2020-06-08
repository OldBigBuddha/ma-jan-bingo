import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import BingoBoard from './components/BingoBoard.component.js';
import GenerateForm from './components/GenerateForm.component.js';
import Manual from "./components/Manual.component.js";

import YakuList from "./yaku.json";
import Navbar from './components/Navbar.component';

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

  const Game = () => {
    return (
      <div className="d-flex justify-content-center">
        <GenerateForm onSubmit={generateBingo} />
        <BingoBoard bingo={bingo}/>
      </div>
    )
  }

  return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <main className="m-auto">
            <Route exact path="/" component={Game}/>
            <Route path="/manual" component={Manual}/>
          </main>
        </div>
      </BrowserRouter>
    );
}


export default App;
