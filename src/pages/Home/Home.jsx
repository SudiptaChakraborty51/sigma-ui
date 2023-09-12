import React from "react";
import "./Home.css";
import heroImage from "../../assets/heroImage.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-container">
        <div className="hero-image">
          <img src={heroImage} alt="hero-img" />
        </div>
        <div className="hero-content">
          <h1>
            Build <span>Clean</span> and <span>Responsive</span> website using{" "}
            <span>Sigma UI</span>
          </h1>
          <p>
            <span>Sigma UI</span> is a lightweight, user friendly, highly
            customizable utility based <span>component library</span> so every
            developer can make a unique web page.
          </p>
          <button onClick={() => navigate("/components")}>
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
