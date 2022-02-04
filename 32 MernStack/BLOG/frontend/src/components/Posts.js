import React, { useEffect,useState } from 'react';
import { getAllPosts } from '../service/api';
import Post from './Post';

export default function Posts() {
  const[posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getAllPosts();
      console.log(data)
      setPosts(data)
    }
    fetchData()
  },[])


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
