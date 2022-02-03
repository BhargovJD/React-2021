import React,{useState} from 'react';

export default function InputForm() {
  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");
  const[address, setAddress] = useState("");
  const[postedBy,setPostedBy]=useState("")

  const[isLoading, setIsLoading] = useState(false)



  // console.log(title,desc)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      setIsLoading(true)
      const response = await fetch('http://localhost:5000/api/places/create', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },

        body:JSON.stringify({
          title:title,
          description:desc,
          image:"image.jpg",
          address:address,
          posted_by:postedBy
        })
      });

      const resData = await response.json()
      console.log(resData)
    }

    catch(err){
      console.log(err)
    }
    setIsLoading(false)
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
