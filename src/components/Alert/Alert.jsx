import React from "react";
import "./Alert.css";

const Alert = ({ text, type }) => {
  let alertIcon;
  switch (type) {
    case "success":
      alertIcon = <i className="fas fa-check-circle"></i>;
      break;
    case "info":
      alertIcon = <i className="fas fa-info-circle"></i>;
      break;
    case "warning":
      alertIcon = <i className="fas fa-exclamation-triangle"></i>;
      break;
    case "error":
      alertIcon = <i className="fas fa-exclamation-circle"></i>;
      break;
    default:
      alertIcon = "";
  }

  return (
    <div className={`alert alert-${type}`}>
      {alertIcon}
      {text} <i className="fa-solid fa-xmark"></i>
    </div>
  );
};

export default Alert;
