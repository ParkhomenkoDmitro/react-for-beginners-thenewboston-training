import React from "react";
import { render } from "react-dom";

var createReactClass = require("create-react-class");

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

var Movie = createReactClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.genre}</p>
      </div>
    );
  }
});
render(
  <div>
    <Movie title="Avatar" genre="action" />
    <Movie title="Non stop" genre="triller"/>
    <Movie title="Rebbit Petric" genre="cartoon" />
  </div>,
  document.getElementById("root")
);
