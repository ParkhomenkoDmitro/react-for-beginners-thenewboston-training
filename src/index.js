import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

var createReactClass = require('create-react-class');

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

// const App = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to see some magic happen {'\u2728'}</h2>
//   </div>
// );
var Bacon = createReactClass({
  render: function() {
    return (<h2>Test</h2>);
  }
});
render(<Bacon />, document.getElementById('root'));
