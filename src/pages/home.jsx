import React, { useState } from "react";
import "./home.css";
import button from "../assets/buttin-icon-shrunk.svg";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
  const [pushleft, setPushleft] = useState(false);
  const [pushright, setPushright] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="main__wrapper-">
        <div className="smallscreen__square-small"></div>
        <div className="smallscreen__sqaure"></div>
        <div
          className="sidesquare__wrapper"
          style={{ opacity: pushright ? 0 : 1 }}
        >
          <div className="main__sidesquare"></div>

          <div
            className="main__sidetitles"
            onMouseOver={() => setPushleft(true)}
            onMouseLeave={() => setPushleft(false)}
            style={{ opacity: pushright ? 0 : 1 }}
          >
            <img src={button} alt="" className="button__img" />
            Discover A.I.
          </div>
        </div>

        <div
          className="sidesquare__wrapper"
          style={{ opacity: pushleft ? 0 : 1 }}
        >
          <div
            className="main__sidetitles-right"
            onMouseOver={() => setPushright(true)}
            onMouseLeave={() => setPushright(false)}
            style={{ opacity: pushleft ? 0 : 1 }}
          >
            Take Test
            <img
              src={button}
              alt=""
              className="button__flip"
              onClick={() => navigate("/introduce")}
            />
          </div>
          

          <div className="main__sidesquare-right"></div>
        </div>
        <div className="main__sidetitles-right-small">
            Start Experience
            <img
              src={button}
              alt=""
              className="button__flip"
              onClick={() => navigate("/introduce")}
            />
          </div>

        <div className="container">
          <div className="row">
            <h1
              data-aos="fade-in"
              data-aos-duration="3000"
              data-aos-delay="50"
              style={{
                transform: pushright
                  ? "translateX(-300px)"
                  : pushleft
                  ? "translateX(300px)"
                  : "translateX(0px)",
              }}
              className="Main__title"
            >
              Sophisticated
            </h1>
            <div
              data-aos="fade-in"
              data-aos-duration="3000"
              data-aos-delay="50"
              style={{
                transform: pushright
                  ? "translateX(-300px)"
                  : pushleft
                  ? "translateX(300px)"
                  : "translateX(0px)",
              }}
              className="main__subtitle"
            >
              Skincare
            </div>
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
