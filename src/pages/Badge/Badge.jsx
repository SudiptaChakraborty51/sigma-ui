import React from "react";
import "./Badge.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Badge = () => {
  return (
    <div className="badge-main">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="badge-container">
        <h1>Badge</h1>
        <p>
          <span>Badges</span> on avatars can be integrated to convey a user's
          status effectively, such as indicating when they are <span>busy</span>
          , <span>offline</span>, or <span>away</span>. Furthermore, these
          badges can be applied to icons to signify pending notifications or
          updates.
        </p>
        <h2>Badge on Icons</h2>
        <p>
          For <span>Icon Badges</span>, the three classes are to be added in
          span tag <span>badge-icon</span>, <span>badge-number</span>.
        </p>
        <div className="badge-showcase">
          <div className="badge">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="badge-icon badge-number">4</span>
          </div>
          <div className="badge">
            <i className="fa-solid fa-envelope"></i>
            <span className="badge-icon badge-number">7+</span>
          </div>
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522badge-showcase%2522%253E%250A%2520%2520%253Cdiv%2520className%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%253Ci%2520className%253D%2522fa-solid%2520fa-cart-shopping%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253Cspan%2520className%253D%2522badge-icon%2520badge-number%2522%253E4%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520className%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%253Ci%2520className%253D%2522fa-solid%2520fa-envelope%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253Cspan%2520className%253D%2522badge-icon%2520badge-number%2522%253E7%252B%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style={{
              width: "867px",
              height: "270px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="badge"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Badge on Avatars</h2>
      </div>
    </div>
  );
};

export default Badge;
