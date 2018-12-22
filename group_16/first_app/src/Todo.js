import React from 'react';

const Todo = (props) => {
    console.log('TODO props', props);

    return (<div
        className="todo"
        onClick={() => props.deleteTodo(props.todoKey)}
        >
        <h3>{props.description}</h3>
        <p>{props.doUntill}</p>
        <p>{props.priority}</p>
        <p>{props.status}</p>
        </div>
    )
}

export default Todo;