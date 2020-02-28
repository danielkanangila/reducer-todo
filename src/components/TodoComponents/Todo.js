import React from 'react';
import CheckBox from './../CheckBox';
import { toggleCompleted } from './../../actions'

const Todo = ({todo, dispatcher}) => {
    
    return(
        <li className="tasks-item">
            <CheckBox toggle={() => dispatcher(toggleCompleted(todo.id))} value={todo.completed} />
            <p className={todo.completed ? "tasks-text completed" : "tasks-text"}>
                {todo?.item}
            </p>
        </li>
    )
}

export default Todo;