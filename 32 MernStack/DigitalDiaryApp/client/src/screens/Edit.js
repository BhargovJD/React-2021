import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { updateNoteAction } from "../actions/notesAction";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

      console.log(data.note);

      setTitle(data.note.title);
      setContent(data.note.content);
      setCategory(data.note.category);
    };

    fetching();
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(id, title, content, category));
    if (!title || !content || !category) return;

    navigate("/diary-notes");
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
                aria-describedby=""
              />
            </div>

            <div class="mb-3">
              <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                class="form-control"
                aria-describedby=""
              />
            </div>

            <div class="mb-3">
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                class="form-control"
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
