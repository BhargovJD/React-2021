import React,{useState} from 'react';

export default function InputForm() {
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
      <form onSubmit={handleSubmit}>
      <h2>Add Place Information</h2>

  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setTitle(e.target.value)}}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">description</label>
    <textarea required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setDesc(e.target.value)}}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">address</label>
    <textarea required type="text" className="form-control" id="" aria-describedby="" onChange={(e)=>{setAddress(e.target.value)}}/>
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>;
}
