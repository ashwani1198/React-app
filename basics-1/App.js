const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i m an h1 tag"),
    React.createElement("h2", {}, "i m an h2 tag"),
  ])
);

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from React !"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
