import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED_TODO
} from '../actions';

export const initialState = {
    todos: [
      {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
    ]
    
};

export const reducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      };
    case CLEAR_COMPLETED_TODO: 
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      }
  }
}