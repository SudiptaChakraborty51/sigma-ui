import React from "react";
import "./TextDoc.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Text from "../../components/Text/Text";

const TextDoc = () => {
  return (
    <div className="text-main">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="text-container">
        <h1>Text</h1>
        <p>
          <span>Text</span> used to display a text or paragraph of different
          sizes, colors and styles.
        </p>
        <p>
          To use <span>Text</span> component, you have to add some props{" "}
          <span>text</span>, <span>size</span>, <span>color</span> and{" "}
          <span>textDecoration</span>.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>text: </strong>It will have the text of the paragraph.
          </p>
          <p>
            <strong>size: </strong>It defines the size of the text. Size can be{" "}
            <span>5xl</span>, <span>4xl</span>, <span>3xl</span>,{" "}
            <span>2xl</span>, <span>xl</span>, <span>lg</span>, <span>md</span>,{" "}
            <span>sm</span> and <span>xs</span>.
          </p>
          <p>
            <strong>color: </strong>It defines the color of the text.
          </p>
          <p>
            <strong>textDecoration: </strong>It defines how the text will be
            decorated. It can be <span>none</span>, <span>line-through</span>,{" "}
            <span>underline</span> etc.
          </p>
        </div>
        <div className="text-showcase">
          <Text
            text="This is 5X-large heading."
            size="5xl"
            color="black"
            textDecoration="none"
          />
          <Text
            text="This is 4X-large heading."
            size="4xl"
            color="blue"
            textDecoration="none"
          />
          <Text
            text="This is 3X-large heading."
            size="3xl"
            color="red"
            textDecoration="none"
          />
          <Text
            text="This is 2X-large heading."
            size="2xl"
            color="black"
            textDecoration="line-through"
          />
          <Text
            text="This is X-large heading."
            size="xl"
            color="purple"
            textDecoration="none"
          />
          <Text
            text="This is large heading."
            size="lg"
            color="black"
            textDecoration="underline"
          />
          <Text
            text="This is medium heading."
            size="md"
            color="black"
            textDecoration="none"
          />
          <Text
            text="This is small heading."
            size="sm"
            color="green"
            textDecoration="none"
          />
          <Text
            text="This is extra-small heading."
            size="xs"
            color="black"
            textDecoration="none"
          />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CText%2520text%253D%2522This%2520is%25205X-large%2520heading.%2522%2520size%253D%25225xl%2522%2520color%253D%2522black%2522%2520textDecoration%253D%2522none%2522%2520%252F%253E%250A%253CText%2520text%253D%2522This%2520is%25204X-large%2520heading.%2522%2520size%253D%25224xl%2522%2520color%253D%2522blue%2522%2520textDecoration%253D%2522none%2522%2520%252F%253E%250A%253CText%2520text%253D%2522This%2520is%25203X-large%2520heading.%2522%2520size%253D%25223xl%2522%2520color%253D%2522red%2522%2520textDecoration%253D%2522none%2522%2520%252F%253E%250A%253CText%2520text%253D%2522This%2520is%25202X-large%2520heading.%2522%2520size%253D%25222xl%2522%2520color%253D%2522black%2522%2520textDecoration%253D%2522line-through%2522%2520%252F%253E%250A%253CText%2520text%253D%2522This%2520is%2520X-large%2520heading.%2522%2520size%253D%2522xl%2522%2520color%253D%2522purple%2522%2520textDecoration%253D%2522none%2522%2520%252F%253E%250A%253CText%2520text%253D%2522This%2520is%2520large%2520heading.%2522%2520size%253D%2522lg%2522%2520color%253D%2522black%2522%2520textDecoration%253D%2522underline%2522%2520%252F%253E%250A%253CText%2520text%253D%2522This%2520is%2520medium%2520heading.%2522%2520size%253D%2522md%2522%2520color%253D%2522black%2522%2520textDecoration%253D%2522none%2522%2520%252F%253E%250A%253CText%2520text%253D%2522This%2520is%2520small%2520heading.%2522%2520size%253D%2522sm%2522%2520color%253D%2522green%2522%2520textDecoration%253D%2522none%2522%2520%252F%253E%250A%253CText%2520text%253D%2522This%2520is%2520extra-small%2520heading.%2522%2520size%253D%2522xs%2522%2520color%253D%2522black%2522%2520textDecoration%253D%2522none%2522%2520%252F%253E"
            style={{
              width: "867px",
              height: "250px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="text"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </div>
  );
};

export default TextDoc;
