import React from 'react';
import CheckBox from './../CheckBox';
import { toggleCompleted } from './../../actions'
import moment from 'moment';

const Todo = ({todo, dispatcher}) => {
    const getFormatedDate = date => {
        return moment(date, "x").calendar()
    }
    return(
        <li className="tasks-item">
            <CheckBox toggle={() => dispatcher(toggleCompleted(todo.id))} value={todo.completed} />
            <p className={todo.completed ? "tasks-text completed" : "tasks-text"}>
                {todo?.item}
            </p>
            <p className="date">
                <span className="date__created">Created: {getFormatedDate(todo.id)}</span>
                {todo.completed && 
                    <span className="date__completed">Completed: {getFormatedDate(todo.completed_at)}</span>
                }
            </p>
        </li>
    )
}

export default Todo;