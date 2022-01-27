import React from 'react';
import Post from './Post';
import Main from './Main';

export default function Posts({posts}) {
  return <div>
    {posts.map((p)=>(
      <Post post={p}/>
    ))}



  </div>;
}
