import React, { Component } from 'react';
import './App.css';
import uuid4 from 'uuid4';

import Todo from './Todo';
import TodoForm from './TodoForm';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          description: 'Скушать кексик',
          doUntill: 'до 31 декабря',
          status: 'не выполнено',
          priority: 'высокая',
          todoKey: uuid4(),
        },        
        {
          description: 'Сделать матешу',
          doUntill: 'до понедельника',
          status: 'не выполнено',
          priority: 'средняя',
          todoKey: uuid4(),
        },        
        {
          description: 'Погулять с Виталиком',
          doUntill: 'до завтра',
          status: 'не выполнено',
          priority: 'низкая',
          todoKey: uuid4(),
        },        
      ]
    }
  }
  
  deleteTodo = (keyToDelete) => {
    console.log('БУДУ УДАЛЯТЬ: ', keyToDelete);
    const newTodos = this.state.todos.filter(todo => todo.todoKey !== keyToDelete)

    console.log('СТАРОЕ СОСТОЯНИЕ: ', this.state);
    console.log('НОВОЕ СОСТОЯНИЕ: ', { ...this.state, todos: newTodos });
    
    // меняем состояние только так!!!
    this.setState({ todos: newTodos });
  }

  render() {
    const { todos } = this.state;
    // const { todos } = this.props;

    return (<div className="container">
      <TodoForm />

      {todos.map(todo =>
      <Todo
        key={todo.todoKey}
        deleteTodo={this.deleteTodo}
        {...todo}
      />)}
    </div>) 
  }
}

export default App;
