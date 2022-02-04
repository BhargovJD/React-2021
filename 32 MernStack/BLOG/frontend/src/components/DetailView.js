import React,{useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import { getPost,deletePost } from './../service/api';
import { useNavigate } from 'react-router';


export default function DetailView() {
  const navigate = useNavigate();


  const[post,setPost] = useState({})
  const { id } = useParams();

  useEffect(()=>{
    const fetchData = async()=>{
      let data = await getPost(id)
      console.log(data)
      setPost(data)
    }
    fetchData()
  },[])

  const postDelete = async ()=>{
    await deletePost(id)
    navigate("/")

  }

  const pictureUrl = "https://upload.wikimedia.org/wikipedia/commons/9/9d/Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg"

  return <div>

<div class="d-flex align-items-center flex-column  bd-highlight mb-3">
  <div class="">
    <img src={post.picture || pictureUrl} alt="..." class="img-thumbnail h-10"/>

    </div>
  <div class="p-2 bd-highlight">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <Link to={`/edit/${post._id}`}><button type="button" class="btn btn-warning">Edit</button></Link>

    <button onClick={()=>postDelete()} type="button" class="btn btn-danger">Delete</button>

    </div></div>
  <div class="p-2 bd-highlight text-center"><p class="fs-2">{post.title}</p>
    <p class="fs-4"><span>{new Date(post.createdDate).toDateString()}</span><Link to={`/?username=${post.username}`}><span>Author:{post.username}</span></Link></p>
    <p class="fs-5">{post.description}</p>
    </div>
</div>

  </div>;
}
