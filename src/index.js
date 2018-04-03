import React from "react";
import { render } from "react-dom";

var createReactClass = require("create-react-class");

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

var Bacon = createReactClass({
  render: function() {
    return (
      <div>
        <h2>Test</h2>
        <p>Bla</p>
      </div>
    );
  }
});
render(
  <div>
    <Bacon />
    <Bacon />
    <Bacon />
  </div>,
  document.getElementById("root")
);
