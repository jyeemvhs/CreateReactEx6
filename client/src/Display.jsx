
import React, { Component } from 'react';

class Display extends Component {
  render() {
    return(
      <div>
      <div>Text in Display. Below is property count.</div>
      <div>{this.props.count}</div>
      </div>
    );
  }
}

export default Display;
