import React from "react";
import { PrimaryButton, OutlineButton } from "../Button/Button";
import "./Card.css";

export const VerticalCard = ({ props }) => {
  const {
    title,
    imgSrc,
    price,
    originalPrice,
    discount,
    primaryButtonText,
    secondaryButtonText,
  } = props;
  return (
    <div className="card">
      <div>
        <img src={imgSrc} alt={title} className="card-img" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="price">
          <span>₹ {price}</span>
          <span>₹ {originalPrice}</span>
        </div>
        <p className="discount">{discount} off</p>
      </div>
      <div className="card-buttons">
        {primaryButtonText && (
          <PrimaryButton
            text={primaryButtonText}
            bgColor="var(--primary-dark)"
          />
        )}
        {secondaryButtonText && (
          <OutlineButton
            text={secondaryButtonText}
            color="var(--primary-dark)"
          />
        )}
      </div>
    </div>
  );
};

export const HorizontalCard = ({ props }) => {
  const {
    title,
    imgSrc,
    price,
    originalPrice,
    discount,
    primaryButtonText,
    secondaryButtonText,
  } = props;
  return (
    <div className="card">
      <div className="horizontal-card-content">
        <img src={imgSrc} alt={title} className="card-img" />
        <div className="card-content">
          <h3>{title}</h3>
          <div className="price">
            <span>₹ {price}</span>
            <span>₹ {originalPrice}</span>
          </div>
          <p className="discount">{discount} off</p>
        </div>
      </div>
      <div className="card-buttons">
        {primaryButtonText && (
          <PrimaryButton
            text={primaryButtonText}
            bgColor="var(--primary-dark)"
          />
        )}
        {secondaryButtonText && (
          <OutlineButton
            text={secondaryButtonText}
            color="var(--primary-dark)"
          />
        )}
      </div>
    </div>
  );
};

export const CardWithBadge = ({ props, badgeText }) => {
  const {
    title,
    imgSrc,
    price,
    originalPrice,
    discount,
    primaryButtonText,
    secondaryButtonText,
  } = props;
  return (
    <div className="card">
      <div>
        <img src={imgSrc} alt={title} className="card-img" />
        <div className="card-badge">{badgeText}</div>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="price">
          <span>₹ {price}</span>
          <span>₹ {originalPrice}</span>
        </div>
        <p className="discount">{discount} off</p>
      </div>
      <div className="card-buttons">
        {primaryButtonText && (
          <PrimaryButton
            text={primaryButtonText}
            bgColor="var(--primary-dark)"
          />
        )}
        {secondaryButtonText && (
          <OutlineButton
            text={secondaryButtonText}
            color="var(--primary-dark)"
          />
        )}
      </div>
    </div>
  );
};

export const CardWithDismiss = ({ props }) => {
  const {
    title,
    imgSrc,
    price,
    originalPrice,
    discount,
    primaryButtonText,
    secondaryButtonText,
  } = props;
  return (
    <div className="card">
      <div>
        <img src={imgSrc} alt={title} className="card-img" />
        <i className="fa-solid fa-xmark card-dismiss"></i>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="price">
          <span>₹ {price}</span>
          <span>₹ {originalPrice}</span>
        </div>
        <p className="discount">{discount} off</p>
      </div>
      <div className="card-buttons">
        {primaryButtonText && (
          <PrimaryButton
            text={primaryButtonText}
            bgColor="var(--primary-dark)"
          />
        )}
        {secondaryButtonText && (
          <OutlineButton
            text={secondaryButtonText}
            color="var(--primary-dark)"
          />
        )}
      </div>
    </div>
  );
};

export const CardWithTextOverlay = ({ props, overlayText }) => {
  const {
    title,
    imgSrc,
    price,
    originalPrice,
    discount,
    primaryButtonText,
    secondaryButtonText,
  } = props;
  return (
    <div className="card">
      <div className="card-overlay">
        <img src={imgSrc} alt={title} className="card-img" />
      </div>
      <div className="card-overlay-text">{overlayText}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="price">
          <span>₹ {price}</span>
          <span>₹ {originalPrice}</span>
        </div>
        <p className="discount">{discount} off</p>
      </div>
      <div className="card-buttons">
        {primaryButtonText && (
          <PrimaryButton
            text={primaryButtonText}
            bgColor="var(--primary-dark)"
          />
        )}
        {secondaryButtonText && (
          <OutlineButton
            text={secondaryButtonText}
            color="var(--primary-dark)"
          />
        )}
      </div>
    </div>
  );
};

export const TextOnlyCard = ({ props }) => {
  const {
    title,
    price,
    originalPrice,
    discount,
    primaryButtonText,
    secondaryButtonText,
  } = props;
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <div className="price">
          <span>₹ {price}</span>
          <span>₹ {originalPrice}</span>
        </div>
        <p className="discount">{discount} off</p>
      </div>
      <div className="card-buttons">
        {primaryButtonText && (
          <PrimaryButton
            text={primaryButtonText}
            bgColor="var(--primary-dark)"
          />
        )}
        {secondaryButtonText && (
          <OutlineButton
            text={secondaryButtonText}
            color="var(--primary-dark)"
          />
        )}
      </div>
    </div>
  );
};

export const CardWithShadow = ({ props }) => {
  const {
    title,
    imgSrc,
    price,
    originalPrice,
    discount,
    primaryButtonText,
    secondaryButtonText,
  } = props;
  return (
    <div className="card card-with-shadow">
      <div>
        <img src={imgSrc} alt={title} className="card-img" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="price">
          <span>₹ {price}</span>
          <span>₹ {originalPrice}</span>
        </div>
        <p className="discount">{discount} off</p>
      </div>
      <div className="card-buttons">
        {primaryButtonText && (
          <PrimaryButton
            text={primaryButtonText}
            bgColor="var(--primary-dark)"
          />
        )}
        {secondaryButtonText && (
          <OutlineButton
            text={secondaryButtonText}
            color="var(--primary-dark)"
          />
        )}
      </div>
    </div>
  );
};
