import React from 'react';
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';

function Todos() {
  return <div>
      <h4>My Todos</h4>
      <AddTodo/>
      <ListTodos/>
  </div>;
}

export default Todos;
