import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = { counter: 0 }
  }

  incCounter = () => {
    let currentCounter = this.state.counter;
    this.setState({ counter: currentCounter +1 })
  }

  render() {
    return (
      <div className="counter-wrapper">
        <h1>Hello world</h1>
        <div>
          {this.state.counter}
        </div>
        <button>-</button>
        <button onClick={this.incCounter}>+</button>
      </div>
      )
  }
}

export default App;
