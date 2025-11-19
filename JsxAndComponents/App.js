import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

// // JSX code and also react element
// const heading = <h1>This is a JSX heading converted by babel</h1>

// Components
// 1. Function Component
// 2. Class Component -> Not used much nowadays

root.render(
    <HeadingComponent />
);