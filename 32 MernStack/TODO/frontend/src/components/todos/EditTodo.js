import React,{useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchOn} from '../../features/fetch-reducer'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditTodo() {
  const nav = useNavigate()
  const  {todo_id}  = useParams();
  // console.log("todo id:"+todo_id)

  const dispatch = useDispatch()
  const fetchCondition = useSelector((state)=>state.fetchReducer.value)


  const [title, setTitle] = useState("")
  const[todo, setTodo] = useState("")

  const [loading, setLoading] = useState(false)


  const loggedUserEmail = useSelector((state)=>state.user.value)
  const author = loggedUserEmail.currentUserEmail


  const handleSubmit = async (e)=>{
    e.preventDefault();
    // console.log(title)


    try{
      setLoading(true)

      const res = await axios.put(`http://localhost:5000/api/todos/${todo_id}`,{
        title:title,
        author:author
      })

      setLoading(false)

      dispatch(fetchOn(fetchCondition?false:true))
      // console.log(res.data)
      nav("/")

    }
    catch(err){
      console.log(err.response)
      toast.error(err.response.data, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
        setLoading(false)

    }
  }

  // Get todo

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get(`http://localhost:5000/api/todos/${todo_id}`)
      // console.log("One"+res.data.title)
      const preData = res.data.title
      setTodo(preData)
    }
    fetchPosts()
  },[],)


  return <div>
      <br></br>
<div className="container">
<ToastContainer

/>
<ToastContainer />

      <form onSubmit={handleSubmit}>
  <div class="mb-3">

    <input placeholder={todo} value={title.value} name='title' onChange={(e)=>setTitle(e.target.value)} type="text" class="form-control" id=""  aria-describedby=""/>
  </div>


  {loading? <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>: <button type="submit" class="btn btn-warning">Edit Todo</button>}
</form>

</div>
  </div>;
}

export default EditTodo;
