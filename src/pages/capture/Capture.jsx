import React, { useEffect, useRef, useState } from "react";
import spinningboxes from "../../ccomponents/Spinningboxes";
import Spinningboxes from "../../ccomponents/Spinningboxes";
import "./capture.css";
import gallery from "../../assets/gallery-icon.png";
import camera from "../../assets/camera-icon.png";
import Camera from "../../ccomponents/Camera";
import { useNavigate } from "react-router-dom";
import button from "../../assets/buttin-icon-shrunk.svg";

import axios from "axios";

const Capture = ({ cameraImg, setCameraImg, setApiSum, apiSum }) => {
  // State to hold the base64 string
  const [base64String, setBase64String] = useState(cameraImg || "");
  // State to hold the image preview URL
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const [analyze, setAnalyze] = useState(false);
  const [responseData, setResponseData] = useState(null)


  function proccesing() {
    setAnalyze(true);
    const apiUrl =
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo"; // Replace with your actual API endpoint
    const postData = {
      image: base64String,
    };
    axios.post(apiUrl, postData).then((response) => {
  const summary = response.data
      setResponseData(summary.data)
    } 
  );
  }

 useEffect(() => {
if (responseData) {
const timer = setTimeout(() => {
setAnalyze(false);
setApiSum(responseData);
alert("Image analyzed successfully!");
navigate("/select");
}, 2000);
return () => clearTimeout(timer); // cleanup if responseData changes
}
}, [responseData, navigate, setApiSum]);


useEffect(() => {
if (base64String) {
proccesing();
}
}, [base64String]);
 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a new FileReader instance
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // e.target.result contains the data URL (Base64 string)
        const result = e.target.result;
        setBase64String(result);

        setImagePreviewUrl(result);
      };
    } else {
      // Clear the state if no file is selected
      setBase64String("");
      setImagePreviewUrl("");
    }
    // Set the onload event handler
  };
  const handleImageClick = () => {
    // Programmatically click the hidden file input
    fileInputRef.current.click();
  };

  function handletakepictureclick() {
    setShowModal(true)
  }

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true)};
  const handleCloseModal = () => {
    setShowModal(false)};
  const handleCloseModal2 = () => {
    setShowModal(false)
    navigate('/camera')};

  //  useEffect(()=>(

  //   ), [])
  return (
    <div>
        <h3 className="start__ANALYSIS">To Start Analysis</h3>

      <div className="container">
        <div className="row">
          {analyze ? (
            <>
              <div className="intro-main__subtitle-analyze">
                Preparing Your Analysis...
              </div>
              <Spinningboxes box1={"402px"} box2={"452px"} box3={"502px"} />
              {base64String && (
        <div style={{ marginTop: "20px" }}>
          <h3 className="img__preview-title">Image Preview:</h3>
          <img src={imagePreviewUrl} 
          className='preview__image'
          alt="Preview" style={{ maxWidth: '300px' }} /> 
        </div>
      )}
            </>
          ) : (
            <div className="capture__wrapper">
              <div className="box__wrapper--left">
                <label htmlFor="" className="camera__label">
                  <img
                    onClick={() => handletakepictureclick()}
                    src={camera}
                    className="capture__camera--img"
                    alt=""
                  />
                  Allow A.I. <br />
                  to scan your face
                </label>
               <div>
      
      {showModal && 
      <div 
      className="allow__modal"
      onClose={handleCloseModal}>
        
        <h1 
        className="modal__title"
        >ALLOW A.I. TO ACCESS YOUR CAMERA</h1>
        <div className="allow__line"></div>
        <div className="button__wrapper-modal"><button 
        className="modal__button1"
        onClick={handleCloseModal}>DENY</button>
        <button 
        className="modal__button2"
        onClick={handleCloseModal2}>ALLOW</button>
        </div>
      </div>}
    </div>

                <div
                  style={{ width: "302px", height: "302px" }}
                  className="box4"
                ></div>
                <div
                  style={{ width: "252px", height: "252px" }}
                  className="box5"
                ></div>
                <div
                  style={{ width: "202px", height: "202px" }}
                  className="box6"
                ></div>
              </div>
              <div className="box__wrapper--right">
                <label htmlFor="" className="camera__label">
                  <img
                    onClick={() => handleImageClick()}
                    src={gallery}
                    className="capture__gallery--img"
                    alt=""
                  />
                  Allow A.I. <br />
                  Access Camera roll
                </label>
                <input
                  id="image-upload"
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <div
                  style={{ width: "302px", height: "302px" }}
                  className="box4"
                ></div>
                <div
                  style={{ width: "252px", height: "252px" }}
                  className="box5"
                ></div>
                <div
                  style={{ width: "202px", height: "202px" }}
                  className="box6"
                ></div>
              </div>
            </div>
          )}
        </div>
        <div
          className="back__button-capture"
        >
         
          <div  >

          <img
            src={button}
            alt=""
            className="button__img"
            onClick={() => navigate("/introduce")}
          
          />

          </div>
           <div
         
           onClick={() => navigate("/introduce")} className="back">
            Back
          </div>
        </div>
      </div>

        
    </div>
  );
};

export default Capture;
