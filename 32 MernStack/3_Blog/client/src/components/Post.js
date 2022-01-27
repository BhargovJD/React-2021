import React from 'react';
import dp from '../images/dp.jpg'
import {BrowserRouter as Router, Routes, Route, Link, }  from 'react-router-dom'


export default function Post({post}) {
  // const postId = post._id
  // const pathTo = `/post-detail/`+postId
  // console.log(pathTo)

  return <div className=' d-flex justify-content-center'>
      <div class="card " style={{"width": "25rem"}}>
        {post.photo && (
          <img src={dp} class="card-img-top" alt="..."/>
        )}

  <div class="card-body">
    <h5 class="card-title">{post.title}</h5>
    <span>{new Date(post.createdAt).toDateString()}</span>
    {post.categories.map((c)=>{
      <span>{c.name}</span>
    })}
    <p class="card-text">{post.desc}</p>
    {/* <p>{post._id}</p> */}
    <Link style={{"textDecoration":"none"}} to={`/post-detail/${post._id}`}> Read full story </Link>
  </div>
</div>
  </div>;
}
