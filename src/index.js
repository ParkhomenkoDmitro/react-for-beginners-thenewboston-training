import React from "react";
import { render } from "react-dom";

var createReactClass = require("create-react-class");

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

var Check = createReactClass({

  getInitialState: function() {
    return {checked: true}
  },
  handleCheck: function() {
    this.setState({ checked: !this.state.checked}); 
  },
  render: function() {
    var msg;
    if(this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }

    return (
      <div>
       <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
       <h3>Checkob is {msg}</h3>
      </div>
      );
  }
});


render(
    <Check/>  
  ,
  document.getElementById("root")
);
