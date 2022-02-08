import React,{useState,useEffect} from 'react';
import { createPost} from '../service/api';
import { useNavigate } from 'react-router';




export default function CreatePost() {
  const navigate = useNavigate();


  const initialValues = {
    title:"",
    description:"",
    picture:"",
    username:"Bhargov",
    categories:"All",
    createdDate: new Date()
  }

  const [post,setPost] = useState(initialValues)

  const handleInput = (e)=>{
    setPost({...post, [e.target.name]: e.target.value})
  }


  const savePost = async () =>{
    await createPost(post);
    alert("Blog submitted")
    navigate('/')

  }

  // File upload
  // const [file, setFile] = useState("")
  // useEffect(()=>{
  //   const getImage = async()=>{
  //     if(file){
  //       const data = new FormData();
  //       data.append("name", file.name)
  //       data.append("file",file)

  //       await uploadFile(data)
  //     }
  //   }
  //   getImage();
  // },[file])



  const pictureUrl = ""

  return <div>

<div class="d-flex align-items-center flex-column  bd-highlight mb-3">
  <div class="p-2 bd-highlight">
    {/* <img src={pictureUrl} alt="..."/> */}
    </div>
  <div class="p-2 bd-highlight">
  <div class="input-group mb-3">

  {/* <input onChange={(e)=>setFile(e.target.files[0])} type="file" class="form-control" id="inputGroupFile02"/>
  <label class="input-group-text" for="inputGroupFile02">Upload</label> */}

</div>
    </div>


  <div class="p-2 bd-highlight text-center">
  {/* <form> */}

  <div class="mb-3">
    <label for="" class="form-label">Title</label>
    <input name='title' onChange={(e)=>handleInput(e)} type="text" class="form-control" id="" aria-describedby=""/>
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Description</label>
    <textarea name='description' onChange={(e)=>handleInput(e)} type="text" class="form-control" id="" aria-describedby=""/>
  </div>


  <button onClick={()=>{savePost()}} type="submit" class="btn btn-primary">Submit</button>
{/* </form> */}
    </div>
</div>

  </div>;
}
