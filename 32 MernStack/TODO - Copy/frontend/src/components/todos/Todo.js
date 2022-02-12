import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import {fetchOn} from '../../features/fetch-reducer'
import { useDispatch } from 'react-redux';
import axios from "axios";
import { useNavigate } from 'react-router';


function Todo({todo,id}) {
  const dispatch = useDispatch()
  const fetchCondition = useSelector((state)=>state.fetchReducer.value)
  const [loading, setLoading] = useState(false)


  const navigate = useNavigate();

  const loggedUserEmail = useSelector((state)=>state.user.value)

  const currentUser = loggedUserEmail.currentUserEmail
  const check = todo.author === currentUser

  const deleteTodo = async ()=>{

    // http://localhost:5000/api/todos/620153602bff924e37a05303
    try{
      setLoading(true)
     await axios.delete(`http://localhost:5000/api/todos/${id}`)
      dispatch(fetchOn(fetchCondition?false:true))
      // console.log("Deletd")

      setLoading(false)
    }
    catch(err){
      console.log(err.message)

      setLoading(false)
    }
    // console.log("Deleted")
  }


  return (
    <div>
      <div className="container">


      {check? <ul class="list-group">
          <li class="list-group-item">
            <h5>{todo.title}</h5>
            {/* <p>{id}</p> */}
            <div className="text-secondary"><span><b>added:</b> {new Date(todo.date).toDateString()}</span></div>
            <div
              class="btn-group btn-sm"
              role="group"
              aria-label="Basic mixed styles example"
            >
              {/* <Link to={``}>
              <button type="button" class="btn btn-success">
                Completed
              </button>
              </Link> */}

              <Link to={`/edit/${id}`}><button type="button" class="btn btn-warning">
                Edit
              </button>
              </Link>

            <Link to={""}>
            {loading?<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>: <button onClick={deleteTodo} type="button" class="btn btn-danger">
                Delete
              </button>}
            </Link>

            </div>
          </li>
        </ul>:""}
      </div>
    </div>
  );
}

export default Todo;
