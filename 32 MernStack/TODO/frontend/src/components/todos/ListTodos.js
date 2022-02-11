import React from 'react';
import Todo from './Todo';
// import { useSelector } from 'react-redux';

function ListTodos({todos}) {
  return <div>
    <br></br>


    {todos.map((t)=>(
        <Todo todo={t} id={t._id} key={t._id}/>
    ))}


  </div>;
}

export default ListTodos;
