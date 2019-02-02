import React, { Component } from 'react';

class GameField extends Component {
  width = 500;
  height = 600;

  state = {
    racketOne: {
        position: {
            left: 200,
            top: 0,
        },
        score: 0,
    },
    racketTwo: {
        position: {
            left: 200,
            top: this.height - 20,
        },
        score: 0,
    },

    ball: {
        position: {
            top: 290,
            left: 240,
        }
    }
  }

  render() {
    const racketOneStyle = {
        left: this.state.racketOne.position.left,
        top: this.state.racketOne.position.top,
    } 

    const racketTwoStyle = {
        left: this.state.racketTwo.position.left,
        top: this.state.racketTwo.position.top,
    } 

    console.log('racketStyle', racketOneStyle)
    return (
    <div className="field">
        <div className="caret" style={racketOneStyle} />
        <div className="caret" style={racketTwoStyle} />        
        <div className="ball" />
    </div>
    );
  }
}

export default GameField;
