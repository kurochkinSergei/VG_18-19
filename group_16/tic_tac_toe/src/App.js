import React, { Component } from 'react';
import uuid4 from 'uuid4';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cells: this.init(3)
    }
  }

  init(size) {
    let cells = [];

    for (let i = 0; i < size*size; i++) {
      cells.push({
        id: uuid4(),
        value: '',
        order: i,
      })
    }

    return cells;
  }

  render() {
    return (
        <div>
          {JSON.stringify(this.state)}
        </div>
    );
  }
}

export default App;
