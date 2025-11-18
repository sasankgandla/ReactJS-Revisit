import React from "react";
import ReactDOM from "react-dom/client";

const parentDiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", {}, React.createElement("h1", {}, "heading123"))
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentDiv);
