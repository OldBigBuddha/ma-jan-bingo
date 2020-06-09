import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar.component';
import Game from "./components/Game/Game.component.js";
import Manual from "./components/Manual/Manual.component.js";

const App = () => (
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

export default App;
