import React from "react";
import "./Alert.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Alert = () => {
  return (
    <div className="alert-main">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="alert-container">
        <h1>Alert</h1>
        <p>
          <span>Alert</span> is on-screen message used to convey information,
          warnings, or errors to the user.
        </p>
        <h2>Alert Variants</h2>
        <p>
          Alerts are available in 4 variants success alert, info alert, warning
          alert, error alert. To use this alert in your code, just include
          classname <span>alert</span>. And also as per the requirement you can
          also add <span>alert-success</span>, <span>alert-info</span>,{" "}
          <span>alert-warning</span>, <span>alert-error</span> as class names.
          You can copy the html code from below code snippet.
        </p>
        <div className="alert-showcase">
          <div className="alert alert-success">
            <i className="fas fa-check-circle"></i>
            This is the success alert <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="alert alert-info">
            <i className="fas fa-info-circle"></i>
            This is the info alert <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="alert alert-warning">
            <i className="fas fa-exclamation-triangle"></i>
            This is the warning alert <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="alert alert-error">
            <i className="fas fa-exclamation-circle"></i>
            This is the error alert <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522alert%2520alert-success%2522%253E%250A%2520%2520%253Ci%2520className%253D%2522fas%2520fa-check-circle%2522%253E%253C%252Fi%253E%250A%2520%2520This%2520is%2520the%2520success%2520alert%2520%253Ci%2520className%253D%2522fa-solid%2520fa-xmark%2522%253E%253C%252Fi%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520alert-info%2522%253E%250A%2520%2520%253Ci%2520className%253D%2522fas%2520fa-info-circle%2522%253E%253C%252Fi%253E%250A%2520%2520This%2520is%2520the%2520info%2520alert%2520%253Ci%2520className%253D%2522fa-solid%2520fa-xmark%2522%253E%253C%252Fi%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520alert-warning%2522%253E%250A%2520%2520%253Ci%2520className%253D%2522fas%2520fa-exclamation-triangle%2522%253E%253C%252Fi%253E%250A%2520%2520This%2520is%2520the%2520warning%2520alert%2520%253Ci%2520className%253D%2522fa-solid%2520fa-xmark%2522%253E%253C%252Fi%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520alert-error%2522%253E%250A%2520%2520%253Ci%2520className%253D%2522fas%2520fa-exclamation-circle%2522%253E%253C%252Fi%253E%250A%2520%2520This%2520is%2520the%2520error%2520alert%2520%253Ci%2520className%253D%2522fa-solid%2520fa-xmark%2522%253E%253C%252Fi%253E%250A%253C%252Fdiv%253E"
            style={{
              width: "867px",
              height: "400px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="alert"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </div>
  );
};

export default Alert;
