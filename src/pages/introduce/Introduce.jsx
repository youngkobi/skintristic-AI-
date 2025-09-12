import React from "react";
import "./introduce.css";
import button from "../../assets/buttin-icon-shrunk.svg";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="box"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="intro-main__subtitle">Click To Type</div>
          <input
            className="intro-main__title"
            placeholder="Introduce Yourself"
            type="text"
          />
        </div>
      </div>
      <div className="back__button">
        <img src={button} alt="" className="button__img" 
        onClick={()=>navigate('/')}/>
        <p onClick={()=>navigate('/')}
            className="back"> Back</p>
      </div>
    </>
  );
};

export default Introduce;
