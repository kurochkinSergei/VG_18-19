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

  componentDidMount() {
    document.addEventListener('keydown', this.moveRacket);

    // шарик двигать через setInterval
    // setInterval(this.moveBall, 100)
}

    // ракетка, которой нужно изменить стили, должна выбираться на основании нажатой клавиши
  moveRacket = (e) => {
    console.log('EVENT', e);

    let racket = 'racketTwo';

    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        racket = 'racketOne';
    }

    this.setState({
        [racket]: {
            position: {
                left: this.state[racket].position.left + 25,
                top: this.state[racket].position.top,
            }
    }})
  }

  render() {
    return (
    <div className="field">

        <Racket
            {...this.state.racketOne}
        />
        
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
