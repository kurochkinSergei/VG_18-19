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

    this.winnerCombinations = [[0, 1, 2], [1, 4, 7], [0, 4, 8]];
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

  checkWinner() {
    const { cells, currentPlayer } = this.state;

    for (let i = 0; i < this.winnerCombinations.length; i++) {
      const combination = this.winnerCombinations[i];

      let hasWon = true;

      for (let j = 0; j < combination.length; j++) {
        if (cells[combination[j]].value !== currentPlayer) {
          hasWon = false;
        }
      }

      if (hasWon) {
        return true
      }
    }

    return false;
  }

  clickHandler(cell) {
    const cellId = cell.id;
    const { cells, currentPlayer } = this.state;

    console.log('clicked cell id', cellId);
    // const cells = this.state.cells;
    //  строчка 33 идентична строчке 31
    
    // понять, пустая ячейка или нет
    if (cell.value) {
      console.log('ячейка заполнена');

      return;
    }
    
    const newCells = cells.map(
      c => {
        if (c.id === cell.id) {
          cell.value = currentPlayer;
        }

        return c;
      }
    )

    this.setState({
      cells: newCells,
    })

    if (!this.checkWinner()) {
      this.setState({
        currentPlayer: currentPlayer === 'крестик' ? 'нолик' : 'крестик',
      })
    } else {
      alert(`Пользователь ${currentPlayer} победил!!!`);
    }

    console.log('CELLS', cells);
    // создать новый массив, в котором будет изменена
    // только та ячейка, у которой id === cellId

    // если ячейка пустая, то есть cell.value !== ''
    // записываем в нее value = 'крестик' или 'нолик'
    // в зависимости от currentPlayer

    // если ячейка не пустая, то прекращаем выполнение функции командой
    // return;

    // проверяем, не выиграл ли игрок (реализовать в последнюю очередб)

    // если игрок не выиграл - сменить игрока
    // то есть поменять currentPlayer

    // записать новый массив ячеек newCells с измененной ячейкой в state
  }

  render() {
    return (
        <div className="field">
          {this.state.cells.map(
            cell => (<div
              key={cell.id}
              onClick={() => this.clickHandler(cell)}
              className="field-cell">
                <div className="cell-value">
                  {cell.value}
                </div>
            </div>)
          )}
        </div>
    );
  }
}

export default App;
