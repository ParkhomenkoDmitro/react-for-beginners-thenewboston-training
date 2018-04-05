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
    //console.log("Val = " + val);
    this.props.updateComment(val, this.props.index);

    this.setState({ editing: false });
  },
  remove: function () {
    //alert("Remoing comment ");
    this.props.removeComment(this.props.index);
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
      comments: []
    };
  },
  updateComment: function(newText, index) {
    let arr = this.state.comments;
    arr[index] = newText;
    this.setState({ comments: arr });
  },
  removeComment: function(index) {
    let arr = this.state.comments;
    arr.splice(index, 1);
    this.setState({comments: arr});
  },
  oneComment: function(textValue, index) {
    console.log("Comment will be created with index = " + index);
    return (<Comment key={index} index={index} 
    removeComment={this.removeComment} updateComment={this.updateComment}>{textValue}</Comment>);
  },
  add: function(newText) {
    let arr = this.state.comments;
    arr.push(newText);
    this.setState({comments: arr});
  },
  render: function() {
    return (
      <div className="board">
        <button onClick={this.add.bind(null, "Default value")}>Add new comment</button>
        {
          this.state.comments.map(this.oneComment)
        }
      </div>
    )
  }
});

render(<Board />, document.getElementById("root"));
