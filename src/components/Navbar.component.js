import React from "react";
import { Link } from "react-router-dom";

const Navbar= () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
      <Link to="/" className="navbar-brand">麻雀役 dé BINGO</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">ホーム</Link>
          </li>
          <li className="navbar-item">
            <Link to="/manual" className="nav-link">使い方</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;