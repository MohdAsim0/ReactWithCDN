// createElement takes 3 argument which is->
// 1. The first argument is the type of element you want to create, which can be a string representing an HTML tag name
// 2. The second argument is an optional object that represents the properties or attributes you want to assign to the element.
// 3. The third argument is the content or children of the element, which can be a string or another React element.

const container = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { id: "heading", key: 1 }, "Learn Web Development"),
  React.createElement("div", { id: "container1", key: 2 }, [
    React.createElement(
      "p",
      { id: "p1", key: 1 },
      "React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.React is a tool for building UI components.Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations."
    ),
  ]),
  React.createElement("div", { id: "container2", key: 3 }, [
    React.createElement(
      "p",
      { id: "p2", key: 1 },
      "React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.React is a tool for building UI components.",
      React.createElement("a", { id: "anchor", href: "#", key: 2 }, "asim"),
      "React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data."
    ),
  ]),
  React.createElement("div", { id: "container3", key: 4}, [
    React.createElement(
      "p",
      { id: "p3", key: 1 },
      "React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.React is a tool for building UI components."
    ),
  ]),
]);

// createRoot function create a root element for rendering a React application in the DOM.
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.appendChild()

// Render method converts the heading object(returned by the React.createElement) into the elements and renders into the root.
root.render(container);
// root.render(divWithPara)
