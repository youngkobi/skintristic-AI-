
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';


     
const Camera = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  // Set video constraints to prefer the front-facing camera
  const videoConstraints = {
    facingMode: 'user'
  };

  const capture = () => {
    // Take a screenshot and set it as the image source
    const screenshot = webcamRef.current.getScreenshot();
    setImageSrc(screenshot);
  };

  return (
    <div>
      <h2>Front-Facing Camera</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <br />
      {/* Conditionally render the capture button */}
      {!imageSrc && (
        <button onClick={capture}>
          Capture photo
        </button>
      )}

      {/* Conditionally render the captured image */}
      {imageSrc && (
        <>
          <button onClick={() => setImageSrc(null)}>
            Retake
          </button>
          <h3>Captured Image:</h3>
          <img src={imageSrc} alt="Captured" />
        </>
      )}
    </div>
  )
}
export default Camera
