import React,{useEffect, useState} from 'react';
import { useLocation} from "react-router-dom";
import Sidebar from './Sidebar';
import Posts from './Posts';
import axios from 'axios'

export default function Main() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get('http://localhost:5000/api/posts'+search)
      // console.log(res)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  
  return <div>
      <div class="container">
  <div class="row">
    <div class="col-md-4">
        <br></br>
      <Sidebar/>
    </div>
    <div class="col-md-8">
        <br></br>
      <Posts posts={posts}/>
    </div>

  </div>
</div>
  </div>;
}
