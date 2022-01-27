import React,{useEffect,useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios'

export default function Single() {
  const location = useLocation()
  // console.log(location)
  // console.log(location.pathname.split("/")[2])
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState([])

  useEffect(()=>{
    const getPost = async()=>{
      const res = await axios.get('http://localhost:5000/api/posts/'+path)
      // console.log(res)
      setPost(res.data)
    }
    getPost()
  },[])

  return <div className=' d-flex justify-content-center'>
      <div class="card " style={{"width": "25rem"}}>
      {post.photo && (
          <img src={post.photo} class="card-img-top" alt="..."/>
        )}
  <div class="card-body">

  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-warning">Edit</button>
  <button type="button" class="btn btn-danger">Delete</button>
</div>

    <h5 class="card-title">Title: {post.title}</h5>
    <span>{new Date(post.createdAt).toDateString()}</span>

    <p>Posted by:
      <Link to={`/?user=${post.postedBy}`}> {post.postedBy}</Link>
     </p>
    <p class="card-text">Description: {post.desc}</p>
  </div>
</div>
<br></br>
  </div>;
}
