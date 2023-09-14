import React from "react";
import "./ImageDoc.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ResponsiveImage, RoundedImage } from "../../components/Image/Image";

const ImageDoc = () => {
  return (
    <div className="image-main">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="image-container">
        <h1>Image</h1>
        <p>
          <span>Images</span> are graphical elements used to convey information,
          enhance aesthetics, and engage users visually.
        </p>
        <h2>Responsive Image</h2>
        <p>
          To use <span>Responsive Image</span> component, you have to add two
          props <span>imgSrc</span> and <span>altText</span>. Resize the brower
          window to see the image behave responsive.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>imgSrc: </strong>You have to provide the URL for the image.
          </p>
          <p>
            <strong>altText: </strong>You have to give an alternative text for
            the image.
          </p>
        </div>
        <div className="image-showcase">
          <ResponsiveImage
            imgSrc="https://res.cloudinary.com/dqlasoiaw/image/upload/v1688279203/tech-social/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827_xd3axv.jpg"
            altText="responsive-pic"
          />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CResponsiveImage%250A%2520%2520imgSrc%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fdqlasoiaw%252Fimage%252Fupload%252Fv1688279203%252Ftech-social%252Fbeautiful-view-greenery-bridge-forest-perfect-background_181624-17827_xd3axv.jpg%2522%250A%2520%2520altText%253D%2522responsive-pic%2522%250A%252F%253E"
            style={{
              width: "867px",
              height: "180px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="responsive-image"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Rounded Image</h2>
        <p>
          To use <span>Rounded Image</span> component, you have to add three
          props <span>imgSrc</span>, <span>altText</span> and{" "}
          <span>dimension</span>. The Image will be in round shape.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>imgSrc: </strong>You have to provide the URL for the image.
          </p>
          <p>
            <strong>altText: </strong>You have to give an alternative text for
            the image.
          </p>
          <p>
            <strong>dimension: </strong> You have to provide the width and
            height as dimension. Width and height will be same for rounded
            image, so that you can give only dimension.
          </p>
        </div>
        <div className="image-showcase">
          <RoundedImage
            imgSrc="https://res.cloudinary.com/dqlasoiaw/image/upload/v1688279203/tech-social/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827_xd3axv.jpg"
            altText="rounded-pic"
            dimension="300"
          />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CRoundedImage%250A%2520%2520imgSrc%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fdqlasoiaw%252Fimage%252Fupload%252Fv1688279203%252Ftech-social%252Fbeautiful-view-greenery-bridge-forest-perfect-background_181624-17827_xd3axv.jpg%2522%250A%2520%2520altText%253D%2522rounded-pic%2522%250A%2520%2520dimension%253D%2522300%2522%250A%252F%253E"
            style={{
              width: "867px",
              height: "180px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="rounded-image"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </div>
  );
};

export default ImageDoc;
