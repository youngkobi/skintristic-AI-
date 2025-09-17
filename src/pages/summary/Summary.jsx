import React, { useState } from 'react';
import './summary.css'; // Import the CSS file

const Summary = ({apiSum, setApiSum}) => {


// SIDEBAR REACTIVE CODE

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleClickSidebar1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
  };
  const handleClickSidebar2 = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
  };
  const handleClickSidebar3 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
  };


  const predictedData = {
    race: 'East asian',
    age: '50-59',
    sex: 'MALE',
  };

  const raceConfidence = [
    { race: 'East asian', confidence: 47 },
    { race: 'Southeast asian', confidence: 36 },
    { race: 'White', confidence: 5 },
    { race: 'South asian', confidence: 3 },
    { race: 'Latino hispanic', confidence: 2 },
    { race: 'Middle eastern', confidence: 2 },
    { race: 'Black', confidence: 1 },
  ];
console.log(apiSum);

  // Calculate the stroke-dasharray for the donut chart segment
  // For simplicity, we're focusing on the "East Asian" segment as in the image.
  const eastAsianConfidence = raceConfidence.find(item => item.race === 'East asian').confidence;
  const circumference = 2 * Math.PI * 45; // Radius is 45 (from CSS)
  const strokeDashoffset = circumference - (eastAsianConfidence / 100) * circumference;

  return (
    <div className="demographics-container">
      <header className="header">
        <h1>A.I. ANALYSIS</h1>
        <h2>DEMOGRAPHICS</h2>
        <h3>PREDICTED RACE & AGE</h3>
      </header>

      <div className="content-area">
        <aside className="sidebar">
          <div className={isActive1 ? 'active sidebar-item' : 'sidebar-item item-2'}
          onClick={()=>handleClickSidebar1()}>
            <span className="value"> {predictedData.race}</span>
            <span className="label">RACE</span>
          </div>
          <div className={isActive2 ? 'active sidebar-item' : 'sidebar-item item-2'}
          onClick={()=>handleClickSidebar2()}>
            <span className="value">{predictedData.age}</span>
            <span className="label">AGE</span>
          </div>
          <div className={isActive3 ? 'active sidebar-item' : 'sidebar-item item-3'}
          onClick={()=>handleClickSidebar3()}>
            <span className="value">{predictedData.sex}</span>
            <span className="label">SEX</span>
          </div>
       
        </aside>

        <main className="main-content">
        <div className="chart-section">
          
           

            <div className="donut-chart-container">
                <div className='selected-race--display'>
                 <div className="predicted-race-display">
            <span>{predictedData.race}</span>
          </div>
</div>
              <svg className="donut-chart" viewBox="0 0 100 100">
                <circle
                  className="donut-chart-background"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
                <circle
                  className="donut-chart-segment"
                  cx="50"
                  cy="50"
                  r="45"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                ></circle>
              </svg>
              <span className="confidence-percentage">{eastAsianConfidence}%</span>
            </div>
            <div className="confidence-list-section">
                <div className="confidence-header">
                    <span>RACE</span>
                    <span>AI CONFIDENCE</span>
                </div>
                <ul className="confidence-list">
                    {raceConfidence.map((item, index) => (
                        <div className='list__wrapper'>
                        
                    <li key={index} className={item.race === predictedData.race ? 'active-confidence-item' : ''}>
                        <span className="list-icon">◇</span>
                        <span> {item.race}</span>
                        <span className='number__confidence'>{item.confidence}%</span>
                    </li>
                    </div>
                    ))}
                </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Summary;
