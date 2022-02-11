import React,{useState} from 'react';
import { useEffect } from 'react';
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';
import axios from 'axios'
import { useSelector } from 'react-redux';
import {fetchOn} from '../../features/fetch-reducer'
import { useDispatch } from 'react-redux';

function Todos() {
  const [todos, setTodos] = useState([]);
  const fetchCondition = useSelector((state)=>state.fetchReducer.value)

  const dispatch = useDispatch()


  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get('http://localhost:5000/api/todos')
      // console.log(res)
      setTodos(res.data)
    }
    fetchPosts()
  },[fetchCondition])



  return <div>
      <h4>My Todos</h4>
      <AddTodo/>

      {<ListTodos todos={todos}/>}
  </div>;
}

export default Todos;
