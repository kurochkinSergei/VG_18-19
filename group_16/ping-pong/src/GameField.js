import React, { Component } from 'react';

class GameField extends Component {
  render() {
    return (
    <div className="field">
        <div className="caret caret_top" />
        <div id="caret-bottom" className="caret caret_bottom" />        
        <div className="ball" />
    </div>
    );
  }
}

export default GameField;
