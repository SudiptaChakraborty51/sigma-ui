import React from "react";
import "./Avatar.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import avatar from "../../assets/avatar.jpg";

const Avatar = () => {
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
          small and x-small. To use the avatars, just include classname{" "}
          <span>avatar</span> to your image for responsiveness and avatar. Also
          as per the requirement you can also add <span>avatar-lg</span>,{" "}
          <span>avatar-md</span>, <span>avatar-sm</span>, <span>avatar-xs</span>{" "}
          as classnames. You can copy the html code from below code snippet. You
          can add image of your choice.
        </p>
        <div class="avatar-showcase">
          <img class="avatar avatar-lg" src={avatar} alt="avatar" />
          <img class="avatar avatar-md" src={avatar} alt="avatar" />
          <img class="avatar avatar-sm" src={avatar} alt="avatar" />
          <img class="avatar avatar-xs" src={avatar} alt="avatar" />
        </div>

        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar-showcase%2522%253E%250A%2520%2520%253Cimg%2520class%253D%2522avatar%2520avatar-lg%2522%2520src%253D%257Bavatar%257D%2520alt%253D%2522avatar%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520class%253D%2522avatar%2520avatar-md%2522%2520src%253D%257Bavatar%257D%2520alt%253D%2522avatar%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520class%253D%2522avatar%2520avatar-sm%2522%2520src%253D%257Bavatar%257D%2520alt%253D%2522avatar%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520class%253D%2522avatar%2520avatar-xs%2522%2520src%253D%257Bavatar%257D%2520alt%253D%2522avatar%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
            style={{
              width: "867px",
              height: "200px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="avatar"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Letter Avatar</h2>
        <p>
          <span>Letter Avatars</span> are also available in 4 sizes. These
          avatars display the Initials of the person. To use the letter avatars,
          just include classname <span>avatar-initials</span> to div. Also as
          per the requirement you can also add various sizes.
        </p>
        <div class="avatar-showcase">
          <div class="avatar-initials avatar-lg">A</div>
          <div class="avatar-initials avatar-md">A</div>
          <div class="avatar-initials avatar-sm">A</div>
          <div class="avatar-initials avatar-xs">A</div>
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar-showcase%2522%253E%250A%2520%2520%253Cdiv%2520class%253D%2522avatar-initials%2520avatar-lg%2522%253EA%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522avatar-initials%2520avatar-md%2522%253EA%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522avatar-initials%2520avatar-sm%2522%253EA%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522avatar-initials%2520avatar-xs%2522%253EA%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style={{
              width: "867px",
              height: "200px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="avatar"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </div>
  );
};

export default Avatar;
