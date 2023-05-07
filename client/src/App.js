import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Button from './Button';
import Number from './Number';


class App extends Component {
  constructor() {
    super();
    this.state = {count: 0,number1: "5"};
    this.updateNumber1 = this.updateNumber1.bind(this);
  }

  handleRead = () => {
    fetch('/api/read?value=3')
    .then(res => res.json())
    .then(res => this.setState({count:res.count}));
  };

  updateNumber1(newNumber) {
    console.log("Updating number = " + newNumber);
    this.setState({number1: newNumber});

    var obj = {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: newNumber})
    };

    fetch("/api/create", obj)  
        .then(res => res.json())
        .then(res => this.setState({count:res.count}));
  }

//{this.state.number1} shown below is then used in the Number class
//{this.props.children}
  render() {
    return (
      <div>
        <Display count={this.state.count}/>

        <div>================</div>
        <Button text="Read" onClick={this.handleRead} />

        <div>================</div>
        <Number updateCommentNumber={this.updateNumber1} >
          {this.state.number1}
        </Number>

      </div>
    );
  }
}

export default App;



