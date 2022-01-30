import React,{useState} from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateForm({identifiedPlace}) {
  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");
  const[address, setAddress] = useState("");


  // console.log(title,desc)

  const handleSubmit = (e) =>{
    e.preventDefault();
    // Send to backend
    console.log(title,desc,address)
}



  return <div>
      <h2>Update Place Information</h2>
      <form onSubmit={handleSubmit}>

  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setTitle(e.target.value)}} placeholder={identifiedPlace.title}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">description</label>
    <textarea required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setDesc(e.target.value)}} placeholder={identifiedPlace.desc}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">address</label>
    <textarea required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setAddress(e.target.value)}} placeholder={identifiedPlace.add}/>
  </div>


  <button type="submit" className="btn btn-warning">UPADTE PLACE</button>
  
</form>
  </div>;
}
