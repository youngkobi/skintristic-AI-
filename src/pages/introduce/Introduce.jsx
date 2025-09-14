import React, { useState } from "react";
import "./introduce.css";
import button from "../../assets/buttin-icon-shrunk.svg";
import { useNavigate } from "react-router-dom";
import LoadingDots from "../../ccomponents/loadingDots";
import axios from "axios";

const Introduce = () => {
  const navigate = useNavigate();
  const [nameStep, setNameStep] =useState(false)
  const [processload, setProcessload] = useState(false)
const [empty, setEmpty] = useState(false)
const [emptyCity, setEmptyCity] = useState(false)


  const [cityValue, setCityValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter"  && nameValue !== "") {
      console.log(nameValue);
      localStorage.setItem("username", nameValue);
      setNameValue(""); // Clear the input
      setNameStep(true);
       setEmpty(false);
    }
    if (event.key === "Enter"  && nameValue === ""){
      setEmpty(true);
    }
  };
  const handleKeyDownCity = (event) => {
    if (event.key === "Enter" &&cityValue !== "") {
        console.log(cityValue);
      localStorage.setItem("location", cityValue);
      setProcessload(true)
      setEmptyCity(false)
    }
    if (event.key === "Enter" && cityValue === ""){
      setEmptyCity(true);
    }
  };

  // function handleChange(event){
  //   setNameStep(true)
    
  // }
  const apiUrl = 'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne'; // Replace with your actual API endpoint
    const postData = {
        name: localStorage.getItem("username"),
       location: localStorage.getItem("location"),
    };
    axios.post(apiUrl, postData)
        .then(response => {
            // Handle successful response
            console.log('Success:', response.data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="box"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          {processload?
          <div className="intro-main__subtitle">processing submission</div>
          :
          <div className="intro-main__subtitle">Click To Type</div>}


          {emptyCity 
          ? 
         <div className="intro-main__subtitle-empty">Please enter your city</div>
         :null }
         
          {empty?  <div className="intro-main__subtitle-empty">Please enter your name</div>
          : null}
        
        
        {processload ?
        <LoadingDots/>
        : (nameStep
         ? <input
           value={cityValue}
           onChange={(e) => setCityValue(e.target.value)}
          onKeyDown={handleKeyDownCity}
            className="intro-main__title"
            placeholder="Your City Name"
            type="text"
            required
          />
          : 
          <input
          
             value={nameValue}
               onChange={(e) => setNameValue(e.target.value)}
        onKeyDown={handleKeyDown}
            className="intro-main__title"
            placeholder="Introduce Yourself"
            type="text"
            required

          />)}
        </div>
      </div>
      <div className="back__button">
        <img src={button} alt="" className="button__img" 
        onClick={()=>navigate('/')}/>
        <p onClick={()=>navigate('/')}
            className="back"> Back</p>
        
      </div>
    </>
  );
};

export default Introduce;
