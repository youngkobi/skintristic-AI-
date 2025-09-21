
import React, { useState } from 'react'
import "./select.css"
import { useNavigate } from 'react-router-dom';
import button from "../../assets/buttin-icon-shrunk.svg";


const Select = () => {
    const [boxxy, setBoxxy] = useState(false);
    const navigate = useNavigate()
  return( 
  <>
<div className="select__infobox">
    <h1 className='select__infobox--title'>A.I. Analysis</h1>
    <p className='select__infobox--para'>A.I. has estimated the following.
        <br />
Fix estimated information if needed.</p>
</div>
    <div className="diamond-grid-container">
      <div className="diamond-item top diamond-1"
      onMouseOver={() => setBoxxy(true)}
        onMouseLeave={() => setBoxxy(false)}
        onClick={()=>navigate('/summary')}>
        <div className="diamond-content ">DEMOGRAPHICS</div>
      </div>
      <div className="diamond-item left"
      onMouseOver={() => setBoxxy(true)}
        onMouseLeave={() => setBoxxy(false)}>
        <div className="diamond-content">SKIN TYPE DETAILS</div>
      </div>
      <div className="diamond-item right"
      onMouseOver={() => setBoxxy(true)}
        onMouseLeave={() => setBoxxy(false)}>
        <div className="diamond-content">COSMETIC CONCERNS</div>
      </div>
      <div className="diamond-item bottom"
      onMouseOver={() => setBoxxy(true)}
        onMouseLeave={() => setBoxxy(false)}>
        <div className="diamond-content">WEATHER</div>
      </div>
    </div>
   <div className={`hover__dotted ${boxxy ? "hover__dotted--active" : ""}`}></div>
     <div className="bottom__buttons"> 
    <div
          className="back__button"
        >
         
          <div  >

          <img
            src={button}
            alt=""
            className="button__img"
            onClick={() => navigate("/capture")}
          
          />

          </div>
           <div
         
           onClick={() => navigate("/capture")} className="back">
            Back
          </div>
        </div>
    <div
          className="progo__button"
        >
          <div
           onClick={() => navigate("/capture")} className="back">
            Get Summary
          </div>
          <div  data-aos="slide-right"
          data-aos-duration="3000"
          data-aos-delay="50"
          data-aos-offset="20"
          >
            
          <img
            src={button}
            alt=""
            className="button__flip"
            onClick={() => navigate("/summary")}
          
          />

          </div>
        </div>
        </div>
        
    </>
  );
};


export default Select
