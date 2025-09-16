import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import "./camera.css"; // Import your CSS file
import picture from "../../assets/takePictureIcon.webp";
import { Navigate, useNavigate } from "react-router-dom";

function CameraPage({cameraImg, setCameraImg}) {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();

  // Set video constraints to prefer the front-facing camera
  const videoConstraints = {
    facingMode: "user",
  };

  const capture = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setImageSrc(screenshot);
   
  };

  function continueClick(){
    navigate("/capture")
    setCameraImg(imageSrc)
  }

  return (
    <div className="camera-container">
      {!imageSrc ? (
        <>
          <Webcam
            className="webcam" // Add a class name
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <br />
          <label htmlFor="" className="picture__button--label">
            Take Picture
          </label>
          <button className="camera__button" onClick={capture}>
            <img src={picture} alt="" />
          </button>

          <p className="camera__pretitle">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
          <ul className="diamond-list">
            <li> NEUTRAL EXPRESSION</li>
            <li>FRONTAL POSE</li>
            <li>ADEQUATE LIGHTING</li>
          </ul>
        </>
      ) : (
        <>
          <p className="great__shot">Great Shot!</p>
          <img src={imageSrc} alt="Captured" className="webcam" />

          <p className="preview__title">Preview</p>
          <button className="retake__button" onClick={() => setImageSrc(null)}>
            Retake
          </button>
          <button
            className="continue__button"
            onClick={() =>continueClick() }
          >
            Use this photo
          </button>
        </>
      )}
    </div>
  );
}

export default CameraPage;
