import React, { useState } from "react";
import "./home.css";
import button from "../assets/buttin-icon-shrunk.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [pushleft, setPushleft] = useState(false);
  const [pushright, setPushright] = useState(false);
  const navigate = useNavigate()

  function handleHoverleft() {
    setPushleft(true);
  }
  function hanldeHoverleftLeave() {
    setPushleft(false);
  }
  function handlehoverrightleave() {
    setPushright(false);
  }

  function handleHoverright() {
    setPushright(true);
  }

  return (
    <>
      <div className="main__wrapper-">
        {/* {pushright ? null : }
        {pushleft ? null : } */}
<div className="main__sidesquare"></div>
<div className="main__sidesquare-right"></div>
        <div className="container">
          <div className="row">
         
            <div
              className="main__sidetitles"
              onMouseOver={() => handleHoverleft()}
              onMouseLeave={() => hanldeHoverleftLeave()}
            >
              <img src={button} alt="" className="button__img" />
              Discover A.I.
            </div>
          
              <div
                className="main__sidetitles-right"
                onMouseOver={() => handleHoverright()}
                onMouseLeave={() => handlehoverrightleave()}
              >
                Take Test
                <img src={button} alt="" className="button__flip" 
                onClick={()=>navigate('/introduce')}/>
              </div>
        
            <h1 className="Main__title">Sophisticated</h1>
            <div className="main__subtitle">Skincare</div>
        
        
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
