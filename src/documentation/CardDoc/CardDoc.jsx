import React from "react";
import "./CardDoc.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  CardWithBadge,
  CardWithDismiss,
  CardWithShadow,
  CardWithTextOverlay,
  HorizontalCard,
  TextOnlyCard,
  VerticalCard,
} from "../../components/Card/Card";

const props = {
  imgSrc:
    "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/pfr4G6eKc-M.A.C-Mini-Studio-Fix-Fluid-Foundation-SPF-15-NC15-(15ml).jpeg?dpr=2",
  title: "M.A.C Studio Fix Fluid SPF 15 Mini - NC15",
  price: "1715",
  originalPrice: "1900",
  discount: "15%",
  primaryButtonText: "Add To Cart",
  secondaryButtonText: "Add To Wishlist",
};

const textOnlyProps = {
  title: "M.A.C Studio Fix Fluid SPF 15 Mini - NC15",
  price: "1715",
  originalPrice: "1900",
  discount: "15%",
  primaryButtonText: "Add To Cart",
  secondaryButtonText: "Add To Wishlist",
};

const CardDoc = () => {
  return (
    <div className="card-main">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="card-container">
        <h1>Card</h1>
        <p>
          <span>Card</span> is an element that is used to show detailed
          information about any product or something needed to show in concise
          form. There are many types of Card, we have <span>Vertical Card</span>
          , <span>Horizontal Card</span>, <span>CardWithBadge</span>,{" "}
          <span>CardWithDismiss</span>, <span>CardWithTextOverlay</span>,{" "}
          <span>TextOnlyCard</span> and <span>CardWithShadow</span>.
        </p>
        <h2>Vertical Card</h2>
        <p>
          <span>Vertical Card</span> refers to information that is oriented
          vertically. To use <span>VerticalCard</span> component, you have to
          add some props such as, <span>imgSrc</span>, <span>title</span>,{" "}
          <span>price</span>, <span>originalPrice</span>, <span>discount</span>,{" "}
          <span>primaryButtonText</span> and <span>secondaryButtonText</span>.{" "}
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>imgSrc: </strong>You have to provide the URL for the image.
          </p>
          <p>
            <strong>title: </strong>It contains the title of the card.
          </p>
          <p>
            <strong>price: </strong>You can give price for product card.
          </p>
          <p>
            <strong>originalPrice: </strong>You can give original price of the
            product.
          </p>
          <p>
            <strong>discount: </strong>You can give the discount provided for
            the product.
          </p>
          <p>
            <strong>primaryButtonText: </strong>It will contain the text for{" "}
            <span>PrimaryButton</span> component.
          </p>
          <p>
            <strong>secondaryButtonText: </strong>It will contain the text for{" "}
            <span>OutlineButton</span> component.
          </p>
        </div>
        <div className="card-showcase">
          <VerticalCard props={props} />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520props%2520%253D%2520%257B%250A%2520%2520imgSrc%253A%250A%2520%2520%2520%2520%2522https%253A%252F%252Fcdn.tirabeauty.com%252Fv2%252Fbillowing-snowflake-434234%252Ftira-p%252Fwrkr%252Fproducts%252Fpictures%252Fitem%252Ffree%252Foriginal%252Fpfr4G6eKc-M.A.C-Mini-Studio-Fix-Fluid-Foundation-SPF-15-NC15-%2815ml%29.jpeg%253Fdpr%253D2%2522%252C%250A%2520%2520title%253A%2520%2522M.A.C%2520Studio%2520Fix%2520Fluid%2520SPF%252015%2520Mini%2520-%2520NC15%2522%252C%250A%2520%2520price%253A%2520%25221715%2522%252C%250A%2520%2520originalPrice%253A%2520%25221900%2522%252C%250A%2520%2520discount%253A%2520%252215%2525%2522%252C%250A%2520%2520primaryButtonText%253A%2520%2522Add%2520To%2520Cart%2522%252C%250A%2520%2520secondaryButtonText%253A%2520%2522Add%2520To%2520Wishlist%2522%252C%250A%257D%253B%250A%253CVerticalCard%2520props%253D%257Bprops%257D%2520%252F%253E"
            style={{
              width: "867px",
              height: "330px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="vertical-card"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Horizontal Card</h2>
        <p>
          <span>Horizontal Card</span> is a rectangular design element that
          typically displays its content from left to right, often used for
          presenting information, images, or other data in a horizontal layout.
          To use <span>HorizontalCard</span> component, you have to add some
          props such as, <span>imgSrc</span>, <span>title</span>,{" "}
          <span>price</span>, <span>originalPrice</span>, <span>discount</span>,{" "}
          <span>primaryButtonText</span> and <span>secondaryButtonText</span>.{" "}
        </p>
        <div>
          <h3>Props Description</h3>
          <p>Same as Vertical Card.</p>
        </div>
        <div className="card-showcase">
          <HorizontalCard props={props} />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520props%2520%253D%2520%257B%250A%2520%2520imgSrc%253A%250A%2520%2520%2520%2520%2522https%253A%252F%252Fcdn.tirabeauty.com%252Fv2%252Fbillowing-snowflake-434234%252Ftira-p%252Fwrkr%252Fproducts%252Fpictures%252Fitem%252Ffree%252Foriginal%252Fpfr4G6eKc-M.A.C-Mini-Studio-Fix-Fluid-Foundation-SPF-15-NC15-%2815ml%29.jpeg%253Fdpr%253D2%2522%252C%250A%2520%2520title%253A%2520%2522M.A.C%2520Studio%2520Fix%2520Fluid%2520SPF%252015%2520Mini%2520-%2520NC15%2522%252C%250A%2520%2520price%253A%2520%25221715%2522%252C%250A%2520%2520originalPrice%253A%2520%25221900%2522%252C%250A%2520%2520discount%253A%2520%252215%2525%2522%252C%250A%2520%2520primaryButtonText%253A%2520%2522Add%2520To%2520Cart%2522%252C%250A%2520%2520secondaryButtonText%253A%2520%2522Add%2520To%2520Wishlist%2522%252C%250A%257D%253B%250A%253CHorizontalCard%2520props%253D%257Bprops%257D%2520%252F%253E"
            style={{
              width: "867px",
              height: "330px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="horizontal-card"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Card With Badge</h2>
        <p>
          A <span>card with a badge</span> typically refers to a graphical
          element on a card-like structure, often used to provide additional
          context, status information, or visual cues related to the content
          within the card. To use <span>CardWithBadge</span> component, you have
          to add some props such as, <span>imgSrc</span>, <span>title</span>,{" "}
          <span>price</span>, <span>originalPrice</span>, <span>discount</span>,{" "}
          <span>primaryButtonText</span>, <span>secondaryButtonText</span> and{" "}
          <span>badgeText</span>.{" "}
        </p>
        <div>
          <h3>Props Description</h3>
          <p>Rest of the props are same as Vertical Card.</p>
          <p>
            <strong>badgeText: </strong>It contains the text of the badge, which
            you want to convey.
          </p>
        </div>
        <div className="card-showcase">
          <CardWithBadge props={props} badgeText="Bestseller" />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520props%2520%253D%2520%257B%250A%2520%2520imgSrc%253A%250A%2520%2520%2520%2520%2522https%253A%252F%252Fcdn.tirabeauty.com%252Fv2%252Fbillowing-snowflake-434234%252Ftira-p%252Fwrkr%252Fproducts%252Fpictures%252Fitem%252Ffree%252Foriginal%252Fpfr4G6eKc-M.A.C-Mini-Studio-Fix-Fluid-Foundation-SPF-15-NC15-%2815ml%29.jpeg%253Fdpr%253D2%2522%252C%250A%2520%2520title%253A%2520%2522M.A.C%2520Studio%2520Fix%2520Fluid%2520SPF%252015%2520Mini%2520-%2520NC15%2522%252C%250A%2520%2520price%253A%2520%25221715%2522%252C%250A%2520%2520originalPrice%253A%2520%25221900%2522%252C%250A%2520%2520discount%253A%2520%252215%2525%2522%252C%250A%2520%2520primaryButtonText%253A%2520%2522Add%2520To%2520Cart%2522%252C%250A%2520%2520secondaryButtonText%253A%2520%2522Add%2520To%2520Wishlist%2522%252C%250A%257D%253B%250A%253CCardWithBadge%2520props%253D%257Bprops%257D%2520badgeText%253D%2522Bestseller%2522%252F%253E"
            style={{
              width: "867px",
              height: "330px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="card-with-badge"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Card With Dismiss</h2>
        <p>
          A <span>card with a dismiss</span> feature typically refers to a user
          interface element within a card-based layout that allows the user to
          close or remove the card from view. To use{" "}
          <span>CardWithDismiss</span> component, you have to add some props
          such as, <span>imgSrc</span>, <span>title</span>, <span>price</span>,{" "}
          <span>originalPrice</span>, <span>discount</span>,{" "}
          <span>primaryButtonText</span> and <span>secondaryButtonText</span>.{" "}
        </p>
        <div>
          <h3>Props Description</h3>
          <p>Same as Vertical Card.</p>
        </div>
        <div className="card-showcase">
          <CardWithDismiss props={props} />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520props%2520%253D%2520%257B%250A%2520%2520imgSrc%253A%250A%2520%2520%2520%2520%2522https%253A%252F%252Fcdn.tirabeauty.com%252Fv2%252Fbillowing-snowflake-434234%252Ftira-p%252Fwrkr%252Fproducts%252Fpictures%252Fitem%252Ffree%252Foriginal%252Fpfr4G6eKc-M.A.C-Mini-Studio-Fix-Fluid-Foundation-SPF-15-NC15-%2815ml%29.jpeg%253Fdpr%253D2%2522%252C%250A%2520%2520title%253A%2520%2522M.A.C%2520Studio%2520Fix%2520Fluid%2520SPF%252015%2520Mini%2520-%2520NC15%2522%252C%250A%2520%2520price%253A%2520%25221715%2522%252C%250A%2520%2520originalPrice%253A%2520%25221900%2522%252C%250A%2520%2520discount%253A%2520%252215%2525%2522%252C%250A%2520%2520primaryButtonText%253A%2520%2522Add%2520To%2520Cart%2522%252C%250A%2520%2520secondaryButtonText%253A%2520%2522Add%2520To%2520Wishlist%2522%252C%250A%257D%253B%250A%253CCardWithDismiss%2520props%253D%257Bprops%257D%2520%252F%253E"
            style={{
              width: "867px",
              height: "330px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="card-with-dismiss"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Card With Text Overlay</h2>
        <p>
          A <span>card with a text overlay</span> typically refers to a user
          interface element where text is superimposed or overlaid on an image
          or another visual element within a card-like structure. This technique
          is often used to provide additional information, captions, or
          descriptions related to the content displayed in the card. To use{" "}
          <span>CardWithTextOverlay</span> component, you have to add some props
          such as, <span>imgSrc</span>, <span>title</span>, <span>price</span>,{" "}
          <span>originalPrice</span>, <span>discount</span>,{" "}
          <span>primaryButtonText</span>, <span>secondaryButtonText</span> and{" "}
          <span>overlayText</span>.{" "}
        </p>
        <div>
          <h3>Props Description</h3>
          <p>Rest of the props are same as Vertical Card.</p>
          <p>
            <strong>overlayText: </strong>It contains the text of the overlay,
            which you want to convey.
          </p>
        </div>
        <div className="card-showcase">
          <CardWithTextOverlay props={props} overlayText="Out of stock" />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520props%2520%253D%2520%257B%250A%2520%2520imgSrc%253A%250A%2520%2520%2520%2520%2522https%253A%252F%252Fcdn.tirabeauty.com%252Fv2%252Fbillowing-snowflake-434234%252Ftira-p%252Fwrkr%252Fproducts%252Fpictures%252Fitem%252Ffree%252Foriginal%252Fpfr4G6eKc-M.A.C-Mini-Studio-Fix-Fluid-Foundation-SPF-15-NC15-%2815ml%29.jpeg%253Fdpr%253D2%2522%252C%250A%2520%2520title%253A%2520%2522M.A.C%2520Studio%2520Fix%2520Fluid%2520SPF%252015%2520Mini%2520-%2520NC15%2522%252C%250A%2520%2520price%253A%2520%25221715%2522%252C%250A%2520%2520originalPrice%253A%2520%25221900%2522%252C%250A%2520%2520discount%253A%2520%252215%2525%2522%252C%250A%2520%2520primaryButtonText%253A%2520%2522Add%2520To%2520Cart%2522%252C%250A%2520%2520secondaryButtonText%253A%2520%2522Add%2520To%2520Wishlist%2522%252C%250A%257D%253B%250A%253CCardWithTextOverlay%2520props%253D%257Bprops%257D%2520overlayText%253D%2522Out%2520of%2520stock%2522%2520%252F%253E"
            style={{
              width: "867px",
              height: "330px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="card-with-text-overlay"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Card With Text Only</h2>
        <p>
          A <span>card with text-only</span> content is a user interface element
          designed to present information or content primarily in a text format
          within a card-like structure. To use <span>TextOnlyCard</span>{" "}
          component, you have to add some props such as, <span>title</span>,{" "}
          <span>price</span>, <span>originalPrice</span>, <span>discount</span>,{" "}
          <span>primaryButtonText</span> and <span>secondaryButtonText</span>.{" "}
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            Except <span>imgSrc</span>, rest of the props are same as Vertical
            Card.
          </p>
        </div>
        <div className="card-showcase">
          <TextOnlyCard props={textOnlyProps} />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520textOnlyProps%2520%253D%2520%257B%250A%2520%2520title%253A%2520%2522M.A.C%2520Studio%2520Fix%2520Fluid%2520SPF%252015%2520Mini%2520-%2520NC15%2522%252C%250A%2520%2520price%253A%2520%25221715%2522%252C%250A%2520%2520originalPrice%253A%2520%25221900%2522%252C%250A%2520%2520discount%253A%2520%252215%2525%2522%252C%250A%2520%2520primaryButtonText%253A%2520%2522Add%2520To%2520Cart%2522%252C%250A%2520%2520secondaryButtonText%253A%2520%2522Add%2520To%2520Wishlist%2522%252C%250A%257D%253B%250A%253CTextOnlyCard%2520props%253D%257BtextOnlyProps%257D%2520%252F%253E"
            style={{
              width: "867px",
              height: "270px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="card-with-text-only"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Card With Shadow</h2>
        <p>
          A <span>card with a shadow</span>, often referred to as a box-shadow,
          is a design element commonly used in user interfaces to create a
          visual sense of elevation and depth. The shadow adds a 3D-like effect
          to the card, making it appear as if it's slightly raised above the
          background surface. To use <span>CardWithShadow</span> component, you
          have to add some props such as, <span>imgSrc</span>,{" "}
          <span>title</span>, <span>price</span>, <span>originalPrice</span>,{" "}
          <span>discount</span>, <span>primaryButtonText</span> and{" "}
          <span>secondaryButtonText</span>.{" "}
        </p>
        <div>
          <h3>Props Description</h3>
          <p>Same as Vertical Card.</p>
        </div>
        <div className="card-showcase">
          <CardWithShadow props={props} />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520props%2520%253D%2520%257B%250A%2520%2520imgSrc%253A%250A%2520%2520%2520%2520%2522https%253A%252F%252Fcdn.tirabeauty.com%252Fv2%252Fbillowing-snowflake-434234%252Ftira-p%252Fwrkr%252Fproducts%252Fpictures%252Fitem%252Ffree%252Foriginal%252Fpfr4G6eKc-M.A.C-Mini-Studio-Fix-Fluid-Foundation-SPF-15-NC15-%2815ml%29.jpeg%253Fdpr%253D2%2522%252C%250A%2520%2520title%253A%2520%2522M.A.C%2520Studio%2520Fix%2520Fluid%2520SPF%252015%2520Mini%2520-%2520NC15%2522%252C%250A%2520%2520price%253A%2520%25221715%2522%252C%250A%2520%2520originalPrice%253A%2520%25221900%2522%252C%250A%2520%2520discount%253A%2520%252215%2525%2522%252C%250A%2520%2520primaryButtonText%253A%2520%2522Add%2520To%2520Cart%2522%252C%250A%2520%2520secondaryButtonText%253A%2520%2522Add%2520To%2520Wishlist%2522%252C%250A%257D%253B%250A%253CCardWithShadow%2520props%253D%257Bprops%257D%2520%252F%253E"
            style={{
              width: "867px",
              height: "330px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            title="card-with-shadow"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </div>
  );
};

export default CardDoc;
