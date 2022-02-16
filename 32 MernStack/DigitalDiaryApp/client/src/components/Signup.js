import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (password !== confirmpassword) {
      setMessage("Passwords do not Match");
      setLoading(false);
    } else {
      try {
        setLoading(true);
        const { data } = await axios.post("http://localhost:5000/api/users", {
          name,
          email,
          password,
          pic,
        });

        // localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        setError(null);
        setSuccess("Account created successfully! Now we can login...");
      } catch (err) {
        if (err) {
          const er = "Email already exist...";
          console.log(er, err);
          setLoading(false);
          setError(er);
        }
      }
    }
  };

  // const picUploadDetails=(pics)=>{
  //   if(!pics){
  //     return setPicMessage("Please select an image")
  //   }
  //   setPicMessage(null)
  //   if(pic.type === 'image/jpeg' || pic.type === 'image/png')
  //   const data = new FormData()
  //   data.append('file', pics)
  //   data.append('upload_preset','diary-notes')
  //   data.append('cloud_name','dmq6h2h7y')
  //   fetch('POST https://api.cloudinary.com/v1_1/demo/image/upload',{
  //     method:"post",
  //     body:data,
  //   }).then((res)=>res.json())
  //   .then((data)=>{
  //     console.log(data)
  //     setPic(data.url.toString())
  //   }).
  //   catch((err)=>{
  //     console.log(err)
  //   })
  // }

  const postPicDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "diary-notes");
      data.append("cloud_name", "dmq6h2h7y");
      fetch("https://api.cloudinary.com/v1_1/dmq6h2h7y/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-primary">New user? Register below</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="name"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3">
                <input
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  value={confirmpassword}
                  placeholder="confirm password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div class="mb-3">
                {picMessage ? (
                  <div class="alert alert-danger" role="alert">
                    {picMessage}
                  </div>
                ) : (
                  <label for="formFile" class="form-label">
                    Profile Picture
                  </label>
                )}

                <input
                  onChange={(e) => postPicDetails(e.target.files[0])}
                  placeholder="Pofile"
                  class="form-control"
                  type="file"
                  id="formFile"
                />
              </div>

              {message ? (
                <div class="alert alert-danger" role="alert">
                  {message}
                </div>
              ) : (
                ""
              )}

              {error ? (
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : (
                ""
              )}

              {success ? (
                <div class="alert alert-success" role="alert">
                  {success}
                </div>
              ) : (
                ""
              )}

              {loading ? (
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                <button type="submit" className="btn btn-success">
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
