import React, {useReducer} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./components/TodoComponents/Todo.css";
import { reducer, initialState } from './reducers';

const  App = () =>{
  const [state, dispatch] = useReducer(reducer, initialState);  
  
  return (
    <div className="container">
      <h1>Welcome to your Todo App!</h1>
      <TodoForm dispatcher={dispatch}  />
      <TodoList dispatcher={dispatch} list={state.todos} />
    </div>
  );
}

export default App;
