import React from "react";
import "./AlertDoc.css";
import Alert from "../../components/Alert/Alert";
import Sidebar from "../../components/Sidebar/Sidebar";

const AlertDoc = () => {
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
          classname <span>alert</span>.
          You have to add <span>type</span> and <span>text</span> props to the{" "}
          <span>Alert</span> component. You can copy the html code from below
          code snippet.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>type: </strong>There are four different types of alert:{" "}
            <span>success</span>, <span>info</span>, <span>warning</span> and{" "}
            <span>error</span>. The type you choose will affect how the alert
            looks.
          </p>
          <p>
            <strong>text: </strong>This props allows you to provide any message
            that you want to show to the user.
          </p>
        </div>
        <div className="alert-showcase">
          <Alert type="success" text="This is the success alert" />
          <Alert type="info" text="This is the info alert" />
          <Alert type="warning" text="This is the warning alert" />
          <Alert type="error" text="This is the error alert" />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CAlert%2520type%253D%2522success%2522%2520text%253D%2522This%2520is%2520the%2520success%2520alert%2522%2520%252F%253E%250A%253CAlert%2520type%253D%2522info%2522%2520text%253D%2522This%2520is%2520the%2520info%2520alert%2522%2520%252F%253E%250A%253CAlert%2520type%253D%2522warning%2522%2520text%253D%2522This%2520is%2520the%2520warning%2520alert%2522%2520%252F%253E%250A%253CAlert%2520type%253D%2522error%2522%2520text%253D%2522This%2520is%2520the%2520error%2520alert%2522%2520%252F%253E"
            style={{
              width: "867px",
              height: "200px",
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

export default AlertDoc;
