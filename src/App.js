import React, {useReducer} from 'react';
//import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./components/TodoComponents/Todo.css";
import { reducer, initialState } from './reducers';

const  App = () =>{
  const [state, dsipatch] = useReducer(reducer, initialState);
  /** Handle input field and form submit */
  const handleInput = data => {
    //his.addTodo(data);
  }
  
  return (
    <div className="container">
      <h2>Welcome to your Todo App!</h2>
      {/* <TodoForm handleInput={handleInput}  /> */}
      <TodoList clearCompleted={null} toggleCompleted={null} list={state.todos} />
    </div>
  );
}

export default App;
