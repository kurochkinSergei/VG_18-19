import React, { Component } from 'react';
import uuid4 from 'uuid4';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPlayer: 'крестик',
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

  clickHandler(e) {
    console.log('CLICK EVENT', e);
  }

  render() {
    return (
        <div className="field">
          {this.state.cells.map(
            cell => (<div
              key={cell.id}
              onClick={e => this.clickHandler(e)}
              className="field-cell">
            </div>)
          )}
        </div>
    );
  }
}

export default App;
