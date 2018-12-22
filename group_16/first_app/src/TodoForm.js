import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        description: '',
        priority: '',
      }
    }

    onDescChange = value => {
        console.log('VALUE', value)
        this.setState({ description: value })
        console.log('onDescChange', this.state);
    }

    onPriorityChange = (value) => {
        this.setState({ priority: value })

    }
    
    render() {
  
      return (<div className="todo-form">
        <form>
            <label>
                Описание
                <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={(e) => {
                        console.log('event', e.currentTarget.value);this.onDescChange(e.currentTarget.value)}}
                />
            </label>
            <label>
                Приоритет
                <input
                    type="text"
                    name="priority"
                    value={this.state.priority}
                    onInput={(e) => this.onPriorityChange(e.currentTarget.value)}
                />
            </label>

            <button type="submit">Сохранить!</button>
        </form>
      </div>) 
    }
  }

export default TodoForm;