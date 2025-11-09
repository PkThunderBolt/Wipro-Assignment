import React from "react";

function CardComponent() {
  return React.createElement(
    "div",
    { className: "card", style: { width: "18rem" } },
    [
      React.createElement("img", {
        src: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-65126,resizemode-75,msid-88634316/tech/technology/tracking-the-buzz-in-tech.jpg",
        className: "card-img-top",
        alt: "placeholder",
      }),

      React.createElement("div", { className: "card-body" }, [
        React.createElement(
          "h5",
          { className: "card-title" },
          "Bootstrap Card"
        ),
        React.createElement(
          "p",
          { className: "card-text" },
          "This is a card component using Bootstrap."
        ),
        React.createElement(
          "a",
          { href: "#", className: "btn btn-success" },
          "Read More"
        ),
      ]),
    ]
  );
}

export default CardComponent;
