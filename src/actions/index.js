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