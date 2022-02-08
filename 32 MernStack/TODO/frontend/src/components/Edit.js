import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { getPost,editPost } from './../service/api';
import { useNavigate } from 'react-router';


// Edit
const initialValues = {
  title:"",
  description:"",
  picture:"",
  username:"Bhargov",
  categories:"All",
  createdDate: new Date()
}

export default function Edit() {
  const navigate = useNavigate();




  const[post,setPost] = useState(initialValues)
  const { id } = useParams();

  useEffect(()=>{
    const fetchData = async()=>{
      let data = await getPost(id)
      console.log(data)
      setPost(data)
    }
    fetchData()
  },[])


  // Edit
  const handleInput = (e)=>{
    setPost({...post, [e.target.name]: e.target.value})
  }

  const updatePost = async () =>{
    await editPost(id, post);
    navigate(`/blog-detail/${post._id}`)

  }



  const pictureUrl = "https://upload.wikimedia.org/wikipedia/commons/9/9d/Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg"

  return <div>

<div class="d-flex align-items-center flex-column  bd-highlight mb-3">
  <div class="p-2 bd-highlight">
    {/* <img src={post.picture || pictureUrl} class="rounded" alt="..."/> */}
  </div>
  <div class="p-2 bd-highlight">
  <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02"/>
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>
    </div>
  <div class="p-2 bd-highlight text-center">
  {/* <form> */}
  <div class="mb-3">
    <label for="" class="form-label">Title</label>
    <input name='title' onChange={(e)=>handleInput(e)} type="text" class="form-control" id="" aria-describedby="" value={post.title}/>
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Description</label>
    <textarea name='description'  onChange={(e)=>handleInput(e)} type="text" class="form-control" id="" aria-describedby="" value={post.description}/>
  </div>


  <button onClick={()=>{updatePost()}} type="submit" class="btn btn-primary">Submit</button>
{/* </form> */}
    </div>
</div>

  </div>;
}
