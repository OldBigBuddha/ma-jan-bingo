import React, {useState} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import BingoBoard from './components/BingoBoard.component.js';
import GenerateForm from './components/GenerateForm.component.js';

import Yaku from "./yaku.json";

const App = () => {

  const [bingo, setBingo] = useState([...Array(16).keys()]);

  const generateBingo = () => {
    setBingo([2, 3, 5, 8, 1, 2, 8, 9, 0, 8, 5, 7, 2, 3, 6, 7]);
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
