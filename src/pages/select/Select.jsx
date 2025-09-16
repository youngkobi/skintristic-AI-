
import React, { useState } from 'react'
import "./select.css"

const Select = () => {
    const [boxxy, setBoxxy] = useState(false);
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
        onMouseLeave={() => setBoxxy(false)}>
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
    {boxxy && <div 
    // style={{ transform: boxxy ? "translateX(-300px)" : 0 }}
className="hover__dotted"></div>}
    </>
  );
};


export default Select
