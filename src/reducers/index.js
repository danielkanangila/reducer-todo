import {ADD_TODO} from '../actions';

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
      }
  }
}