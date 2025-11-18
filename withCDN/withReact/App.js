
// Traditionally we create components like this (CORE PART)



// const heading = React.createElement("h1",{id: "heading1"},"heading from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading)



const parentDiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", {}, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h1", {}, "heading2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentDiv);
