import React, { useState } from 'react';
import { addTodo } from '../../actions';

const TodoForm = props => {

    const [task, setTask] = useState('');

    const handleChange = e => {
        setTask(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const action = addTodo(task);
        props.dispatcher(action);
        setTask('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="text-field" type="text"  name="todo" placeholder="Todo" value={task} onChange={handleChange} />
            {/* <button type="submit">Add</button> */}
        </form>
    )
}

export default TodoForm;