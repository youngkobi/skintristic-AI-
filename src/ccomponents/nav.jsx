import React from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {

const navigate= useNavigate()

  return (

    <div className="navbar">
      <div className="nav__title">
        <h4 onClick={()=>navigate('/')}className="nav__title-header">SKINSTRIC</h4>
        <h4 className="nav__phase">Intro</h4>
      </div>

      <div>
        <button className="nav_button">ENTER CODE</button>
      </div>
    </div>
  );
};

export default Nav;
