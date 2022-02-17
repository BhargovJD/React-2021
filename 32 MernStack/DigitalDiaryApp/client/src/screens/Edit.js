import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  const { id } = useParams();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/diary-notes/${id}`,
        config
      );

      console.log(data.note)

      setTitle(data.note.title);
      setContent(data.note.content);
      setCategory(data.note.category);
    };

    fetching();
  }, [id]);

  console.log(title, content, category)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, content, category);
    // console.log(title, content, category);
    // if ((!title, !content, !category)) {
    //   return;
    // }
    // dispatch(createNoteAction(title, content, category));

    // navigate("/diary-notes");
  };
  return (
    <div className="container">
      <h1>Edit</h1>
      <div className="row">
        <div className="col">
          {/* <h2 className="text-success">Login</h2> */}
          <form onSubmit={submitHandler}>
            <div class="mb-3">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
              />
            </div>

            <div class="mb-3">
              <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
              />
            </div>

            <div class="mb-3">
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Add to diary
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
