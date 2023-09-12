import React from "react";
import "./Badge.css";
import { FallbackAvatar, ImageAvatar, LetterAvatar } from "../Avatar/Avatar";

export const IconBadge = ({ children, number }) => {
  return (
    <div className="badge">
      {children}
      <span className="badge-icon badge-number">{number}</span>
    </div>
  );
};

export const AvatarBadge = ({
  size,
  srcImg,
  altText,
  status,
  name,
  bgColor,
}) => {
  return (
    <div className="badge">
      {srcImg || name ? (
        srcImg ? (
          <ImageAvatar
            className={`avatar avatar-${size}`}
            srcImg={srcImg}
            altText={altText}
            size={size}
          />
        ) : (
          <LetterAvatar name={name} bgColor={bgColor} size={size} />
        )
      ) : (
        <FallbackAvatar size={size}/>
      )}
      <span
        className={`${
          srcImg ? `badge-avatar` : `badge-avatar-initials`
        } badge-${size} badge-${status}`}
      ></span>
    </div>
  );
};
