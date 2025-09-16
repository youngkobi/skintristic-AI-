import React, { useEffect } from 'react'

const Spinningboxes = ({box1,box2,box3}) => {

  return (
    <div>
       <div 
       style={{width: box1, height: box1}}
       className="box"></div>
          <div  style={{width: box2, height: box2}}
       className="box2"></div>
          <div  style={{width: box3, height: box3}}
       className="box3"></div>
    </div>
  )
}

export default Spinningboxes
