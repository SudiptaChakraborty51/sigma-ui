import React from "react";
import "./Image.css";

export const ResponsiveImage = ({ imgSrc, altText }) => {
  return (
    <img
      src={imgSrc}
      alt={altText}
      className="responsive-img"
    />
  );
};

export const RoundedImage = ({imgSrc, altText, dimension}) => {
  return (
    <img
      src={imgSrc}
      alt={altText}
      width={dimension}
      height={dimension}
      className="rounded-img"
    />
  );
};
