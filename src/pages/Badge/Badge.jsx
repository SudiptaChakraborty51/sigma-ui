import React from "react";
import "./Badge.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import avatar from "../../assets/avatar.jpg";

const Badge = () => {
  return (
    <div className="badge-main">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="badge-container">
        <h1>Badge</h1>
        <p>
          <span>Badges</span> on avatars can be integrated to convey a user's
          status effectively, such as indicating when they are{" "}
          <span>online</span>, <span>offline</span>, or <span>away</span>.
          Furthermore, these badges can be applied to icons to signify pending
          notifications or updates.
        </p>
        <h2>Badge on Icons</h2>
        <p>
          For <span>Icon Badges</span>, the three classes are to be added in
          span tag <span>badge-icon</span>, <span>badge-number</span>.
        </p>
        <div className="badge-showcase">
          <div className="badge">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="badge-icon badge-number">4</span>
          </div>
          <div className="badge">
            <i className="fa-solid fa-envelope"></i>
            <span className="badge-icon badge-number">7+</span>
          </div>
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522badge-showcase%2522%253E%250A%2520%2520%253Cdiv%2520className%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%253Ci%2520className%253D%2522fa-solid%2520fa-cart-shopping%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253Cspan%2520className%253D%2522badge-icon%2520badge-number%2522%253E4%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520className%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%253Ci%2520className%253D%2522fa-solid%2520fa-envelope%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253Cspan%2520className%253D%2522badge-icon%2520badge-number%2522%253E7%252B%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style={{
              width: "867px",
              height: "270px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="badge"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Badge on Avatars</h2>
        <p>
          For <span>Badges on Avatars</span>, classname{" "}
          <span>badge-avatar</span> needs to be added for image avatar and{" "}
          <span>badge-avatar-initials</span> needs to be added for letter avatar
          in span tag. As per the avatar size selected, the badge size differs,
          the sizes for badges are <span>badge-lg</span>, <span>badge-md</span>,{" "}
          <span>badge-sm</span>, <span>badge-xs</span>. Based on the status of
          the user, the different choices are <span>badge-offline</span>,{" "}
          <span>badge-online</span> and <span>badge-away</span>.
        </p>
        <div className="badge-showcase">
          <div class="badge">
            <img class="avatar avatar-lg" src={avatar} alt="avatar" />
            <span class="badge-avatar badge-lg badge-offline"></span>
          </div>
          <div class="badge">
            <div class="avatar-initials avatar-md">A</div>
            <span class="badge-avatar-initials badge-md badge-online"></span>
          </div>
          <div class="badge">
            <img class="avatar avatar-sm" src={avatar} alt="avatar" />
            <span class="badge-avatar badge-sm badge-away"></span>
          </div>
          <div class="badge">
            <img class="avatar avatar-xs" src={avatar} alt="avatar" />
            <span class="badge-avatar badge-xs badge-offline"></span>
          </div>
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522badge-showcase%2522%253E%250A%2520%2520%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520class%253D%2522avatar%2520avatar-lg%2522%2520src%253D%257Bavatar%257D%2520alt%253D%2522avatar%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-avatar%2520badge-lg%2520badge-offline%2522%253E%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-initials%2520avatar-md%2522%253EA%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-avatar-initials%2520badge-md%2520badge-online%2522%253E%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520class%253D%2522avatar%2520avatar-sm%2522%2520src%253D%257Bavatar%257D%2520alt%253D%2522avatar%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-avatar%2520badge-sm%2520badge-away%2522%253E%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520class%253D%2522avatar%2520avatar-xs%2522%2520src%253D%257Bavatar%257D%2520alt%253D%2522avatar%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-avatar%2520badge-xs%2520badge-offline%2522%253E%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style={{
              width: "867px",
              height: "420px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="badge"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </div>
  );
};

export default Badge;
