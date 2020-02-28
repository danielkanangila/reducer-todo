import React from 'react';
import CheckBox from './../CheckBox';
const Todo = props =>{

    const handleChange = e => {
        props.toggleCompleted(props.todo.id)
    } 

    return(
        <li className="tasks-item">
            <CheckBox toggle={handleChange} value={props.todo.completed} />
            <p className={props.todo.completed ? "tasks-text completed" : "tasks-text"}>
                {props?.todo?.item}
            </p>
        </li>
    )
}

export default Todo;