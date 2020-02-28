import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import CheckBox from '../CheckBox';
import { clearCompletedTodos, selectAllTask } from '../../actions'

const TodoList = props => {
    const [IsSelectAll, setIsSelectAll] = useState(false)
    const {list, dispatcher} = props;

    useEffect(() => {
        if (!list.length) setIsSelectAll(false);
    }, [list])

    const handleSelectAll = () => {
        setIsSelectAll(!IsSelectAll);
        dispatcher(selectAllTask(!IsSelectAll))
    }

    return (
        <div className="tasks-wrapper">
            <div className="menu">
            <CheckBox toggle={handleSelectAll} value={IsSelectAll} />
                <button onClick={e => dispatcher(
                    clearCompletedTodos()
                )} className="btn btn-clear">
                    <i className="fa fa-trash"></i>
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