import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    const {list, dispatcher} = props;

    return (
        <div className="tasks-wrapper">
            <div className="menu">
                <button onClick={e => e.preventDefault} className="btn btn-clear">
                    CLEAR COMPLETED
                </button>
            </div>
            <ul className="tasks">
                {!list.length && 
                    <h2 className="no-tasks">You haven't add tasks to your list yet.</h2>
                }
                {list?.map((todo, index) => <Todo key={index} dispatcher={dispatcher} todo={todo} />)}
            </ul>
        </div>
    )
}

export default TodoList;