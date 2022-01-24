import React,{useState} from 'react';
import { Posts } from '../dummyData';
import { Users } from '../dummyData';


export default function Post() {


    const [like, setLike] = useState(0)
    const [isLiked, setIsliked] = useState(false)

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsliked(!isLiked)
    }


  return <div>

      {Posts.map((p)=>(
          <div class="card" >
          <img src={Users.filter((u)=>u.id===p.userId)[0].profilePicture} style={{"height":"50px","width":"50px",}} class="img-circle rounded" alt="Cinque Terre"/> <span>by: {Users.filter((u)=>u.id===p.userId)[0].username}</span>

      <img src={p.photo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Post title</h5>
        <p class="card-text">{p.date}</p>
        <p class="card-text">{p.desc}</p>

        <div class="d-flex justify-content-between">
      <div class="p-2">
      <button onClick={likeHandler} type="button" class="btn btn-outline-success">Like</button> <span>{like} Likes</span>

      </div>
      <div class="p-2">
      <button type="button" class="btn btn-outline-primary">{p.comment} Comments</button>

      </div>
    </div>

      </div>
    </div>
      ))}


<hr></hr>
  </div>;
}
