import React from "react";
import "./HeadingsDoc.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Headings from "../../components/Headings/Headings";

const HeadingsDoc = () => {
  return (
    <div className="headings-main">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="headings-container">
        <h1>Headings</h1>
        <p>
          <span>Heading</span> used to display a title or section header of
          different variant styles.
        </p>
        <p>
          To use <span>Headings</span> component, you have to add two props{" "}
          <span>text</span> and <span>variant</span>.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>text: </strong>It will have the text of the heading.
          </p>
          <p>
            <strong>variant: </strong>It is the different style levels of
            headings, such as <span>h1</span>, <span>h2</span>, <span>h3</span>,{" "}
            <span>h4</span>, <span>h5</span>, <span>h6</span>.
          </p>
        </div>
        <div className="headings-showcase">
          <Headings text="This is extra-large heading." variant="h1" />
          <Headings text="This is large heading." variant="h2" />
          <Headings text="This is medium heading." variant="h3" />
          <Headings text="This is normal heading." variant="h4" />
          <Headings text="This is small heading." variant="h5" />
          <Headings text="This is extra-small heading." variant="h6" />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CHeadings%2520text%253D%2522This%2520is%2520extra-large%2520heading.%2522%2520variant%253D%2522h1%2522%2520%252F%253E%250A%253CHeadings%2520text%253D%2522This%2520is%2520large%2520heading.%2522%2520variant%253D%2522h2%2522%2520%252F%253E%250A%253CHeadings%2520text%253D%2522This%2520is%2520medium%2520heading.%2522%2520variant%253D%2522h3%2522%2520%252F%253E%250A%253CHeadings%2520text%253D%2522This%2520is%2520normal%2520heading.%2522%2520variant%253D%2522h4%2522%2520%252F%253E%250A%253CHeadings%2520text%253D%2522This%2520is%2520small%2520heading.%2522%2520variant%253D%2522h5%2522%2520%252F%253E%250A%253CHeadings%2520text%253D%2522This%2520is%2520extra-small%2520heading.%2522%2520variant%253D%2522h6%2522%2520%252F%253E"
            style={{
              width: "867px",
              height: "200px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="headings"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </div>
  );
};

export default HeadingsDoc;
