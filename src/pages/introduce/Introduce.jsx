import React, { useState } from "react";
import "./introduce.css";
import button from "../../assets/buttin-icon-shrunk.svg";
import { useNavigate } from "react-router-dom";
import LoadingDots from "../../ccomponents/loadingDots";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import Spinningboxes from "../../ccomponents/Spinningboxes";

const Introduce = () => {
  const navigate = useNavigate();
  const [nameStep, setNameStep] = useState(false);
  const [processload, setProcessload] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [emptyCity, setEmptyCity] = useState(false);
  const [cityValue, setCityValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [succesload, setsuccesload] = useState(false);


  

  const handleKeyDown = (event) => {
    if (event.key === "Enter" 
      && nameValue !== "" 
      && !/\d/.test(nameValue)
      && !/[^a-zA-Z0-9 ]/.test(nameValue)
    ) {
      localStorage.setItem("username", nameValue);
      setNameValue(""); // Clear the input
      setNameStep(true);
      setEmpty(false);
    }
    if (event.key === "Enter" && nameValue === "") {
      setEmpty(true);
    }
    if(event.key === "Enter" && /\d/.test(nameValue)){
      setEmpty(true)
    }
     if (/[^a-zA-Z0-9 ]/.test(nameValue)){
      setEmpty(true)
     }
  };
  const handleKeyDownCity = (event) => {
    if (event.key === "Enter" 
      && cityValue !== "" 
      && !/\d/.test(cityValue)
      && !/[^a-zA-Z0-9 ]/.test(cityValue)
    ) {localStorage.setItem("location", cityValue);
      setProcessload(true);
      setEmptyCity(false);
      

      const apiUrl =
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne"; // Replace with your actual API endpoint
      const postData = {
        name: localStorage.getItem("username"),
        location: localStorage.getItem("location"),
      };
      axios
        .post(apiUrl, postData)
        .then((response) => {
          // Handle successful response
          console.log("Success:", response.data);

          setTimeout(() => {
            setsuccesload(true);
          }, 6000);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });
    }
    if (event.key === "Enter" && cityValue === "") {
      setEmptyCity(true);
    }
     if (event.key === "Enter" && cityValue === "") {
      setEmptyCity(true);
    }
    if(event.key === "Enter" && /\d/.test(cityValue)){
      setEmptyCity(true)
    }
     if (/[^a-zA-Z0-9 ]/.test(cityValue)){
      setEmptyCity(true)
     }
  };

  // function handleChange(event){
  //   setNameStep(true)

  // }

  return (
    <>
      <div className="container">
        <div className="row">
         <Spinningboxes box1={"402px"} box2={'452px'} box3={'502px'}/>
          {succesload ? (
            <div className="intro-main__subtitle-success">
              Proceed for the next step
            </div>
          ) : processload ? (
            <div className="intro-main__subtitle-load">
              processing submission
            </div>
          ) : (
            <div className="intro-main__subtitle">Click To Type</div>
          )}

          {emptyCity ? (
            <div className="intro-main__subtitle-empty">
              Please enter your city
            </div>
          ) : null}

          {empty ? (
            <div className="intro-main__subtitle-empty">
              Please enter your name
            </div>
          ) : null}
          {succesload ? (
            <div className="succes__title">Thank You! </div>
          ) : processload ? (
            <LoadingDots />
          ) : nameStep ? (
            <input
              value={cityValue}
              onChange={(e) => setCityValue(e.target.value)}
              onKeyDown={handleKeyDownCity}
              className="intro-main__title"
              placeholder="Your City Name"
              type="text"
              required
            />
          ) : (
            <input
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="intro-main__title"
              placeholder="Introduce Yourself"
              type="text"
              required
            />
          )}
        </div>

        </div>
       <div className="bottom__buttons"> 
        <div
          className="back__button"
        >
         
          <div  >

          <img
            src={button}
            alt=""
            className="button__img"
            onClick={() => navigate("/")}
          
          />

          </div>
           <div
         
           onClick={() => navigate("/")} className="back">
            Back
          </div>
        </div>
      {succesload ?  <div
          className="progo__button"
        >
          <div
         data-aos="slide-right"
          data-aos-duration="3000"
          data-aos-delay="50"
          data-aos-offset="20"
           onClick={() => navigate("/capture")} className="back">
            Proceed
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
            onClick={() => navigate("/capture")}
          
          />

          </div>
        </div>:null}
      </div>
    </>
  );
};

export default Introduce;
