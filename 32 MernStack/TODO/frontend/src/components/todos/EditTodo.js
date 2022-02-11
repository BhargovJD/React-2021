import React,{useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function EditTodo() {
  const  {todo_id}  = useParams();
  console.log("todo id:"+todo_id)


  const [title, setTitle] = useState("")
  const[todo, setTodo] = useState("")

  const loggedUserEmail = useSelector((state)=>state.user.value)
  const author = loggedUserEmail.currentUserEmail


  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(title)


    try{
      const res = await axios.put(`http://localhost:5000/api/todos/${todo_id}`,{
        title:title,
        author:author
      })

      console.log(res.data)

    }
    catch(err){
      console.log(err.response)

    }
  }

  // Get todo

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get(`http://localhost:5000/api/todos/${todo_id}`)
      console.log("One"+res.data.title)
      const preData = res.data.title
      setTodo(preData)
    }
    fetchPosts()
  },[],)


  return <div>
      <br></br>
<div className="container">

      <form onSubmit={handleSubmit}>
  <div class="mb-3">

    <input placeholder={todo} value={title.value} name='title' onChange={(e)=>setTitle(e.target.value)} type="text" class="form-control" id=""  aria-describedby=""/>
  </div>


  <button type="submit" class="btn btn-warning">Edit Todo</button>
</form>

</div>
  </div>;
}

export default EditTodo;
