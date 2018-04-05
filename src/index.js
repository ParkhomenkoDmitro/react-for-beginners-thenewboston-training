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
    let val = this.refs.newText.value;
    console.log("Val = " + val);
    this.setState({ editing: false });
  },
  remove: function () {
    alert("Remoing comment ");
  },
  renderEditMode: function() {
    return (
      <div className="commentContainer">
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
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

var Board = createReactClass({
  getInitialState: function() {
    return {
      comments: [
        'I like eating chees',
        'Have you ever been to Kiev?',
        'This is enaught comments'
      ]
    };
  },
  render: function() {
    return (
      <div className="board">
        {
          this.state.comments.map(function(textValue, index) {
            return (<Comment key={index}>{textValue}</Comment>);
          })
        }
      </div>
    )
  }
});

render(<Board />, document.getElementById("root"));
