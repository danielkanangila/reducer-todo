export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const ADD_TODO = 'ADD_TODO';
export const CLEAR_COMPLETED_TODO = 'CLEAR_COMPLETED_TODO';
export const SELECT_TASK = 'SELECT_TASK';

export const addTodo  = item => {
    return {
        type: ADD_TODO,
        payload: {
            id: Date.now(),
            item: item,
            completed: false,
            completed_at: null,
        }
    }
}

export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload: { 
            id,
            completed_at: Date.now(),
        },
    }
}

export const clearCompletedTodos = () => {
    return { type: CLEAR_COMPLETED_TODO }
}

export const selectAllTask = status => {
    return { type: SELECT_TASK, payload: {status} };
}