import React, {useState} from "react";

import YakuList from "../../yaku.json";

import BingoBoard from "./BingoBoard.component.js";
import GenerateForm from "./GenerateForm.component.js";
import RefreshButton from "./RefreshButton.component.js";

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

export default () => {

  const savedBingo = JSON.parse(localStorage.getItem("BINGO"));
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
    const updatedBingo =  bingo.map((bingoItem, i) => i === index ? {...bingoItem, isDone: !bingoItem.isDone} : bingoItem);

    setBingo(updatedBingo)
    saveLocalStorage("BINGO", updatedBingo);
  }

  const onClickRefresh = () => {
    const refreshedBingo = bingo.map(bingoItem => ({...bingoItem, isDone: false}) )

    setBingo(refreshedBingo);
    saveLocalStorage("BINGO", refreshedBingo);
  }

  return (
    <div className="d-flex justify-content-center">
      <GenerateForm onSubmit={generateBingo} />
      <div>
        <RefreshButton onClickRefresh={onClickRefresh}/>
        <BingoBoard bingo={bingo} onClickItem={onClickItem}/>
      </div>
    </div>
  )

};