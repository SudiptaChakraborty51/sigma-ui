import React from "react";
import "./ButtonDoc.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  FloatingButton,
  IconButton,
  LinkButton,
  OutlineButton,
  PrimaryButton,
} from "../../components/Button/Button";

const ButtonDoc = () => {
  return (
    <div className="button-main">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="button-container">
        <h1>Button</h1>
        <p>
          <span>Buttons</span> are useful in performing various actions on a
          single click. Different variants of buttons are present in Sigma UI.
        </p>
        <h2>Primary Button</h2>
        <p>
          <span>Primary buttons</span> are strategically placed to capture the
          user's focus and carry out the main tasks. To use the primary buttons,
          you have to add <span>text</span> and <span>bgColor</span> as props.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>text: </strong>It contains the text of the button.
          </p>
          <p>
            <strong>bgColor: </strong>It determines what will be the background
            color of the button (prefered a dark color).
          </p>
        </div>
        <div className="button-showcase">
          <PrimaryButton text="Submit" bgColor="blue" />
          <PrimaryButton text="Add Menu" bgColor="red" />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CPrimaryButton%2520text%253D%2522Submit%2522%2520bgColor%253D%2522blue%2522%2520%252F%253E%250A%253CPrimaryButton%2520text%253D%2522Add%2520Menu%2522%2520bgColor%253D%2522red%2522%2520%252F%253E"
            style={{
              width: "867px",
              height: "120px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="primary-button"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Outline Button</h2>
        <p>
          <span>Outline buttons</span> are employed in areas where user
          engagement or attention isn't as critical or central. To use the
          outline buttons, you have to add <span>text</span> and{" "}
          <span>color</span> as props.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>text: </strong>It contains the text of the button.
          </p>
          <p>
            <strong>color: </strong>It determines what will be the color of the
            button text and border (prefered a dark color).
          </p>
        </div>
        <div className="button-showcase">
          <OutlineButton text="Click Me!" color="blue" />
          <OutlineButton text="Read More" color="red" />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253COutlineButton%2520text%253D%2522Click%2520Me%21%2522%2520color%253D%2522blue%2522%2520%252F%253E%250A%253COutlineButton%2520text%253D%2522Read%2520More%2522%2520color%253D%2522red%2522%2520%252F%253E"
            style={{
              width: "867px",
              height: "120px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="outline-button"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Link Button</h2>
        <p>
          <span>Link buttons</span> serve as a means to seamlessly guide users
          to different webpages, providing the hyperlink to their destination
          within the same context. To use the link buttons, you have to add{" "}
          <span>text</span>, <span>color</span> and <span>targetURL</span> as
          props.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>text: </strong>It contains the text of the button.
          </p>
          <p>
            <strong>color: </strong>It determines what will be the color of the
            button text (prefered a dark color).
          </p>
          <p>
            <strong>targetURL: </strong>You can provide the URL, which you want
            to navigate.
          </p>
        </div>
        <div className="button-showcase">
          <LinkButton
            text="Go back"
            color="blue"
            targetURL="https://sigma-ui-tau.vercel.app/"
          />
          <LinkButton
            text="View Menu"
            color="red"
            targetURL="https://www.dineout.co.in/kolkata/kareems-salt-lake-east-kolkata-32395/menu"
          />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CLinkButton%250A%2520%2520text%253D%2522Go%2520back%2522%250A%2520%2520color%253D%2522blue%2522%250A%2520%2520targetURL%253D%2522https%253A%252F%252Fsigma-ui-tau.vercel.app%252F%2522%250A%252F%253E%250A%253CLinkButton%250A%2520%2520text%253D%2522View%2520Menu%2522%250A%2520%2520color%253D%2522red%2522%250A%2520%2520targetURL%253D%2522https%253A%252F%252Fwww.dineout.co.in%252Fkolkata%252Fkareems-salt-lake-east-kolkata-32395%252Fmenu%2522%250A%252F%253E"
            style={{
              width: "867px",
              height: "270px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="link-button"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Icon Button</h2>
        <p>
          <span>Icon buttons</span> are the combination of icons and text for
          actions. To use the icon buttons, you have to add <span>text</span>,{" "}
          <span>bgColor</span> and <span>icon</span> as props.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>text: </strong>It contains the text of the button.
          </p>
          <p>
            <strong>bgColor: </strong>It determines what will be the background
            color of the button (prefered a dark color).
          </p>
          <p>
            <strong>icon: </strong>You can provide the icon, which you want to
            show.
          </p>
        </div>
        <div className="button-showcase">
          <IconButton
            text="Add to Cart"
            icon={<i className="fa-solid fa-cart-shopping"></i>}
            bgColor="blue"
          />
          <IconButton
            text="Add to Wishlist"
            icon={<i className="fa-solid fa-heart"></i>}
            bgColor="red"
          />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CIconButton%250A%2520%2520text%253D%2522Add%2520to%2520Cart%2522%250A%2520%2520icon%253D%257B%253Ci%2520className%253D%2522fa-solid%2520fa-cart-shopping%2522%253E%253C%252Fi%253E%257D%250A%2520%2520bgColor%253D%2522blue%2522%250A%252F%253E%250A%253CIconButton%250A%2520%2520text%253D%2522Add%2520to%2520Wishlist%2522%250A%2520%2520icon%253D%257B%253Ci%2520className%253D%2522fa-solid%2520fa-heart%2522%253E%253C%252Fi%253E%257D%250A%2520%2520bgColor%253D%2522red%2522%250A%252F%253E"
            style={{
              width: "867px",
              height: "270px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="icon-button"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Floating Action Button</h2>
        <p>
          <span>Floating action button</span> is a prominent, circular button in
          user interfaces, typically used for a primary or standout action. To
          use the floating action buttons, you have to add <span>bgColor</span>{" "}
          and <span>icon</span> as props.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>bgColor: </strong>It determines what will be the background
            color of the button (prefered a dark color).
          </p>
          <p>
            <strong>icon: </strong>You can provide the icon, which you want to
            show.
          </p>
        </div>
        <div className="button-showcase">
          <FloatingButton
            icon={<i className="fa-solid fa-plus"></i>}
            bgColor="blue"
          />
          <FloatingButton
            icon={<i className="fa-solid fa-share"></i>}
            bgColor="red"
          />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CFloatingButton%250A%2520%2520icon%253D%257B%253Ci%2520className%253D%2522fa-solid%2520fa-plus%2522%253E%253C%252Fi%253E%257D%250A%2520%2520bgColor%253D%2522blue%2522%250A%252F%253E%250A%253CFloatingButton%250A%2520%2520icon%253D%257B%253Ci%2520className%253D%2522fa-solid%2520fa-share%2522%253E%253C%252Fi%253E%257D%250A%2520%2520bgColor%253D%2522red%2522%250A%252F%253E"
            style={{
              width: "867px",
              height: "270px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="floating-button"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </div>
  );
};

export default ButtonDoc;
