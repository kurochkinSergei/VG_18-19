import React, { Component } from 'react';
import './App.css';
import uuid4 from 'uuid4';

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [
        {
          description: 'Скушать кексик',
          doUntill: 'до 31 декабря',
          status: 'не выполнено',
          priority: 'высокая',
          key: uuid4(),
        },        
        {
          description: 'Сделать матешу',
          doUntill: 'до понедельника',
          status: 'не выполнено',
          priority: 'средняя',
          key: uuid4(),
        },        
        {
          description: 'Погулять с Виталиком',
          doUntill: 'до завтра',
          status: 'не выполнено',
          priority: 'низкая',
          key: uuid4(),
        },        
      ]
    }
  }
  
  deleteTodo = (keyToDelete) => {
    console.log('БУДУ УДАЛЯТЬ: ', keyToDelete);
    const newTodos = this.state.todos.filter(todo => todo.key !== keyToDelete)

    console.log('СТАРОЕ СОСТОЯНИЕ: ', this.state);
    console.log('НОВОЕ СОСТОЯНИЕ: ', { ...this.state, todos: newTodos });
    
    // меняем состояние только так!!!
    this.setState({ todos: newTodos });
  }

  render() {
    return (<div className="container">
      {this.state.todos.map(
        todo => (
        <div
          className="todo"
          key={todo.key}
          onClick={() => this.deleteTodo(todo.key)}
        >
          <h3>{todo.description}</h3>
          <p>{todo.doUntill}</p>
          <p>{todo.priority}</p>
          <p>{todo.status}</p>
        </div>)
      )}
    </div>)
  }
}

export default App;
