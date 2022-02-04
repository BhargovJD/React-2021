import React, { useEffect,useState } from 'react';
import { getAllPosts } from '../service/api';
import Post from './Post';
import { useLocation } from 'react-router-dom';

export default function Posts() {
  const[posts,setPosts] = useState([])
  const {search} = useLocation()

  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getAllPosts(search);
      console.log(data)
      setPosts(data)
    }
    fetchData()
  },[search])


  return <div>

{/* {
         categories.map(cat=>(
            <tr>
             <td>{cat}</td>
             </tr>
         ))
     } */}

    {
      posts.map(p=>(
        <Post post= {p}/>
      ))
    }

  </div>;
}
