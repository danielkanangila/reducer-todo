export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const ADD_TODO = 'ADD_TODO';

export const addTodo  = item => {
    return {
        type: ADD_TODO,
        payload: {
            id: Date.now(),
            item: item,
            completed: false,
        }
    }
}

export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload: { id },
    }
}