import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav__title">
        <h4 className="nav__title-header">SKINSTRIC</h4>
        <h4 className="nav__phase">Intro</h4>
      </div>

      <div>
        <button className="nav_button">ENTER CODE</button>
      </div>
    </div>
  );
};

export default Nav;
