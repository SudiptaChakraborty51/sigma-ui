import React from "react";
import "./Installation.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Installation = () => {
  return (
    <div className="installation">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="installation-container">
        <h1>Installation</h1>
        <p>
          You just have to paste the below line of code in the head section of
          your HTML file and you are ready to use all componnets of Sigma UI in
          your projects.
        </p>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520type%253D%2522text%252Fcss%2522%2520href%253D%2522https%253A%252F%252Fsigma-ui-tau.vercel.app%252Fsrc%252FApp.css%2522%253E%253C%252Flink%253E%250A%253Clink%250A%2520%2520rel%253D%2522stylesheet%2522%250A%2520%2520href%253D%2522https%253A%252F%252Fcdnjs.cloudflare.com%252Fajax%252Flibs%252Ffont-awesome%252F6.4.2%252Fcss%252Fall.min.css%2522%250A%252F%253E"
            style={{
              width: "867px",
              height: "180px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="installation"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <hr />
        <p>
          This UI library can also be installed by importing the CSS through the
          below tag in your CSS root file.
        </p>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=css&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2540import%2520url%28%2522https%253A%252F%252Fsigma-ui-tau.vercel.app%252Fsrc%252FApp.css%2522%29%253B%250A%2540import%2520%2522https%253A%252F%252Fcdnjs.cloudflare.com%252Fajax%252Flibs%252Ffont-awesome%252F6.4.2%252Fcss%252Fall.min.css%2522%253B"
            style={{
              width: "867px",
              height: "120px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="installation"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </div>
  );
};

export default Installation;
