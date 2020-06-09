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

const saveLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

const App = () => {

  const savedBingo = JSON.parse(localStorage.getItem("BINGO"));
  console.log(savedBingo);
  const dummyBingo = [...Array(16).keys()].map(() => ({ name: "???", isDone: false }));
  const [bingo, setBingo] = useState( savedBingo ? savedBingo : dummyBingo);

  const generateBingo = (isCoincidence, isYakuman, isWYakuman) => {

    let yakuNames = YakuList["normal"];
    if (isCoincidence) yakuNames = yakuNames.concat(YakuList["coincidence"])
    if (isYakuman) yakuNames = yakuNames.concat(YakuList["yakuman"])
    if (isWYakuman) yakuNames = yakuNames.concat(YakuList["w-yakuman"])
    yakuNames = shuffle(yakuNames)

    const yakuItems = []
    for(let yakuName of yakuNames.slice(0, 16)) {
      yakuItems.push({
        name: yakuName,
        isDone: false
      });
    }

    setBingo(yakuItems);
    saveLocalStorage("BINGO", yakuItems);
  };

  const onClickItem = index => {
    bingo[index].isDone = !bingo[index].isDone

    setBingo(bingo)
    saveLocalStorage("BINGO", bingo);
  }

  const Game = () => {
    return (
      <div className="d-flex justify-content-center">
        <GenerateForm onSubmit={generateBingo} />
        <BingoBoard bingo={bingo} onClickItem={onClickItem}/>
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
