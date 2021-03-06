import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
// import { addTodo } from '../../store/actions/todoActions';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {fetchOn} from '../../features/fetch-reducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddTodo() {
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(false)

const dispatch = useDispatch()

const fetchCondition = useSelector((state)=>state.fetchReducer.value)


  const loggedUserEmail = useSelector((state)=>state.user.value)
  const author = loggedUserEmail.currentUserEmail
  // console.log(author)


  // const dispatch = useDispatch()


  const handleSubmit = async (e)=>{
    e.preventDefault();
    // console.log(title,author)

    try{
      setLoading(true)
      const res = await axios.post("http://localhost:5000/api/todos",{
        title:title,
        author:author,
        isComplete:false
      })

      // console.log(res.data)

      setLoading(false)
      dispatch(fetchOn(fetchCondition?false:true))

      setTitle("")

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

    // setTitle("")
  }



  return <div>
<div className="container">
<ToastContainer

/>
<ToastContainer />

      <form onSubmit={handleSubmit}>
  <div class="mb-3">

    <input name='title' value={title} onChange={(e)=>setTitle(e.target.value)} type="text" class="form-control" id="" placeholder='todo title...' aria-describedby=""/>
  </div>



  {loading? <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>: <button type="submit" class="btn btn-primary">Add Todo</button>}
</form>

</div>
  </div>;
}

export default AddTodo;
