import React from "react";
import { render } from "react-dom";

var createReactClass = require("create-react-class");

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

var Comment = createReactClass({

  getInitialState: function() {
    return {editing: false}
  },
  edit: function () {
    this.setState({editing: true});
  },
  save: function () {
    this.setState({ editing: false });
  },
  remove: function () {
    alert("Remoing comment ");
  },
  renderEditMode: function() {
    return (
      <div className="commentContainer">
        <textarea>{this.props.children}</textarea>
        <button onClick={this.save} className="button-primary">Save</button>
        <button onClick={this.remove} className="button-danger">Remove</button>
      </div>
    );
  },
  renderNormalMode: function () {
    return (
      <div className="commentContainer">
        <div className="commentText">{this.props.children}</div>
        <button onClick={this.edit} className="button-primary">Edit</button>
        <button onClick={this.remove} className="button-danger">Remove</button>
      </div>
    );
  },
  render: function () {
    if(this.state.editing) {
      return this.renderEditMode();
    } else {
      return this.renderNormalMode();
    }
  }
});


render(
  <div className="board">
    <Comment>Hey now</Comment>
    <Comment>I like you girl</Comment>
    <Comment>Beans</Comment>
  </div>  
  ,
  document.getElementById("root")
);
