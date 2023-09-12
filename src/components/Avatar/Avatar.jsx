import React from "react";
import "./Avatar.css";

export const ImageAvatar = ({ srcImg, altText, size }) => {
  return <img src={srcImg} alt={altText} className={`avatar avatar-${size}`} />;
};

export const LetterAvatar = ({ name, bgColor, size }) => {
  return (
    <div
      className={`avatar-initials avatar-${size}`}
      style={{ backgroundColor: bgColor }}
    >
      {name[0].toUpperCase()}
    </div>
  );
};

export const FallbackAvatar = ({ size }) => {
  return <div className={`avatar-fallback avatar-${size}`}></div>;
};
