import React from "react";
import { render } from "react-dom";

var createReactClass = require("create-react-class");

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

var Comment = createReactClass({
  edit: function () {
     alert("Editing comment "); 
  },
  remove: function () {
    alert("Remoing comment ");
  },
  render: function() {
    return (
      <div className="commentContainer">
        <div className="commentText">{this.props.children}</div>
        <button onClick={this.edit} className="button-primary">Edit</button>
        <button onClick={this.remove} className="button-danger">Remove</button>
      </div>
      );
  }
});


render(
  <div className="board">
    <Comment>Hey now</Comment>
    <Comment>I like you girl</Comment>
    <Comment>Beans</Comment>
  </div>,
  document.getElementById("root")
);
