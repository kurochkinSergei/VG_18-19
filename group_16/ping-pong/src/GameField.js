import React, { Component } from 'react';
import Racket from './Racket';


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
    return (
    <div className="field">

        <Racket {...this.state.racketOne} />
        
        <Racket
            position={this.state.racketTwo.position}
            score={this.state.racketTwo.score}
        />

        <div className="ball" />
    </div>
    );
  }
}

export default GameField;
