import React,{useState} from 'react';
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../../store/actions/todoActions';
import axios from 'axios';
import { useSelector } from 'react-redux';


function AddTodo() {
  const [title, setTitle] = useState("")


  const loggedUserEmail = useSelector((state)=>state.user.value)
  const author = loggedUserEmail.currentUserEmail
  // console.log(author)


  // const dispatch = useDispatch()


  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(title,author)

    try{
      const res = await axios.post("http://localhost:5000/api/todos",{
        title:title,
        author:author
      })

      console.log(res.data)
    }
    catch(err){
      console.log(err)

    }
  }



  return <div>
<div className="container">

      <form onSubmit={handleSubmit}>
  <div class="mb-3">

    <input value={title.value} name='title' onChange={(e)=>setTitle(e.target.value)} type="text" class="form-control" id="" placeholder='add a todo...' aria-describedby=""/>
  </div>


  <button type="submit" class="btn btn-primary">Add Todo</button>
</form>

</div>
  </div>;
}

export default AddTodo;
