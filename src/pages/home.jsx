import React from "react";
import "./home.css";
import button from "../assets/buttin-icon-shrunk.svg";
import button_right from "../assets/button-icon-text-shrunk-right.svg";

const Home = () => {
  function handleHover() {
    console.log("hover");
  }

  return (
    <>
      <div className="main__wrapper-">
        <div className="main__sidesquare"></div>
        <div className="main__sidesquare-right"></div>

        <div className="container">
          <div className="main__sidetitles" 
              onMouseOver={()=>handleHover()}
          >
            <img
              src={button}
              alt=""
              className="button__img"
          
            />
            Discover A.I.
          </div>
          <div className="row">
            <div className="title__wrapper">
              <h1 className="Main__title">Sophisticated</h1>
              <span className="main__subtitle">Skincare</span>
            </div>
          </div>
          <div className="main__sidetitles-right"
            onMouseOver={() => handleHover()}
          >
            Take Test
            <img
              src={button}
              alt=""
              className="button__flip"
            
            />
          </div>
        </div>
      </div>
      <p className="disclamier">
        Skinstric developed an A.I. that creates a highly-personalised routine
        tailored to what your skin needs.
      </p>
    </>
  );
};

export default Home;
