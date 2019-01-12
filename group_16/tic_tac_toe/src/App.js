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

  clickHandler(cellId) {
    console.log('clicked cell id', cellId);

    // понять, пустая ячейка или нет?

    // при помощи
    // const newCells = this.state.cells.map(
    //   cell => {
    //     // проверка на id  и изменение ячейки

    //     return cell;
    //   }
    // )
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
              onClick={() => this.clickHandler(cell.id)}
              className="field-cell">
            </div>)
          )}
        </div>
    );
  }
}

export default App;
