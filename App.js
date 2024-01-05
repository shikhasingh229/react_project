import React from "react";
import ReactDOM from "react-dom/client";

const head1 = React.createElement(
  "h1",
  { className: "header", key: "k1" },
  "Namaste Everyone!"
);

const head2 = React.createElement(
  "h2",
  { className: "header", key: "k2" },//key is added to improve performance
  "Kaise H Aaplog?"
);

const cont = React.createElement(
  "div",
  {
    id: "container",
  },
  [head1, head2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(cont);
