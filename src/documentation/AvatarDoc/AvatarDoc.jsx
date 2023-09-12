import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import avatar from "../../assets/avatar.jpg";
import {
  ImageAvatar,
  LetterAvatar,
  FallbackAvatar,
} from "../../components/Avatar/Avatar";
import "./AvatarDoc.css";

const AvatarDoc = () => {
  return (
    <div className="avatar-main">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="avatar-container">
        <h1>Avatar</h1>
        <p>
          <span>Avatar</span> is used to represent a user, and displays the
          profile picture, initials or fallback icon.
        </p>
        <h2>Image Avatar</h2>
        <p>
          <span>Image Avatars</span> are available in 4 sizes large, medium,
          small and x-small. <span>srcImg</span>, <span>altText</span>,{" "}
          <span>size</span> props are needed to use <span>Image Avatar</span>{" "}
          Component.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>srcImg: </strong> You have to provide the URL for the image.
          </p>
          <p>
            <strong>altText: </strong>You have to give an alternative text for
            the image.
          </p>
          <p>
            <strong>size: </strong>The size of the avatar can be <span>lg</span>
            , <span>md</span>, <span>sm</span>, <span>xs</span>.
          </p>
        </div>
        <div class="avatar-showcase">
          <ImageAvatar srcImg={avatar} altText="avatar1" size="lg" />
          <ImageAvatar srcImg={avatar} altText="avatar2" size="md" />
          <ImageAvatar srcImg={avatar} altText="avatar3" size="sm" />
          <ImageAvatar srcImg={avatar} altText="avatar4" size="xs" />
        </div>

        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CImageAvatar%2520srcImg%253D%257Bavatar%257D%2520altText%253D%2522avatar1%2522%2520size%253D%2522lg%2522%2520%252F%253E%250A%253CImageAvatar%2520srcImg%253D%257Bavatar%257D%2520altText%253D%2522avatar2%2522%2520size%253D%2522md%2522%2520%252F%253E%250A%253CImageAvatar%2520srcImg%253D%257Bavatar%257D%2520altText%253D%2522avatar3%2522%2520size%253D%2522sm%2522%2520%252F%253E%250A%253CImageAvatar%2520srcImg%253D%257Bavatar%257D%2520altText%253D%2522avatar4%2522%2520size%253D%2522xs%2522%2520%252F%253E"
            style={{
              width: "867px",
              height: "160px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="image-avatar"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Letter Avatar</h2>
        <p>
          <span>Letter Avatars</span> are also available in 4 sizes. These
          avatars display the Initials of the person. To use the letter avatars,
          just include classname <span>avatar-initials</span> to div.{" "}
          <span>name</span>, <span>bgColor</span>, <span>size</span> props are
          needed to use <span>Letter Avatar</span> Component.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>name: </strong> Here, you can provide the name or text, you
            want to see as avatar.
          </p>
          <p>
            <strong>bgColor: </strong>You can add the background color for the
            avatar.
          </p>
          <p>
            <strong>size: </strong>The size of the avatar can be <span>lg</span>
            , <span>md</span>, <span>sm</span>, <span>xs</span>.
          </p>
        </div>
        <div class="avatar-showcase">
          <LetterAvatar name="Sudipta" bgColor="blue" size="lg" />
          <LetterAvatar name="Akash" bgColor="red" size="md" />
          <LetterAvatar name="Vivek" bgColor="green" size="sm" />
          <LetterAvatar name="Ujjwal" bgColor="purple" size="xs" />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CLetterAvatar%2520name%253D%2522Sudipta%2522%2520bgColor%253D%2522blue%2522%2520size%253D%2522lg%2522%2520%252F%253E%250A%253CLetterAvatar%2520name%253D%2522Akash%2522%2520bgColor%253D%2522red%2522%2520size%253D%2522md%2522%2520%252F%253E%250A%253CLetterAvatar%2520name%253D%2522Vivek%2522%2520bgColor%253D%2522green%2522%2520size%253D%2522sm%2522%2520%252F%253E%250A%253CLetterAvatar%2520name%253D%2522Ujjwal%2522%2520bgColor%253D%2522purple%2522%2520size%253D%2522xs%2522%2520%252F%253E"
            style={{
              width: "867px",
              height: "160px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="letter-avatar"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Avatar with no image and fallback</h2>
        <p>
          If the provided image is broken or there is no image provided, as well
          as there is no fallback value is given, then you can use a{" "}
          <span>fallback avatar</span> using <span>avatar-fallback</span>{" "}
          classname. <span>size</span> props is needed to use{" "}
          <span>Fallback Avatar</span> Component.
        </p>
        <p>
          <h3>Props Description</h3>
          <strong>size: </strong>The size of the avatar can be <span>lg</span>,{" "}
          <span>md</span>, <span>sm</span>, <span>xs</span>.
        </p>
        <div className="avatar-showcase">
          <FallbackAvatar size="lg" />
          <FallbackAvatar size="md" />
          <FallbackAvatar size="sm" />
          <FallbackAvatar size="xs" />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CFallbackAvatar%2520size%253D%2522lg%2522%2520%252F%253E%250A%253CFallbackAvatar%2520size%253D%2522md%2522%2520%252F%253E%250A%253CFallbackAvatar%2520size%253D%2522sm%2522%2520%252F%253E%250A%253CFallbackAvatar%2520size%253D%2522xs%2522%2520%252F%253E"
            style={{
              width: "867px",
              height: "160px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="fallback-avatar"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </div>
  );
};

export default AvatarDoc;
